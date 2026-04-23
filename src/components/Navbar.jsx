import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()

  return (
    <nav className="flex justify-between items-center px-16 py-5 bg-white/5 backdrop-blur-md sticky top-0 z-50 border-b border-white/10">
      <p className="text-orange-500 text-xl font-bold">Jerry ⚡</p>
      <div className="flex gap-8">
        {[
          { path: "/", label: "Home" },
          { path: "/about", label: "About" },
          { path: "/projects", label: "Projects" }
        ].map(({ path, label }) => (
          <Link
            key={path}
            to={path}
            className={`text-sm transition-colors ${
              location.pathname === path
                ? "text-orange-500"
                : "text-white/60 hover:text-white"
            }`}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Navbar