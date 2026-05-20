function MissionCard({ title, completed }) {
    return (<div className="bg-zinc-900 border border-red-500/20 rounded-xl p-4 flex justify-between items-center">

        <div>
            <h3 className="text-white font-semibold">
                {title}
            </h3>

            <p className="text-sm text-zinc-400">
                {completed ? "Completed" : "In Progress"}
            </p>
        </div>

        <button
            className="bg-red-500 hover:bg-red-600 transition px-4 py-2 rounded-lg text-white font-medium"
        >
            Complete
        </button>
    </div>


    );
}

export default MissionCard;
