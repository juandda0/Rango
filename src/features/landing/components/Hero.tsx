import heroBg from "../../../assets/images/hero-bg.jpg";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden py-16 md:py-20"
    >
      {/* Fondo */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Powerlifter"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent"></div>
      </div>

      {/* Contenido */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center text-center md:text-start space-y-6">
          {/* Texto */}
          <div className="max-w-3xl space-y-4">
            <p className="text-white text-lg sm:text-xl font-semibold tracking-wide">
              Montería • Colombia
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Compite. Comparte.
              <br />
              Conviértete en el más fuerte.
            </h1>

            <p className="text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed">
              La app que permite a los levantadores de Montería competir
              continuamente en rankings.
            </p>
          </div>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <button
              className="bg-blue-400 text-white font-semibold rounded-xl px-6 py-3 transform transition-transform duration-300 ease-out hover:-translate-y-1"
              onClick={() => scrollToSection("#preregist")}
            >
              Pre-regístrate ahora
            </button>

            <button
              className="bg-white text-black font-semibold rounded-xl px-6 py-3 transform transition-transform duration-300 ease-out hover:-translate-y-1"
              onClick={() => scrollToSection("#howItworks")}
            >
              Explorar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
