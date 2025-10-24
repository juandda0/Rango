import { Upload, CheckCircle, Trophy } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: Upload,
      title: "Sube tu video",
      description:
        "Graba tu levantamiento y súbelo a la app. Asegúrate de que se vea claramente tu técnica.",
    },
    {
      icon: CheckCircle,
      title: "Validación",
      description:
        "Nuestro equipo revisa tu video para validar que cumple con los estándares.",
    },
    {
      icon: Trophy,
      title: "Aparece en el ranking",
      description:
        "Tu marca se publica en el ranking oficial o no oficial según la validación.",
    },
  ];

  return (
    <section className="py-24 bg-linear-to-t from-gray-50 to-white relative">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Título */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            ¿Cómo funciona <span className="text-blue-500">Rango</span>?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Tres pasos simples para demostrar tu fuerza y competir con los mejores levantadores.
          </p>
        </div>

        {/* Cartas */}
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group bg-white border border-gray-200 rounded-2xl p-10 h-full shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Icono circular */}
              <div className="flex items-center justify-center w-15 h-15 bg-gray-100 text-black rounded-2xl mb-6 transition-all duration-500">
                <step.icon className="w-8 h-8" />
              </div>

              {/* Número del paso */}
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-extrabold text-lg shadow-md">
                {index + 1}
              </div>

              {/* Contenido */}
              <h3 className="text-2xl group-hover:text-blue-500 font-bold transition-colors mb-3 text-gray-900">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
