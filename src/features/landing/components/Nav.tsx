import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../../../assets/svg/logo.svg";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detectar sección activa
      const sections = [
        "#home",
        "#howItworks",
        "#rankings",
        "#community",
        "#benefits",
        "#expansion",
        "#preregist",
      ];
      let current = "#home";
      sections.forEach((id) => {
        const el = document.querySelector(id);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top <= 80) current = id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Cómo funciona", href: "#howItworks" },
    { label: "Rankings", href: "#rankings" },
    { label: "Comunidad", href: "#community" },
    { label: "Beneficios", href: "#benefits" },
    { label: "Expansión", href: "#expansion" },
    { label: "Pre-regístrate", href: "#preregist" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent backdrop-blur-xs"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 text-black no-underline"
            aria-label="Rango - ir al inicio"
          >
            <img src={Logo} alt="Rango Logo" className="w-10 h-auto" />
            <span
              className={`font-extrabold text-xl sm:text-2xl tracking-tight transition-colors duration-300 ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              Rango
            </span>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-4 lg:gap-6">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`text-sm lg:text-base px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                    activeSection === l.href
                      ? "bg-black text-white"
                      : scrolled
                      ? "text-gray-800 hover:text-white hover:bg-black"
                      : "text-white hover:bg-black"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className={`md:hidden p-2 rounded-full transition-colors duration-300 ${
              scrolled ? "bg-black text-white" : "bg-black/80 text-white"
            }`}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-black/95 backdrop-blur-lg text-white transition-all duration-500 overflow-hidden ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 py-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block text-lg px-4 py-2 rounded-md transition-colors ${
                  activeSection === l.href
                    ? "bg-black text-white"
                    : "hover:bg-black hover:text-white"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
