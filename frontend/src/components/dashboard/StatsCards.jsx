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
            className="bg-pink-50/80 border border-pink-200 rounded-2xl p-6 backdrop-blur-xl hover:bg-pink-100/80 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-pink-100/40"        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-300 text-sm">
                {item.title}
              </p>

              <h2 className="text-3xl font-bold mt-3 text-[#4b2e5e]">
                {item.value}
              </h2>
            </div>

            <div className="text-3xl text-pink-400">
              {item.icon}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default StatsCards