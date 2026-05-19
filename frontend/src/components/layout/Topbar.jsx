import { FiBell, FiSearch } from "react-icons/fi"

function Topbar() {

  const currentTime = new Date().toLocaleTimeString()

  return (
    <div className="flex items-center justify-between mb-10">

      <div>
        <h1 className="text-5xl font-bold">
          Enterprise AI Workspace
        </h1>

        <p className="text-slate-400 mt-3">
          Multi-Agent Research & Decision Platform
        </p>

        <p className="text-emerald-400 text-sm mt-2">
          System Operational • {currentTime}
        </p>
      </div>

      <div className="flex items-center gap-4">

        <div className="flex items-center bg-white/5 border border-white/10 px-4 py-3 rounded-2xl w-[280px]">
          <FiSearch className="text-slate-400" />

          <input
            type="text"
            placeholder="Search workspace..."
            className="bg-transparent outline-none ml-3 w-full text-sm"
          />
        </div>

        <button className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-xl hover:border-indigo-500/30 transition-all">
          <FiBell />
        </button>

        <div className="w-14 h-14 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500" />
      </div>
    </div>
  )
}

export default Topbar