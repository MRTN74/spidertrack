function MisionCard() {
  return (
    <div className="bg-[#111827] p-6 rounded-2xl mt-10 border border-gray-700">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-2xl font-bold">
            Complete React Practice
          </h3>

          <p className="text-gray-400 mt-1">
            Main Quest
          </p>
        </div>

        <span className="text-blue-400 font-bold">
          +100 XP
        </span>
      </div>

      <button className="mt-6 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl">
        Complete Mission
      </button>
    </div>
  )
}

export default MisionCard
