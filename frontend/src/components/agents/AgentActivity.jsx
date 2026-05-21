const agents = [
  {
    name: "Planner Agent",
    status: "Completed",
    activity: "Task decomposition completed",
  },
  {
    name: "Research Agent",
    status: "Running",
    activity: "Analyzing uploaded enterprise documents",
  },
  {
    name: "Analysis Agent",
    status: "Pending",
    activity: "Waiting for research completion",
  },
  {
    name: "Report Agent",
    status: "Pending",
    activity: "Preparing executive summary generation",
  },
]

function AgentActivity() {
  return (
    <div className="mt-10">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-[#4b2e5e]">
            Agent Activity Monitor
          </h2>

          <p className="text-purple-300 mt-1">
            Real-time operational status of AI agents
          </p>
        </div>

        <div className="w-3 h-3 rounded-full bg-pink-400 animate-pulse" />
      </div>

      <div className="bg-pink-50/80 border border-pink-200 rounded-2xl backdrop-blur-xl overflow-hidden shadow-lg shadow-pink-100/40">
        {agents.map((agent, index) => (
          <div
            key={agent.name}
            className={`flex items-center justify-between p-6 ${
              index !== agents.length - 1
                ? "border-b border-pink-100"
                : ""
            }`}
          >
            <div className="flex items-center gap-4">
              <div
                className={`w-3 h-3 rounded-full ${
                  agent.status === "Completed"
                    ? "bg-emerald-400"
                    : agent.status === "Running"
                    ? "bg-pink-400 animate-pulse"
                    : "bg-purple-200"
                }`}
              />

              <div>
                <h3 className="font-semibold text-[#4b2e5e]">
                  {agent.name}
                </h3>

                <p className="text-sm text-purple-300 mt-1">
                  {agent.activity}
                </p>
              </div>
            </div>

            <div
              className={`text-sm px-4 py-2 rounded-full ${
                agent.status === "Completed"
                  ? "bg-emerald-100 text-emerald-500"
                  : agent.status === "Running"
                  ? "bg-pink-100 text-pink-500"
                  : "bg-purple-100 text-purple-400"
              }`}
            >
              {agent.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AgentActivity