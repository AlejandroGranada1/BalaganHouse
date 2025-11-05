import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 text-gray-800">
      {/* Título */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#a020f0] uppercase tracking-wide mb-4">
          Contáctanos
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          ¿Quieres planear tu próximo evento? Escríbenos o visítanos en nuestra
          oficina en Medellín.
        </p>
      </div>

      {/* Formulario + Mapa */}
      <div className="flex flex-col lg:flex-row gap-10 items-center justify-center">
        {/* Formulario */}
        <form className="flex-1 w-full max-w-md bg-white shadow-lg rounded-2xl p-6 md:p-8 flex flex-col gap-4">
          <input
            type="text"
            placeholder="Tu nombre"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a020f0] transition-all"
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a020f0] transition-all"
          />
          <textarea
            placeholder="Mensaje"
            rows="4"
            className="p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-[#a020f0] transition-all"
          ></textarea>
          <button
            type="submit"
            className="bg-[#a020f0] text-white font-semibold py-3 px-6 rounded-md hover:bg-[#c873ff] transition-all duration-300"
          >
            Enviar
          </button>
        </form>

        {/* Mapa */}
        <div className="flex-1 w-full h-[350px] rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.4640243345044!2d-75.60435496968007!3d6.282640670804831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e44294f2eb6a5c7%3A0x54a717140e3166e0!2sCl.%2064g%20%23%2094B-13%2C%20El%20Cucaracho%2C%20Medell%C3%ADn%2C%20Robledo%2C%20Medell%C3%ADn%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1762297921846!5m2!1ses!2sco"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Balagan House"
            className="w-full h-full border-0"
          ></iframe>
        </div>
      </div>

      {/* Información de contacto */}
      <div className="mt-16 text-center space-y-4 text-gray-700 text-base md:text-lg">
        <div className="flex items-center justify-center gap-2">
          <MapPin className="text-[#a020f0] w-5 h-5" />
          <span>Calle 64GG #94B-13, Robledo La Campiña - Medellín, Colombia</span>
        </div>

        <div className="flex items-center justify-center gap-2">
          <Mail className="text-[#a020f0] w-5 h-5" />
          <a
            href="mailto:balaganhouse0@gmail.com"
            className="text-[#a020f0] hover:text-[#c873ff] transition-colors"
          >
            balaganhouse0@gmail.com
          </a>
        </div>

        <div className="flex items-center justify-center gap-2">
          <Phone className="text-[#a020f0] w-5 h-5" />
          <a
            href="tel:+573113831212"
            className="text-[#a020f0] hover:text-[#c873ff] transition-colors"
          >
            +57 311 3831212
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
