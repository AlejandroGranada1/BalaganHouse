import React from "react";

const images = [
  {
    url: "https://imgur.com/8TAu0Wn.jpg",
    title: "Cumpleaños de María",
    subtitle: "en El Poblado",
  },
  {
    url: "https://imgur.com/hM8kYPr.jpg",
    title: "Boda de Ana & Carlos",
    subtitle: "en Laureles",
  },
  {
    url: "https://imgur.com/gXIApdJ.jpg",
    title: "Evento Corporativo",
    subtitle: "en Sabaneta",
  },
  {
    url: "https://imgur.com/HdQeVED.jpg",
    title: "Fiesta de Sofía",
    subtitle: "en Robledo",
  },
];

const Gallery = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 text-center text-gray-800">
      {/* Título */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#a020f0] uppercase tracking-wide mb-3">
        Galería
      </h2>
      <p className="text-lg text-gray-600 mb-12">
        Algunos de nuestros momentos más memorables ✨
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative w-full max-w-[280px] aspect-[4/3] rounded-xl overflow-hidden shadow-lg cursor-pointer group transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
          >
            <img
              src={img.url}
              alt={img.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay con texto */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center text-white text-center p-4">
              <h3 className="text-lg font-semibold drop-shadow-md">
                {img.title}
              </h3>
              <p className="text-sm italic mt-1">{img.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
