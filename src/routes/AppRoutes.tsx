import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainLayout from "@/components/MainLayout"
import Home from "@/pages/Home"
import Movies from "@/pages/Movies"

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* El Layout abraza a las páginas internas */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
        </Route>
        <Route path="*" element={<div className="text-white p-8">404 - No encontrado</div>} />
      </Routes>
    </BrowserRouter>
  )
}
