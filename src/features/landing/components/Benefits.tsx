export default function BenefitsRedesigned() {
  const benefits = [
    {
      title: "Más que una app de rankings",
      description:
        "Más que una app de rankings, es tu compañero a la hora de entrenar, con la capacidad para guardar tus rutinas y obtener estadísticas sobre tu progreso al instante.",
    },
    {
      title: "Compite sin esperar",
      description:
        "¡No necesitas esperar a una competición oficial. Compite con tus compañeros en un nuevo entorno sin necesidad de estar en un mismo lugar!",
    },
    {
      title: "Reconocimiento real",
      description:
        "Gana reconocimiento dentro de la comunidad de levantadores de Montería y más allá.",
    },
    {
      title: "Estadísticas Claras",
      description:
        "Conoce tus números, compara tu progreso y descubre en qué posición estás.",
    },
  ];

  return (
    <section
      className="py-16 md:py-24 bg-gray-50 text-gray-900 relative overflow-hidden"
      id="benefits"
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between max-w-5xl mx-auto mb-6">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-3">
              Beneficios de <span className="text-blue-400">Rango</span>
            </h2>
            <h3 className="text-base sm:text-lg md:text-xl text-gray-700">
              Más que una app de rankings, es tu compañero de entrenamiento y
              motivación
            </h3>
          </div>
        </div>

        {/* Bloques de Beneficios Rediseñados */}
        <div className="flex flex-col space-y-6 md:space-y-6 max-w-5xl mx-auto">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="group flex flex-col md:flex-row items-start md:items-center p-6 sm:p-8 rounded-2xl 
                bg-white shadow-md border border-gray-100 
                hover:shadow-xl transition-all duration-300 
                hover:bg-blue-400 hover:border-blue-400 hover:text-white"
            >
              <div className="w-full md:w-1/2 mb-4 md:mb-0 md:pr-6">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-snug">
                  {benefit.title.split(" ")[0]}
                  <span className="text-xl sm:text-2xl md:text-4xl font-normal">
                    {" "}
                    {benefit.title.split(" ").slice(1).join(" ")}
                  </span>
                </h3>
              </div>
              <div className="w-full md:w-1/2">
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
