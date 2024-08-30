import React from 'react';

function Precio({ circuito }) {
  return (
    <section className="flex flex-col gap-5 self-center w-full mb-20 mt-6 md:mt-10 md:mb-40">
      <h2 className="text-center text-xl md:text-3xl font-bold text-[#226428] uppercase">
        Precios
      </h2>

      <h3 className="text-xl md:text-2xl font-medium text-black">Incluye</h3>
      <ul className="list-disc ml-0 md:ml-4 pl-4 mb-3">
        {circuito.precio.incluye.map((item, index) => (
          <li key={index} className="text-sm md:text-base font-normal text-pretty">
            {item}
          </li>
        ))}
      </ul>

      <h3 className="text-xl md:text-2xl font-medium text-black">No Incluye</h3>
      <ul className="list-disc ml-0 md:ml-4 pl-4 mb-3">
        {circuito.precio['no-incluye'].map((item, index) => (
          <li key={index} className="text-sm md:text-base font-normal">
            {item}
          </li>
        ))}
      </ul>

      <h3 className="text-xl md:text-2xl font-medium text-black">
        Información del Equipaje
      </h3>
      <p className="text-sm md:text-base font-normal">
        Está permitido hasta 23 kg/ persona en los vuelos nacionales y 20kg/persona en los buses de línea. <br />
        Para el vuelo internacional, consultar la compañía elegida. <br />
        Por lo general en los hoteles el check in se hace a partir de las 2pm y el check out hasta las 11am.
      </p>
    </section>
  );
}

export default Precio;
