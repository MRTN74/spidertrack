function StatCard({ title, value, color }) {
  return (
    <div className="bg-white/5 p-6 rounded-2xl">
      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <p className={`text-3xl mt-4 ${color}`}>
        {value}
      </p>
    </div>
  )
}

export default StatCard