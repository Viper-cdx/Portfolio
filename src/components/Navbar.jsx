import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()

  return (
    <nav className="navbar">
      <p className="logo">Jerry ⚡</p>
      <div className="nav-links">
        <Link className={location.pathname === "/" ? "active" : ""} to="/">Home</Link>
        <Link className={location.pathname === "/about" ? "active" : ""} to="/about">About</Link>
        <Link className={location.pathname === "/projects" ? "active" : ""} to="/projects">Projects</Link>
      </div>
    </nav>
  )
}

export default Navbar