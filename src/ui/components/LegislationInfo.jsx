import React from "react";
import infoCard from "../../assets/infoCard.png";
import testGraph from "../../assets/testGraph.png";

export const LegislationInfo = () => {
  return (
    <section className="mt-14 pb-10">
      <div>
        <img className="w-full" src={infoCard} alt="Image of dry valley" />
      </div>
      <h2 className="m-4 font-semibold">Sequía y sus consecuencias</h2>
      <article>
        <div className="flex flex-wrap justify-start mx-3 md:justify-center ">
          <p className="my-1 ms-2 py-1 px-3 border border-white bg-small-button/80  text-center  text-xs rounded-3xl">
            Políticas azules
          </p>
          <p className="my-1 ms-2 py-1 px-3 border border-white bg-small-button/80  text-center  text-xs rounded-3xl">
            Sequía
          </p>
        </div>
        <p className="m-4 py-2 border-y border-secondary text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <h3 className="ms-4 mb-4 text-sm font-semibold">
          Consumo medio por habitante (m3)
        </h3>
        <div className="block m-auto mx-4">
          <img className="w-full" src={testGraph} alt="drought graph" />
        </div>
        <div className="m-6 flex justify-between">
          <button className="mb-8 px-2 py-3 drop-shadow w-content border border-terciary bg-secondary hover:bg-primary text-white text-center  shadow-lg rounded-3xl">
            RRSS
          </button>
          <button className="mb-8 px-5 py-3 drop-shadow w-content border border-terciary bg-secondary hover:bg-primary text-white text-center  shadow-lg rounded-3xl">
            +info
          </button>
        </div>
      </article>
    </section>
  );
};
