import { Instagram, Facebook, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="container mx-auto px-6">
        {/* Grid principal */}
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          
          {/* Logo y descripción */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-black mb-4 text-gray-900">
              RANGO
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              La app que permite a los levantadores competir y compararse continuamente en fuerza. Rankings oficiales y no oficiales de powerlifting.
            </p>

            {/* Redes sociales */}
            <div className="flex gap-4">
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 bg-gray-100 text-gray-700 rounded-lg hover:bg-blue-500 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 bg-gray-100 text-gray-700 rounded-lg hover:bg-blue-500 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 bg-gray-100 text-gray-700 rounded-lg hover:bg-blue-500 hover:text-white transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Ejercicios */}
          <div>
            <h4 className="font-bold mb-4 text-gray-900">Ejercicios</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors">Peso Muerto</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors">Sentadilla</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors">Press Plano</a>
              </li>
            </ul>
          </div>

          {/* Información */}
          <div>
            <h4 className="font-bold mb-4 text-gray-900">Información</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors">Cómo funciona</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors">Rankings</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors">Contacto</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors">Términos y condiciones</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright + Firma de desarrollador */}
        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-sm text-gray-500 space-y-2">
          <p>© 2025 Rango. Todos los derechos reservados. Hecho con 💪 en Montería, Colombia.</p>
          <p>Desarrollado por <span className="font-semibold text-gray-700">MexioCode</span></p>
        </div>
      </div>
    </footer>
  )
}
