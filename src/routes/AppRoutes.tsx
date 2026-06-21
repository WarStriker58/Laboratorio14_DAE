import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "@/pages/Home"
import Movies from "@/pages/Movies"

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        {/* Ruta comodín por si el usuario escribe cualquier otra cosa */}
        <Route path="*" element={<div className="text-white p-8">404 - Página no encontrada</div>} />
      </Routes>
    </BrowserRouter>
  )
}