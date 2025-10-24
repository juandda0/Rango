
export default function WhatItIs() {

  // Datos simulados para el ranking
  const simulatedRanking = [
    { rank: 1, name: 'Santiago Ramos', city: 'Monteria', weight: '230 kg' },
    { rank: 2, name: 'Juan Diaz', city: 'Monteria', weight: '200 kg' },
    { rank: 3, name: 'Ana Gil', city: 'Monteria', weight: '120 kg' },
  ];

  return (
    <section
      id="howItworks"
      className="py-40 bg-linear-to-t from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          <div className="space-y-10 lg:order-1"> 
            <div className="text-start mx-auto items-center text-gray-800">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
                ¿Qué es <span className="text-blue-500">Rango</span>?
              </h2>
              <p className="text-xl leading-relaxed text-gray-600 max-w-xl mx-auto">
                Rango es una aplicación que crea un ranking real de los mejores
                levantadores de fuerza — empezando con peso muerto, sentadilla y
                press plano. Su meta es darle visibilidad y reconocimiento a quienes
                entrenan con disciplina, sin necesidad de esperar a una competencia
                oficial.
              </p>
            </div>
          </div>

          <div className="mt-10 lg:mt-0 flex justify-center items-center lg:order-2">
            <div
              className="w-full max-w-sm relative bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-2xl"
            >
              <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                Ranking
              </span>

              {/* Nombre del ejercicio */}
              <h3 className="text-2xl font-black text-center mb-6 text-gray-700">
                Peso Muerto
              </h3>

              {/* Posiciones del Ranking con datos simulados */}
              <div className="space-y-4">
                {simulatedRanking.map((item) => (
                  <div
                    key={item.rank}
                    className={`flex items-center gap-4 p-3 rounded-xl transition-all ${
                      item.rank === 1 ? "bg-amber-50/70 border border-amber-300 shadow-md" : "bg-gray-50/40"
                    }`}
                  >
                    {/* Número con decoración para el puesto #1 */}
                    <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold shrink-0
                      ${item.rank === 1 ? "bg-amber-400 text-white shadow-lg" : "bg-gray-300 text-gray-600"}`}
                    >
                      {item.rank}
                    </div>

                    {/* Datos simulados */}
                    <div className="flex-1 min-w-0">
                      {/* Nombre */}
                      <p className="text-base font-semibold text-gray-800 truncate">
                        {item.name}
                      </p>
                      {/* Ciudad/Gym */}
                      <p className="text-xs text-gray-500 truncate">
                        {item.city}
                      </p>
                    </div>

                    {/* Peso */}
                    <div className="text-lg font-extrabold text-blue-600 shrink-0">
                      {item.weight}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
