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

      <div className="bg-white/5 border border-dashed border-white/10 rounded-2xl p-10 backdrop-blur-xl">

        <div className="flex flex-col">

          <div className="w-20 h-20 rounded-full bg-indigo-500/20 flex items-center justify-center text-4xl text-indigo-400">
            <FiUploadCloud />
          </div>

          <h2 className="text-2xl font-bold mt-6">
            AI Research Workspace
          </h2>

          <p className="text-slate-400 mt-3">
            Generate enterprise-level AI reports using multi-agent workflows.
          </p>

          <input
            type="text"
            placeholder="Enter research topic..."
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="mt-6 bg-slate-900 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-indigo-500"
          />

          <button
            onClick={generateReport}
            className="mt-4 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500"
          >
            {
              loading
                ? "Generating AI Insights..."
                : "Generate AI Report"
            }
          </button>

        </div>

      </div>

      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl overflow-y-auto max-h-[600px]">

        <h2 className="text-2xl font-bold">
          Executive Report
        </h2>

        <p className="text-slate-400 mt-2">
          AI-generated enterprise intelligence
        </p>

        <div className="mt-8 whitespace-pre-wrap text-slate-300 leading-relaxed">

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