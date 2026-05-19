import {
  FiHome,
  FiFileText,
  FiActivity,
  FiSettings,
} from "react-icons/fi"

const menuItems = [
  {
    title: "Dashboard",
    icon: <FiHome />,
  },
  {
    title: "Research Workspace",
    icon: <FiFileText />,
  },
  {
    title: "Agent Activity",
    icon: <FiActivity />,
  },
  {
    title: "Settings",
    icon: <FiSettings />,
  },
]

function Sidebar() {
  return (
    <div className="w-72 min-h-screen bg-white/5 backdrop-blur-xl border-r border-white/10 p-6">
      <h1 className="text-2xl font-bold mb-10">
        CortexOne
      </h1>

      <div className="space-y-3">
        {menuItems.map((item) => (
          <div
            key={item.title}
            className="flex items-center gap-3 p-4 rounded-xl hover:bg-indigo-500/20 transition-all duration-300 cursor-pointer"
          >
            <span className="text-xl">
              {item.icon}
            </span>

            <span className="text-sm font-medium">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar