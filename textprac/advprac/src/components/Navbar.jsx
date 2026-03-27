import { NavLink } from "react-router-dom"
import { useFavorites } from "../context/FavoritesContext"
import { useTheme } from "../context/ThemeContext"

function Navbar() {
  const { favCount } = useFavorites()
  const { darkMode, toggleTheme } = useTheme()

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-brand">
        <span className="brand-icon">🎬</span> MovieHub
      </NavLink>
      <div className="navbar-right">
        <div className="navbar-links">
          <NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Home
          </NavLink>
          <NavLink to="/favorites" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Favorites
            {favCount > 0 && <span className="badge">{favCount}</span>}
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            About
          </NavLink>
        </div>
        <button className="theme-toggle" onClick={toggleTheme} title={darkMode ? "Light mode" : "Dark mode"}>
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
