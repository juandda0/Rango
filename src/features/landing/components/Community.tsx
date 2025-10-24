import { Users, Target, TrendingUp, Zap } from "lucide-react"
import community from "../../../assets/images/community-img.jpg"

export default function Community() {
  const features = [
    {
      icon: Users,
      title: "Para todos",
      description: "Desde atletas serios hasta aficionados del gym. Todos tienen su lugar en Rango.",
    },
    {
      icon: Target,
      title: "Competencia sana",
      description: "Compite con respeto y motivación. Mejora tu técnica y supera tus límites.",
    },
    {
      icon: TrendingUp,
      title: "Progreso visible",
      description: "Sigue tu evolución y compara tus marcas con otros levantadores de tu categoría.",
    },
    {
      icon: Zap,
      title: "Motivación constante",
      description: "La comunidad te impulsa a entrenar más duro y alcanzar nuevas metas.",
    },
  ]

  return (
    <section className="py-24 bg-gray-950 text-white" id="community">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Una comunidad <span className="text-accent">competitiva</span> y motivacional
            </h2>
            <p className="text-xl text-background/80 leading-relaxed mb-8">
              Rango no es solo una app de rankings. Es una comunidad de levantadores que se apoyan, compiten y crecen
              juntos.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 bg-accent text-accent-foreground rounded-lg">
                      <feature.icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-lg">{feature.title}</h3>
                  </div>
                  <p className="text-background/70 text-sm leading-relaxed pl-13">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden border-4 border-white">
              <img src={community} alt="Comunidad Rango" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
