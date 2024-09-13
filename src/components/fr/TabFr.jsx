import React, { useState, useEffect } from 'react';
import Descripcion from './Descripcion';
import Itinerario from './Itinerario';
import Precio from './Precio';

function Tab({ circuito }) {
  const [openTab, setOpenTab] = useState(1);


  return (
    <div className="flex flex-col gap-5 md:gap-10 max-w-[1000px] w-full self-center py-20 px-5">

      <div className="mb-4 flex space-x-4 p-2 bg-white rounded-lg shadow-md">
        <button
          onClick={() => setOpenTab(1)}
          className={`flex-1 py-2 px-2 md:px-4 text-sm md:text-base rounded-md ${openTab === 1 ? 'bg-[#226428] text-white' : ''}`}
        >
          Descripción
        </button>
        <button
          onClick={() => setOpenTab(2)}
          className={`flex-1 py-2 px-2 md:px-4 text-sm md:text-base rounded-md ${openTab === 2 ? 'bg-[#226428] text-white' : ''}`}
        >
          Itinerario
        </button>
        <button
          onClick={() => setOpenTab(3)}
          className={`flex-1 py-2 px-2 md:px-4 text-sm md:text-base rounded-md ${openTab === 3 ? 'bg-[#226428] text-white' : ''}`}
        >
          Precios
        </button>
      </div>

      {openTab === 1 && (
        <div className="transition-all duration-300 bg-white p-4 rounded-lg shadow-md relative">
          <Descripcion
            titulo={circuito['descripcion-principal']['titulo-descripcion']}
            descripcion={circuito['descripcion-principal']['parrafo-descripcion']}
          />
          <div className="bg-[#226428] h-20 md:h-24 w-full flex items-center justify-center absolute bottom-0 left-0 rounded-bl-lg rounded-br-lg">
            <a
              className="border-2 border-white p-3 md:p-5 text-xl text-white hover:text-[#226428] hover:bg-white font-bold uppercase hover:scale-90 transition-transform"
              href="/reservation/"
            >
              Reserva ahora
            </a>
          </div>
        </div>
      )}

      {openTab === 2 && (
        <div className="transition-all duration-300 bg-white p-4 rounded-lg shadow-md relative">
          <Itinerario circuito={circuito} />
          <div className="bg-[#226428] h-20 md:h-24 w-full flex items-center justify-center absolute bottom-0 left-0 rounded-bl-lg rounded-br-lg">
            <a
              className="border-2 border-white p-3 md:p-5 text-xl text-white hover:text-[#226428] hover:bg-white font-bold uppercase hover:scale-90 transition-transform"
              href="/reservation/"
            >
              Reserva ahora
            </a>
          </div>
        </div>
      )}

      {openTab === 3 && (
        <div className="transition-all duration-300 bg-white p-4 rounded-lg shadow-md relative">
          <Precio circuito={circuito} />
          <div className="bg-[#226428] h-20 md:h-24 w-full flex items-center justify-center absolute bottom-0 left-0 rounded-bl-lg rounded-br-lg">
            <a
              className="border-2 border-white p-3 md:p-5 text-xl text-white hover:text-[#226428] hover:bg-white font-bold uppercase hover:scale-90 transition-transform"
              href="/reservation/"
            >
              Reserva ahora
            </a>
          </div>
        </div>
      )}

    </div>
  );
}


export default Tab;

<script
  src="https://cdn.jsdelivr.net/npm/alpinejs@2.8.2/dist/alpine.min.js"
  defer></script>
