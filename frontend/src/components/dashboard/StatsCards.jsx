import {
  FiActivity,
  FiFileText,
  FiCpu,
  FiBarChart2,
} from "react-icons/fi"

import { motion } from "framer-motion"

const stats = [
  {
    title: "Active Agents",
    value: "04",
    icon: <FiCpu />,
  },
  {
    title: "Reports Generated",
    value: "128",
    icon: <FiFileText />,
  },
  {
    title: "Research Sessions",
    value: "32",
    icon: <FiActivity />,
  },
  {
    title: "AI Confidence",
    value: "94%",
    icon: <FiBarChart2 />,
  },
]

function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
          }}
          className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl hover:border-indigo-500/30 hover:-translate-y-1 transition-all duration-300"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm">
                {item.title}
              </p>

              <h2 className="text-3xl font-bold mt-3">
                {item.value}
              </h2>
            </div>

            <div className="text-3xl text-indigo-400">
              {item.icon}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default StatsCards