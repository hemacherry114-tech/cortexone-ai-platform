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
          <h2 className="text-2xl font-bold">
            Agent Activity Monitor
          </h2>

          <p className="text-slate-400 mt-1">
            Real-time operational status of AI agents
          </p>
        </div>

        <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
      </div>

      <div className="bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl overflow-hidden">
        {agents.map((agent, index) => (
          <div
            key={agent.name}
            className={`flex items-center justify-between p-6 ${
              index !== agents.length - 1
                ? "border-b border-white/10"
                : ""
            }`}
          >
            <div className="flex items-center gap-4">
              <div
                className={`w-3 h-3 rounded-full ${
                  agent.status === "Completed"
                    ? "bg-emerald-400"
                    : agent.status === "Running"
                    ? "bg-yellow-400 animate-pulse"
                    : "bg-slate-500"
                }`}
              />

              <div>
                <h3 className="font-semibold">
                  {agent.name}
                </h3>

                <p className="text-sm text-slate-400 mt-1">
                  {agent.activity}
                </p>
              </div>
            </div>

            <div
              className={`text-sm px-4 py-2 rounded-full ${
                agent.status === "Completed"
                  ? "bg-emerald-500/20 text-emerald-400"
                  : agent.status === "Running"
                  ? "bg-yellow-500/20 text-yellow-400"
                  : "bg-slate-500/20 text-slate-400"
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