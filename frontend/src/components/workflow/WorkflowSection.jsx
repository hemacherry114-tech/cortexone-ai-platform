import { motion } from "framer-motion"

import {
  FiClipboard,
  FiSearch,
  FiBarChart2,
  FiFileText,
} from "react-icons/fi"

const workflowSteps = [
  {
    title: "Planner Agent",
    description: "Breaking research task into strategic subtasks",
    icon: <FiClipboard />,
    status: "Completed",
  },
  {
    title: "Research Agent",
    description: "Collecting enterprise intelligence and insights",
    icon: <FiSearch />,
    status: "Running",
  },
  {
    title: "Analysis Agent",
    description: "Analyzing findings and identifying patterns",
    icon: <FiBarChart2 />,
    status: "Pending",
  },
  {
    title: "Report Agent",
    description: "Generating executive-level summary report",
    icon: <FiFileText />,
    status: "Pending",
  },
]

function WorkflowSection() {
  return (
    <div className="mt-10">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-[#4b2e5e]">
            Multi-Agent Workflow
          </h2>

          <p className="text-purple-300 mt-1">
            Real-time orchestration of AI research agents
          </p>
        </div>

        <div className="px-4 py-2 rounded-full bg-pink-100 text-pink-500 text-sm border border-pink-200">
          System Active
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        {workflowSteps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            className="relative bg-pink-50/80 border border-pink-200 rounded-2xl p-6 backdrop-blur-xl hover:bg-pink-100/80 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-pink-100/40"
          >
            <div className="flex items-center justify-between">
              <div className="text-3xl text-pink-400">
                {step.icon}
              </div>

              <div
                className={`text-xs px-3 py-1 rounded-full ${
                  step.status === "Completed"
                    ? "bg-emerald-100 text-emerald-500"
                    : step.status === "Running"
                    ? "bg-yellow-100 text-yellow-500"
                    : "bg-purple-100 text-purple-400"
                }`}
              >
                {step.status}
              </div>
            </div>

            <h3 className="text-lg font-semibold mt-6 text-[#4b2e5e]">
              {step.title}
            </h3>

            <p className="text-purple-300 text-sm mt-3 leading-relaxed">
              {step.description}
            </p>

            {step.status === "Running" && (
              <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-pink-300 to-purple-300 rounded-b-2xl animate-pulse" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default WorkflowSection