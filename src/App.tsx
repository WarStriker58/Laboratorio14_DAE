import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-black text-white">
      <h1 className="text-5xl font-bold tracking-tight">
        CineSpoilerS
      </h1>
      
      {/* Botón con estilos explícitos para fondo negro */}
      <Button className="bg-white text-black font-semibold px-6 py-2 rounded-md hover:bg-white/90 transition-all cursor-pointer">
        Entrar a la Web
      </Button>
    </div>
  );
}

export default App;