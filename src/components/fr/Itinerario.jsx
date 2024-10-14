import React from 'react';

function Itinerario({ circuito }) {
  return (
    <section className="flex flex-col gap-5 self-center w-full mt-6 mb-20 md:mb-40 md:mt-10">
      <h2 className="text-center text-xl md:text-3xl font-bold text-[#226428] uppercase">
      Itinéraire détaillé
      </h2>
      {circuito.itinerario.map((dia, index) => (
        <div key={index}>
          <h2 className="text-xl md:text-2xl font-medium text-black">
            Jour {dia.dia}
          </h2>
          <p className="text-sm md:text-base uppercase font-black">
            {dia['titulo-actividades']}
          </p>
          <p className="text-sm md:text-base font-normal text-pretty mb-3 md:mb-5">
            {dia.actividades}
          </p>
        </div>
      ))}
    </section>
  );
}

export default Itinerario;