function MisionCard({ title, xp }) {
  return (
    <div className="bg-[#111827] p-6 rounded-2xl border border-gray-700">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-2xl font-bold">
            {title}
          </h3>
        </div>

        <span className="text-blue-400 font-bold">
          +{xp} XP
        </span>
      </div>

      <button className="mt-6 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl">
        Complete Mision
      </button>
    </div>
  )
}

export default MisionCard