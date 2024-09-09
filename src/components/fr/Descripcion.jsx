import React from 'react';

function Descripcion({ titulo, descripcion }) {
  return (
    <section className="flex flex-col gap-5 self-center w-full mt-6 mb-20 md:mt-20 md:mb-40">
      <h2 className="text-xl md:text-3xl font-bold text-[#226428]">
        {titulo}
      </h2>
      <p className="text-sm md:text-base font-normal w-fit">
        {descripcion}
      </p>
    </section>
  );
}

export default Descripcion;
