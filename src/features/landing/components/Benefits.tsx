import { Sparkles, BarChart3, Award } from "lucide-react"

export default function BenefitsRedesigned() {
  const benefits = [
    {
      icon: Sparkles,
      title: "Compite sin esperar",
      description: "¡No necesitas esperar a una competición oficial. Compite cuando quieras, donde quieras y sin costes adicionales.",
    },
    {
      icon: Award,
      title: "Reconocimiento real",
      description: "Gana reconocimiento dentro de la comunidad de levantadores de Monteía y más allá.",
    },
    {
      icon: BarChart3,
      title: "Estadísticas Claras",
      description: "Conoce tus números, compara tu progreso y descubre en qué posición estás.",
    },
  ]
  return (
    <section className="py-24 bg-gray-50 text-gray-900 relative overflow-hidden" id="benefits">
      <div className="container mx-auto px-6 relative z-10">

        <div className="flex flex-col md:flex-row md:items-end justify-between max-w-5xl mx-auto mb-8">
          <div className="mb-8 md:mb-0">
            <h2 className="text-5xl md:text-5xl font-extrabold leading-none mb-4">
              ¿Por qué usar <span className="text-blue-500">Rango?</span>
            </h2>
            <h3 className="text-xl">Mas que una app de rankings, es tu compañero de entrenamiento y motivacion</h3>
          </div>
        </div>

        {/* Bloques de Beneficios Rediseñados */}
        <div className="space-y-6 max-w-5xl mx-auto">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="group flex flex-col md:flex-row items-center p-8 rounded-2xl 
                bg-white shadow-md border border-gray-100 
                hover:shadow-xl transition-all duration-300 
                hover:bg-blue-500 hover:border-blue-500 hover:text-white"
            >
              <div className="w-full md:w-1/2 mb-4 md:mb-0 md:pr-8">
                <h3 className="text-4xl md:text-4xl font-extrabold leading-tight">
                  {benefit.title.split(' ')[0]} 
                  <span className={`text-3xl md:text-4xl font-normal`}>
                    {' '}{benefit.title.split(' ').slice(1).join(' ')}
                  </span>
                </h3>
              </div>
              <div className="w-full md:w-1/2">
                <p className="text-base md:text-lg leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}