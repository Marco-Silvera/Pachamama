import React from 'react';

function Precio({ circuito }) {
  return (
    <section className="flex flex-col gap-5 self-center w-full mb-20 mt-6 md:mt-10 md:mb-40">
      <h2 className="text-center text-xl md:text-3xl font-bold text-[#226428] uppercase">
      Tarifs
      </h2>

      <h3 className="text-xl md:text-2xl font-medium text-black">Inclus</h3>
      <ul className="list-disc ml-0 md:ml-4 pl-4 mb-3">
        {circuito.precio.incluye.map((item, index) => (
          <li key={index} className="text-sm md:text-base font-normal text-pretty">
            {item}
          </li>
        ))}
      </ul>

      <h3 className="text-xl md:text-2xl font-medium text-black">Non inclus</h3>
      <ul className="list-disc ml-0 md:ml-4 pl-4 mb-3">
        {circuito.precio['no-incluye'].map((item, index) => (
          <li key={index} className="text-sm md:text-base font-normal">
            {item}
          </li>
        ))}
      </ul>

      <h3 className="text-xl md:text-2xl font-medium text-black">
      Informations sur les bagages
      </h3>
      <p className="text-sm md:text-base font-normal">
      Jusqu'à 23 kg/personne sont autorisés sur les vols intérieurs et 20 kg/personne sur les bus réguliers. <br />
      Pour les vols internationaux, consulter la compagnie choisie. <br />
      Généralement, dans les hôtels, le check-in s'effectue à partir de 14h et le check-out jusqu'à 11h.
      </p>
    </section>
  );
}

export default Precio;
