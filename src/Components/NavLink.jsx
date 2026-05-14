export default NavLink
function NavLink(props) {
    return(
        <a href="" className="text-white/80 hover:text-red-600 transition-colors">{props.title}</a>
    )
}