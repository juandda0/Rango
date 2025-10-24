export default function Rankings() {
const exercises = ["Peso Muerto", "Sentadilla", "Press Plano"]

  return (
    <section className="relative min-h-screen py-8 flex flex-col justify-center bg-secondary overflow-hidden" id="rankings">
      <div className="container mx-auto px-6">
        {/* Título */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-black mb-3">
            Rankings de <span className="text-blue-500">Rango</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Muy pronto podrás ver quién domina en los tres básicos del powerlifting.
          </p>
        </div>

        {/* Ranking compacto */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {exercises.map((exercise, idx) => (
            <div
              key={idx}
              className="relative bg-background border-2 border-dashed border-gray-300 rounded-2xl p-6 animate-pulse flex flex-col"
            >
              {/* Nombre del ejercicio */}
              <h3 className="text-xl font-bold text-center mb-6 text-gray-500">{exercise}</h3>

              {/* Skeletons (3 posiciones) */}
              <div className="space-y-4 flex-1">
                {[1, 2, 3].map((rank) => (
                  <div
                    key={rank}
                    className={`flex items-center gap-3 p-3 rounded-xl ${
                      rank === 1 ? "bg-gray-200/60" : "bg-gray-100/40"
                    }`}
                  >
                    {/* Número */}
                    <div className="flex items-center justify-center w-8 h-8 bg-gray-300 rounded-full text-sm font-bold text-gray-500">
                      {rank}
                    </div>

                    {/* Datos simulados */}
                    <div className="flex-1 space-y-2">
                      <div className="h-4 w-3/4 bg-gray-300 rounded"></div>
                      <div className="h-3 w-1/2 bg-gray-200 rounded"></div>
                    </div>

                    {/* Peso */}
                    <div className="h-5 w-10 bg-gray-300 rounded"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA centrado */}
        <div className="flex flex-col items-center justify-center text-center gap-4">
          
          <h3 className="text-xl font-bold text-foreground">
            ¡Tu nombre puede estar aquí muy pronto!
          </h3>
          <button className="bg-black text-white font-semibold px-6 py-2 rounded-xl hover:bg-blue-600 transition-all hover:-translate-y-0.5">
            Pre-regístrate ahora
          </button>
        </div>
      </div>
    </section>
  );
}
