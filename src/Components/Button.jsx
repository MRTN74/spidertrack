function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        mt-6
        bg-blue-500
        px-4
        py-2
        rounded-lg
        transition
        duration-150
        hover:bg-blue-600
        hover:scale-105
        active:scale-95
        active:bg-blue-700
        shadow-lg
      "
    >
      {children}
    </button>
  )
}

export default Button