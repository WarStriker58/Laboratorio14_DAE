import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from "react-router-dom"

// Datos simulados rápidos para cumplir con la grilla
const MOVIES_MOCK = [
  { id: 1, title: "Bleach: Thousand-Year Blood War - The Calamity", category: "Anime", rating: "★★★★★", image: "https://cdn.apis.cineplanet.com.pe/CDN/media/entity/get/FilmPosterGraphic/HO00002952?referenceScheme=HeadOffice&allowPlaceHolder=true" },
  { id: 2, title: "Supergirl", category: "Acción", rating: "★★★★☆", image: "https://cdn.apis.cineplanet.com.pe/CDN/media/entity/get/FilmPosterGraphic/HO00002759?referenceScheme=HeadOffice&allowPlaceHolder=true" },
  { id: 3, title: "Spider man Un nuevo dia", category: "Acción", rating: "★★★★★", image: "https://cdn.apis.cineplanet.com.pe/CDN/media/entity/get/FilmPosterGraphic/HO00002949?referenceScheme=HeadOffice&allowPlaceHolder=true" },
]

export default function Home() {
  return (
    <div className="space-y-12">
      {/* SECCIÓN HERO */}
      <section className="relative rounded-2xl bg-zinc-900 border border-zinc-800 p-8 md:p-16 text-center space-y-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-transparent pointer-events-none" />
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
          Bienvenido a <span className="text-red-500">CineSpoilerS</span>
        </h1>
        <p className="max-w-2xl mx-auto text-zinc-400 text-lg">
          La base de datos y e-commerce de tickets más rápida del mercado. Explora los estrenos de la semana de forma inmediata.
        </p>
        <Link to="/movies">
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-medium px-8">
            Explorar Toda la Cartelera
          </Button>
        </Link>
      </section>

      {/* SECCIÓN GRILLA DE PELÍCULAS */}
      <section className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight">Películas Destacadas</h2>
          <Link to="/movies" className="text-sm text-red-500 hover:underline">Ver todas</Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {MOVIES_MOCK.map((movie) => (
            <Card key={movie.id} className="bg-zinc-950 border-zinc-800 text-white overflow-hidden hover:border-zinc-700 transition">
              <div className="h-48 bg-zinc-900 flex items-center justify-center text-zinc-600 overflow-hidden">
                <img src={movie.image} alt={movie.title} className="w-full h-full object-cover opacity-70" />
              </div>
              <CardHeader className="p-4">
                <span className="text-xs text-red-400 font-semibold uppercase tracking-wider">{movie.category}</span>
                <CardTitle className="text-lg mt-1 truncate">{movie.title}</CardTitle>
              </CardHeader>
              <CardContent className="px-4 pb-2 pt-0">
                <p className="text-yellow-500 text-sm">{movie.rating}</p>
              </CardContent>
              <CardFooter className="p-4 border-t border-zinc-900">
                <Button variant="outline" className="w-full border-zinc-700 text-zinc-300 hover:bg-zinc-900 hover:text-white">
                  Comprar Ticket
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}