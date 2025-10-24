import { ArrowRight, Infinity } from "lucide-react";

export default function PreRegister() {
  return (
    <section className="py-12 md:py-20 bg-black relative overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-gray-800/10 via-transparent to-transparent"></div>
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Encabezado */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight text-white tracking-tight">
            ¿Listo para demostrar tu fuerza?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Pre-regístrate ahora y sé parte del ranking desde el primer día. Es
            gratis y solo toma 30 segundos.
          </p>
        </div>

        {/* Formulario */}
        <div className="flex flex-col items-center justify-center sm:flex-row gap-4 max-w-2xl mx-auto mb-8">
          <input
            type="email"
            placeholder="tu@email.com"
            className="flex h-16 sm:h-16 px-5 sm:px-6 text-base sm:text-lg bg-white/5 backdrop-blur-sm text-white placeholder:text-gray-400 border-2 border-white/30 rounded-2xl focus:border-blue-500 focus:bg-white/10 focus:outline-none transition-all"
          />
          <button className="group flex items-center justify-center gap-2 h-16 sm:h-16 px-6 sm:px-10 bg-blue-500 text-white font-bold rounded-2xl transition-all hover:scale-105 active:scale-95">
            Pre-registrarme
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Nota legal */}
        <p className="text-xs sm:text-sm text-gray-500 text-center mb-10 sm:mb-12 px-2">
          Al registrarte, aceptas recibir actualizaciones sobre Rango. Sin spam,
          lo prometemos.
        </p>

        {/* Estadísticas */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto text-center">
          <div className="group cursor-pointer">
            <div className="text-3xl sm:text-4xl md:text-5xl font-black bg-white bg-clip-text text-transparent mb-2 sm:mb-3 transition-transform group-hover:scale-110">
              100%
            </div>
            <div className="text-xs sm:text-sm text-gray-400 font-medium">
              Gratis
            </div>
          </div>
          <div className="group cursor-pointer">
            <div className="text-3xl sm:text-4xl md:text-5xl font-black bg-white bg-clip-text text-transparent mb-2 sm:mb-3 transition-transform group-hover:scale-110">
              24/7
            </div>
            <div className="text-xs sm:text-sm text-gray-400 font-medium">
              Disponible
            </div>
          </div>
          <div className="group cursor-pointer">
            <div className="mb-2 sm:mb-3 transition-transform group-hover:scale-110">
              <Infinity className="w-8 sm:w-10 h-8 sm:h-10 mx-auto text-white" />
            </div>
            <div className="text-xs sm:text-sm text-gray-400 font-medium">
              Competencias
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
