import React from "react";

export default function Servicios() {
  return (
    <div className="overflow-x-hidden py-10">
      {/* Sección principal */}
      <section className="max-w-[1100px] mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#a020f0] uppercase tracking-wide mb-4">
          Nuestros Servicios
        </h2>
        <p className="text-base md:text-lg max-w-2xl mx-auto">
          Soluciones completas para eventos sociales y corporativos, diseñadas a
          tu medida.
        </p>

        {/* Tarjetas */}
        <div className="flex flex-wrap justify-center gap-8 mt-10">
          {[
            {
              title: "Catering",
              img: "https://i.imgur.com/Tn1MRlo.jpg",
              text: "Banquetes personalizados y menús diseñados con detalle y creatividad.",
            },
            {
              title: "Maquillaje y Vestuario",
              img: "https://imgur.com/GrKXrmF.jpg",
              text: "Un equipo profesional para resaltar tu estilo en cada evento.",
            },
            {
              title: "Fotografía",
              img: "https://i.imgur.com/T2QLZER.jpg",
              text: "Capturamos cada momento especial con calidad y emoción artística.",
            },
            {
              title: "DJ y Música",
              img: "https://i.imgur.com/DfruRSF.jpg",
              text: "Ambientes musicales únicos, adaptados a cada tipo de evento.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-white w-[260px] rounded-xl shadow-md hover:shadow-xl 
                         transition-all duration-300 transform hover:-translate-y-2 p-5 text-center"
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-[180px] object-cover rounded-lg mb-4"
              />
              <h3 className="text-[#a020f0] text-lg font-semibold uppercase mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sección oscura al fondo */}
      <section className="bg-[#0d0d0d] text-white pt-14 pb-20 rounded-t-[25px] mt-20">
        <div className="max-w-[800px] mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide text-[#c873ff] mb-4">
            Eventos que realizamos
          </h2>
          <p className="text-base md:text-lg leading-relaxed font-medium">
            15's, bautizos, cumpleaños, bodas y eventos corporativos.  
            Nos adaptamos a cada estilo, locación y presupuesto para hacerlo inolvidable. 💜
          </p>
        </div>
      </section>
    </div>
  );
}
