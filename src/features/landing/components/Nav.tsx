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
      const sections = ["#home", "#howItworks", "#rankings", "#community", "#benefits", "#expansion", "#preregist"];
      let current = "#home";
      sections.forEach((id) => {
        const el = document.querySelector(id);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top <= 80) current = id; // 80px para compensar altura del nav
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Como funciona", href: "#howItworks" },
    { label: "Rankings", href: "#rankings" },
    { label: "Comunidad", href: "#community" },
    { label: "Beneficios", href: "#benefits" },
    { label: "Expansion", href: "#expansion" },
    { label: "Pre-regístrate", href: "#preregist" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16" role="navigation">
          {/* Logo */}
          <a href="#home" className="flex items-center text-black no-underline" aria-label="Rango - ir al inicio">
            <img src={Logo} alt="Rango Logo" className="w-12 sm:w-20 h-auto" />
            <span className={`font-bold text-xl sm:text-2xl transition-colors duration-300 ${scrolled ? "text-black" : "text-white"}`}>Rango</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:gap-6 lg:gap-8">
            <ul className="flex items-center gap-3 lg:gap-6">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className={`text-sm sm:text-md py-2 px-3 lg:px-6 font-semibold rounded-4xl transition-colors duration-300 ${
                      activeSection === l.href
                        ? "bg-black text-white"
                        : scrolled
                        ? "text-gray-800 hover:bg-blue-500 hover:text-white"
                        : "text-white hover:bg-blue-500"
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setOpen((v) => !v)}
              className="p-2 rounded-md focus:outline-none"
              
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black bg-opacity-95 backdrop-blur-md shadow-lg w-full absolute top-16 left-0 transition-all duration-300">
          <ul className="flex flex-col gap-2 py-4 px-6">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`block w-full text-lg py-2 px-4 rounded-lg transition-colors ${
                    activeSection === l.href ? "bg-blue-500 text-white" : "text-white hover:bg-blue-500"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
