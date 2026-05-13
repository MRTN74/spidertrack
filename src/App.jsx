import { useState } from "react"
import StatCard from "./components/StatCard"
import Button from "./components/Button"

function App() {
  const [missions, setMissions] = useState(12)
  const stats = [
    {
      title: "Active Missions",
      value: missions,
      color: "text-red-400",
    },
    {
      title: "Completed",
      value: 48,
      color: "text-green-400",
    },
    {
      title: "Hero Level",
      value: 7,
      color: "text-blue-400",
    },
  ]
  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <nav className="flex items-center justify-between px-8 py-4 border-b border-white/10">
        <h1 className="text-2xl font-bold text-red-500">
          SpiderTrack
        </h1>

        <button className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition">
          Login
        </button>
      </nav>

      <main className="p-8">
        <h2 className="text-4xl font-bold mb-4">
          Welcome back, Hero 🕷️
        </h2>

        <p className="text-gray-400">
          Track missions, gain XP and protect the city.
        </p>

        <Button onClick={() => setMissions(missions + 1)}>
          Complete Mission
        </Button>

        <div className="grid grid-cols-3 gap-6 mt-10">
          {stats.map((stat) => (
            <StatCard
              key={stat.title}
              title={stat.title}
              value={stat.value}
              color={stat.color}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

export default App