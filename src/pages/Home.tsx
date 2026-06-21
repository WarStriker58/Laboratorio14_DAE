import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom" // 👈 Importamos Link

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center space-y-4">
      <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
        Bienvenido a <span className="text-red-500">CineSpoilerS</span>
      </h1>
      <p className="max-w-[600px] text-gray-400">
        Tu e-commerce de tickets de cine favorito. Explora cartelera, detalles y compra tus entradas en segundos.
      </p>
      
      {/* 👈 Envolvemos el botón en un componente Link para cambiar de página sin recargar */}
      <Link to="/movies">
        <Button variant="default">Ver Cartelera</Button>
      </Link>
    </div>
  )
}
