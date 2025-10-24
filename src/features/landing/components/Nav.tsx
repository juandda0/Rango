import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../../../assets/svg/logo.svg";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
        scrolled
          ? "bg-white backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="px-8 sm:px-6 lg:px-8">
        <nav
          className="flex items-center justify-between h-16"
          role="navigation"
          aria-label="Main navigation"
        >
          <a
            href="#home"
            className="flex items-center gap-3 text-black no-underline"
            aria-label="Rango - ir al inicio"
          >
            <div className="hidden sm:flex items-center">
              <img src={Logo} alt="" className="w-20 h-auto" />
              <span
                className={`font-bold text-2xl transition-colors duration-300 ${
                  scrolled ? "text-black" : "text-white"
                }`}
              >
                Rango
              </span>
            </div>
          </a>

          <div className="hidden md:flex md:items-center md:gap-8">
            <ul className="flex items-center gap-6">
              {[
                { label: "Inicio", href: "#home" },
                { label: "Como funciona", href: "#rankings" },
                { label: "Rankings", href: "#how" },
                { label: "Comunidad", href: "#community" },
                { label: "¿Porque?", href: "#coming" },
                { label: "Proximamente", href: "#soon" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className={`text-md py-2 px-6 font-semibold rounded-xl transition-colors duration-300 ${
                      scrolled
                        ? "text-gray-800 hover:bg-blue-500 hover:text-white"
                        : "text-white hover:bg-blue-500"
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#pre-registro"
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold shadow-sm transition-colors duration-300 ${
                scrolled
                  ? "bg-blue-500 text-white hover:bg-blue-700"
                  : "bg-blue-500 text-white hover:bg-blue-700 hover:text-white"
              }`}
            >
              Pre-regístrate
            </a>
          </div>

          <div className="flex items-center md:hidden">
            <button
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setOpen((v) => !v)}
              className="p-2 rounded-md focus:outline-none"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
