import { Globe, MapPin, Rocket } from "lucide-react"

export default function Expansion() {
  // ===== Datos de las fases =====
  const phases = [
    {
      icon: MapPin,
      title: "Fase 1",
      location: "Montería",
      date: "Actualmente",
    },
    {
      icon: Globe,
      title: "Fase 2",
      location: "Nacional",
      date: "2026",
    },
    {
      icon: Rocket,
      title: "Fase 3",
      location: "Mundial",
      date: "2027",
    },
  ]

  return (
    <section className="py-24 bg-white text-gray-800 relative overflow-hidden" id="expansion">
      <div className="container mx-auto px-6 relative z-10">

        {/* ===== Encabezado ===== */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            De Montería <span className="text-blue-400">al mundo</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Comenzamos en Montería, pero nuestra visión es global. Pronto habrá rankings nacionales e internacionales
            para que compitas con los mejores del mundo.
          </p>
        </div>

        {/* ===== Tarjetas de fases con línea ===== */}
        <div className="relative max-w-5xl mx-auto">
          {/* Línea horizontal */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2"></div>

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {phases.map((phase, idx) => (
              <div
                key={idx}
                className="group bg-gray-50 border border-gray-200 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col items-center text-center"
              >


                {/* Icono */}
                <div className="flex items-center justify-center w-14 h-14 rounded-xl mb-6 text-black transition-all duration-300">
                  <phase.icon className="w-8 h-8" />
                </div>

                {/* Título */}
                <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                  {phase.title}
                </h3>

                {/* Ubicación */}
                <p className="font-semibold text-gray-700">{phase.location}</p>

                {/* Fecha */}
                <p className="text-sm text-gray-500 mt-2">{phase.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Etiqueta Próximamente */}
        <div className="text-center max-w-4xl mx-auto mt-12">
          <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm font-semibold">
            Próximamente
          </div>
        </div>
      </div>
    </section>
  )
}
