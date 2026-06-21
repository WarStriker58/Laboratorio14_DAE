import { Link, Outlet } from "react-router-dom"

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Navbar Simple */}
      <header className="border-b border-zinc-800 bg-zinc-950/50 backdrop-blur px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold tracking-wider text-red-500">CineSpoilerS</Link>
        <nav className="space-x-4 text-sm text-zinc-400">
          <Link to="/" className="hover:text-white transition">Inicio</Link>
          <Link to="/movies" className="hover:text-white transition">Cartelera</Link>
        </nav>
      </header>

      {/* Contenido Dinámico de las páginas */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-6">
        <Outlet />
      </main>
    </div>
  )
}