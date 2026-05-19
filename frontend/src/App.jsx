import Sidebar from "./components/layout/Sidebar"
import Topbar from "./components/layout/Topbar"
import StatsCards from "./components/dashboard/StatsCards"
import WorkflowSection from "./components/workflow/WorkflowSection"
import AgentActivity from "./components/agents/AgentActivity"
import UploadPanel from "./components/ui/UploadPanel"

function App() {
  return (
    <div className="relative flex bg-slate-950 text-white min-h-screen overflow-hidden">

      <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full" />

      <Sidebar />

      <div className="flex-1 p-8 relative z-10">
        <Topbar />

        <StatsCards />

        <WorkflowSection />

        <AgentActivity />

        <UploadPanel />
      </div>
    </div>
  )
}

export default App