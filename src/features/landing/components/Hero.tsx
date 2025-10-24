import heroBg from '../../../assets/images/hero-bg.jpg';
export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-end justify-center overflow-hidden py-20">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Powerlifter"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black to-transparent"></div>
        <div className="absolute inset-0 bg-linear-to-b from-black/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-8 text-start space-y-4 ">
        <div className="max-w-4xl space-y-2">
          <div className="inline-block">
            <div className="text-sm font-bold tracking-wider uppercase">
              <p className="text-white text-xl">Montería • Colombia</p>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white text-background leading-tight text-balance">
            Compite. Comparte.
            <br />
            <span className="">Conviertete en el mas fuerte.</span>
          </h1>
          <p className="text-gray-200 font-normal text-2xl">
            La app que permite a los levantadores de Montería competir continuamente en rankings.
          </p>
        </div>
        <div className="flex gap-4">
          <button className="bg-blue-500 text-white font-semibold transform transition-transform duration-300 ease-out rounded-xl px-6 py-2 hover:-translate-y-1">Pre-registrate ahora</button>
          <button className="bg-white text-black font-semibold transform transition-transform duration-300 ease-out rounded-xl px-6 py-2 hover:-translate-y-1">Explorar</button>
        </div>
      </div>
    </section>
  );
}
