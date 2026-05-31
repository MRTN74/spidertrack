import { useState } from "react"
import StatCard from "./Components/StatCard"
import Navbar from "./Components/Navbar"
import MisionCard from "./Components/MisionCard"

function App() {
  const [missions] = useState([
    {
      id: 1,
      title: "Learn React",
      xp: 100,
    },
    {
      id: 2,
      title: "Workout",
      xp: 50,
    },
    {
      id: 3,
      title: "Read 10 Pages",
      xp: 25,
    },
  ])

  const stats = [
    {
      title: "Active Misions",
      value: missions.length,
      color: "text-red-400",
    },
    {
      title: "Completed",
      value: 0,
      color: "text-green-400",
    },
    {
      title: "Hero Level",
      value: 1,
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

        <div className="mt-10 space-y-4">
          {missions.map((mission) => (
            <MisionCard
              key={mission.id}
              title={mission.title}
              xp={mission.xp}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

export default App