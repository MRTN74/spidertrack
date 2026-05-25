import { useState } from "react"
import StatCard from "./Components/StatCard"
import Button from "./Components/Button"
import Navbar from "./Components/Navbar"
import MisionCard from "./Components/MisionCard"

function App() {
  const [missions, setMissions] = useState(12)

  const stats = [
    {
      title: "Active Misions",
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
      <Navbar />

      <main className="p-8">
        <h2 className="text-4xl font-bold mb-4">
          Welcome back, Hero 🕷️
        </h2>

        <p className="text-gray-400">
          Track misions, gain XP and protect the city.
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

        <MisionCard />
      </main>
    </div>
  )
}

export default App