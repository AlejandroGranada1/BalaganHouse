import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="font-[Montserrat]">
      {/* HERO SECTION */}
      <section
        className="w-full min-h-[80vh] bg-cover bg-center text-white text-center flex flex-col items-center justify-center px-6 py-20 md:py-32"
        style={{
          backgroundImage: `
            linear-gradient(rgba(13,13,13,0.7), rgba(13,13,13,0.7)),
            url('https://imgur.com/VsbgmKI.jpg?auto=format&fit=crop&w=1600&q=80')
          `,
        }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold uppercase text-[#c873ff] drop-shadow-lg">
          Balagan House
        </h1>
        <h3 className="text-lg md:text-2xl font-light mt-4">
          Creamos emociones, producimos momentos 💜
        </h3>
        <p className="max-w-3xl mx-auto mt-6 text-sm md:text-lg leading-relaxed text-gray-200">
          Somos una agencia de eventos personalizada ubicada en Medellín, Colombia.  
          Nacimos para transformar ideas en experiencias inolvidables, fusionando
          creatividad, logística y pasión.  
          Cada evento es una historia única, y nosotros nos encargamos de producir
          cada momento con magia y profesionalismo.
        </p>
        
        {/* 🔹 Usa Link en lugar de <a> */}
        <Link
          to="/services"
          className="mt-8 inline-block px-8 py-3 bg-[#a020f0] hover:bg-[#c873ff] text-white font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1"
        >
          Descubre nuestros servicios
        </Link>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-[#fafafa] text-center py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#a020f0] uppercase mb-3">
          ¿Por qué elegirnos?
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          En <b>Balagan House</b> combinamos elegancia, creatividad y pasión para que tu evento sea único.
        </p>

        <div className="flex flex-wrap justify-center gap-10 mt-12">
          {[
            {
              title: "🎨 Personalización Total",
              text: "Cada detalle se diseña a tu medida. Tú imaginas, nosotros lo hacemos realidad.",
            },
            {
              title: "💡 Experiencia y Creatividad",
              text: "Un equipo experto que combina arte, innovación y logística impecable.",
            },
            {
              title: "🤝 Atención Integral",
              text: "Desde la idea hasta la ejecución, acompañamos cada paso del proceso.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white shadow-lg rounded-2xl w-full sm:w-72 p-8 text-gray-800 transition-all transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <h3 className="text-xl font-semibold text-[#a020f0] mb-3">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
