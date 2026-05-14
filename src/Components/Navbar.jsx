import NavLink from "./NavLink"
export default Navbar
function Navbar() {
    return (
        <nav className="flex justify-between px-6 py-4 bg-black/75 backdrop-blur-md border-b border-white/10">
            <h1 className="text-2xl font-bold text-red-500">
                Spidertrack
            </h1>

            <div className="flex gap-4">
                <NavLink title="Dashboard"/>
                <NavLink title="Missions"/>
                <NavLink title="Progress"/>
            </div>
        </nav>
    )
}

