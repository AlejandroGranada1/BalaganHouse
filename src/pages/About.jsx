import React from "react";

export default function About() {
  return (
    <div className="pt-24 md:pt-28">
      {/* Sección Quiénes Somos */}
      <section className="max-w-6xl mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row gap-10 items-center justify-center">
        {/* Imagen */}
        <div className="flex-1 min-w-[300px] max-w-md">
          <img
            src="https://imgur.com/MirD51X.jpg?auto=format&fit=crop&w=900&q=80"
            alt="Equipo Balagan House"
            className="w-full h-auto object-cover rounded-2xl shadow-xl hover:scale-[1.02] transition-transform duration-500"
          />
        </div>

        {/* Texto */}
        <div className="flex-1 min-w-[300px]">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#a020f0] uppercase mb-4">
            Quiénes Somos
          </h2>
          <p className="mb-6 leading-relaxed text-gray-700 text-base md:text-lg">
            <b>Balagan House</b> nace para cubrir la creciente demanda de eventos
            personalizados y memorables, brindando soluciones integrales que
            combinan creatividad, logística y profesionalismo.
          </p>

          <div className="space-y-5">
            <div>
              <h3 className="text-xl font-semibold text-[#a020f0] uppercase mb-2">
                Misión
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Proporcionar experiencias únicas y personalizadas que superen las
                expectativas de nuestros clientes.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#a020f0] uppercase mb-2">
                Visión
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Convertirnos en la empresa líder en la organización de eventos
                personalizados en Colombia.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#a020f0] uppercase mb-3">
                Valores Corporativos
              </h3>
              <ul className="space-y-2 text-gray-700">
                {[
                  "💡 Creatividad",
                  "🤝 Compromiso",
                  "⏰ Puntualidad",
                  "🎯 Profesionalismo",
                  "🔥 Pasión",
                ].map((valor, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span>{valor}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Equipo Directivo */}
      <section className="text-center py-16 md:py-24 bg-gradient-to-b from-white to-purple-50">
        <h2 className="text-3xl md:text-4xl font-bold text-[#a020f0] uppercase">
          Nuestro Equipo Directivo
        </h2>

        <div className="flex flex-wrap justify-center gap-10 mt-12">
          {[
            {
              name: "Karen Yiseth Villa Grajales",
              role: "Dirección Operativa, Finanzas y Logística",
              img: "https://imgur.com/1DU0TWs.jpg",
            },
            {
              name: "María Paula Cuesta Restrepo",
              role: "Dirección Creativa y Experiencia del Cliente",
              img: "https://imgur.com/1C3B5Ee.jpg",
            },
          ].map((person, i) => (
            <div
              key={i}
              className="bg-white w-72 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <img
                src={person.img}
                alt={person.name}
                className="w-full h-72 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-[#a020f0] mb-1">
                  {person.name}
                </h3>
                <p className="text-gray-600 text-sm font-medium">
                  {person.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sección Filosofía */}
      <section
        className="text-white text-center py-24 px-6 bg-cover bg-center"
        style={{
          backgroundImage: `
            linear-gradient(rgba(13,13,13,0.85), rgba(13,13,13,0.85)),
            url('https://imgur.com/1Oh7RRT.jpg?auto=format&fit=crop&w=1600&q=80')
          `,
        }}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#c873ff] uppercase mb-6">
            Nuestra Filosofía
          </h2>
          <p className="text-lg md:text-xl leading-relaxed">
            En <b>Balagan House</b> creemos que cada evento tiene alma.  
            Nos motiva la conexión humana, la estética y la alegría que se
            comparte en cada celebración.  
            Creamos emociones, producimos momentos… y los convertimos en
            recuerdos que duran toda la vida. ✨
          </p>
        </div>
      </section>
    </div>
  );
}
