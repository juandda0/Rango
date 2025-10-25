export default function WhatItIs() {
  // Datos simulados para el ranking
  const simulatedRanking = [
    { rank: 1, name: "Santiago Ramos", city: "Monteria", weight: "230 kg" },
    { rank: 2, name: "Juan Diaz", city: "Monteria", weight: "200 kg" },
    { rank: 3, name: "Ana Gil", city: "Monteria", weight: "120 kg" },
  ];

  return (
    <section
      id="whatItIs"
      // Ajuste de padding: `py-20` en móvil, `py-32` en escritorio.
      className="py-20 md:py-32 bg-linear-to-t from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/*
          Estructura de 2 columnas: 
          - En móvil: Columna 1 sobre Columna 2 (grid-cols-1)
          - En escritorio: Texto a la izquierda, Mockup a la derecha (lg:grid-cols-2)
        */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Columna 1: Texto y Puntos Clave */}
          {/* En móvil: order-1. En escritorio: order-1 (Por defecto) */}
          <div className="space-y-10 lg:order-1">
            <div className="text-start text-gray-800">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
                ¿Qué es <span className="text-blue-400">Rango</span>?
              </h2>
              <p className="text-xl leading-relaxed text-gray-600">
                Rango es una plataforma para todas las personas aficionadas en
                el gimnasio y en el mundo del powerlifting; tomamos tus máximos
                en los ejercicios básicos (peso muerto, sentadilla libre, press
                de banca) y te damos la oportunidad de competir sanamente con
                otras personas igual de apasionadas por el deporte como
                nosotros. Su meta es darle visibilidad y reconocimiento a
                quienes entrenan con disciplina, sin necesidad de esperar a una
                competencia oficial.
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center lg:order-2">
            <div
              className="w-full max-w-md relative bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-2xl transition-all hover:scale-[1.02] duration-300" // Aumentado max-w-md
            >
              <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                Ranking
              </span>

              <h3 className="text-xl font-extrabold text-center mb-6 text-gray-700">
                TOP 3 en <span className="text-blue-400">Peso Muerto</span>
              </h3>

              {/* Posiciones del Ranking con datos simulados */}
              <div className="space-y-3">
                {simulatedRanking.map((item) => (
                  <div
                    key={item.rank}
                    className={`flex items-center gap-4 p-3 rounded-xl transition-all ${
                      item.rank === 1
                        ? "bg-amber-50/70 border border-amber-300 shadow-md"
                        : "bg-gray-50/40 hover:bg-gray-100"
                    }`}
                  >
                    {/* Número con decoración para el puesto #1 */}
                    <div
                      className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold shrink-0
                      ${
                        item.rank === 1
                          ? "bg-amber-400 text-white shadow-lg"
                          : "bg-gray-300 text-gray-600"
                      }`}
                    >
                      {item.rank}
                    </div>

                    {/* Datos simulados */}
                    <div className="flex-1 min-w-0">
                      {/* Nombre: Asegurando que no se desborde con `truncate` */}
                      <p className="text-base font-semibold text-gray-800 truncate">
                        {item.name}
                      </p>
                      {/* Ciudad/Gym */}
                      <p className="text-xs text-gray-500 truncate">
                        {item.city}
                      </p>
                    </div>

                    {/* Peso: Ajustado para que se vea bien en móvil y escritorio */}
                    <div className="text-lg font-extrabold text-blue-600 shrink-0">
                      {item.weight}
                    </div>
                  </div>
                ))}
              </div>

              {/* Botón Call-to-Action debajo del ranking para simular la vista del app */}
              <div className="mt-6 text-center">
                <button className="w-full py-3 text-base font-semibold rounded-lg bg-blue-400 text-white hover:bg-blue-600 transition-colors shadow-md hover:shadow-lg">
                  Ver Ranking Completo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
