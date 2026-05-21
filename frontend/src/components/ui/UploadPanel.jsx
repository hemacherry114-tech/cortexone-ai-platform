import { useState } from "react"
import { FiUploadCloud } from "react-icons/fi"
import API from "../../services/api"

function UploadPanel() {

  const [topic, setTopic] = useState("")
  const [report, setReport] = useState("")
  const [loading, setLoading] = useState(false)

  const generateReport = async () => {

    if (!topic) return

    try {

      setLoading(true)

      const response = await API.post(
        "/generate-report",
        {
          topic: topic,
        }
      )

      setReport(response.data.report)

    } catch (error) {

      console.log(error)

    } finally {

      setLoading(false)
    }
  }

  return (

    <div className="mt-10 grid grid-cols-1 xl:grid-cols-2 gap-6">

      <div className="bg-pink-50/80 border border-dashed border-pink-200 rounded-2xl p-10 backdrop-blur-xl shadow-lg shadow-pink-100/40">

        <div className="flex flex-col">

          <div className="w-20 h-20 rounded-full bg-pink-200/60 flex items-center justify-center text-4xl text-pink-400">
            <FiUploadCloud />
          </div>

          <h2 className="text-2xl font-bold mt-6 text-[#4b2e5e]">
            AI Research Workspace
          </h2>

          <p className="text-purple-300 mt-3">
            Generate enterprise-level AI reports using multi-agent workflows.
          </p>

          <input
            type="text"
            placeholder="Enter research topic..."
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="mt-6 bg-white/70 border border-pink-200 rounded-xl px-4 py-3 outline-none focus:border-pink-400 text-[#4b2e5e] placeholder:text-purple-300"
          />

          <button
            onClick={generateReport}
            className="mt-4 px-6 py-3 rounded-xl bg-gradient-to-r from-pink-300 to-purple-300 text-[#4b2e5e] font-semibold shadow-md shadow-pink-200"
          >
            {
              loading
                ? "Generating AI Insights..."
                : "Generate AI Report"
            }
          </button>

        </div>

      </div>

      <div className="bg-pink-50/80 border border-pink-200 rounded-2xl p-8 backdrop-blur-xl overflow-y-auto max-h-[600px] shadow-lg shadow-pink-100/40">

        <h2 className="text-2xl font-bold text-[#4b2e5e]">
          Executive Report
        </h2>

        <p className="text-purple-300 mt-2">
          AI-generated enterprise intelligence
        </p>

        <div className="mt-8 whitespace-pre-wrap text-[#6b4c7a] leading-relaxed">

          {
            report
              ? report
              : "Generated report will appear here..."
          }

        </div>

      </div>

    </div>
  )
}

export default UploadPanel