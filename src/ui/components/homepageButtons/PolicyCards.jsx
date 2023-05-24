import React from "react";
import martillo from "../../../assets/martillo.png";
import planHidroNacional from "../../../assets/homePageButtons/planHidroNacional.svg";
import planCuencaHidro from "../../../assets/homePageButtons/planCuencaHidro.svg";
import directivoMarca from "../../../assets/homePageButtons/directivoMarca.svg";
import programaReutil from "../../../assets/homePageButtons/programaReutil.svg";

export const PolicyCards = ({ handleClick }) => {
  return (
    <article>
      <button
        id="planHidroNacional"
        onClick={handleClick}
        className="m-0 z-10 mb-4 mt-7 drop-shadow w-11/12 border border-terciary bg-terciary hover:bg-primary text-darkBlue font-semibold block  text-center m-auto shadow-lg rounded-3xl"
      >
        <div className="h-24 sm:h-40 overflow-hidden">
          <img
            className="w-full rounded-t-3xl"
            src={planHidroNacional}
            alt="drought graph"
          />
        </div>
        <p className="my-2">Plan Hidrológico Nacional</p>
      </button>
      <button
        id="planCuencaHidro"
        onClick={handleClick}
        className="m-0 z-10 mb-4 mt-7 drop-shadow w-11/12 border border-terciary bg-terciary hover:bg-primary text-darkBlue font-semibold block  text-center m-auto shadow-lg rounded-3xl"
      >
        <div className="h-24  sm:h-40 overflow-hidden">
          <img
            className="w-full rounded-t-3xl"
            src={planCuencaHidro}
            alt="drought graph"
          />
        </div>
        <p className="my-2">Planes de cuenca hidrográfica </p>
      </button>
      <button
        id="directivoMarca"
        onClick={handleClick}
        className="m-0 z-10 mb-4 mt-7 drop-shadow w-11/12 border border-terciary bg-terciary hover:bg-primary text-darkBlue font-semibold block  text-center m-auto shadow-lg rounded-3xl"
      >
        <div className="h-24 sm:h-40 overflow-hidden">
          <img
            className="w-full rounded-t-3xl"
            src={directivoMarca}
            alt="drought graph"
          />
        </div>
        <p className="my-2">Directiva marco del agua</p>
      </button>
      <button
        id="programaReutilizacion"
        onClick={handleClick}
        className="m-0 z-10 mb-4 mt-7 drop-shadow w-11/12 border border-terciary bg-terciary hover:bg-primary text-darkBlue font-semibold block  text-center m-auto shadow-lg rounded-3xl"
      >
        <div className="h-24 sm:h-40 overflow-hidden">
          <img
            className="w-full rounded-t-3xl"
            src={programaReutil}
            alt="drought graph"
          />
        </div>
        <p className="my-2">Programas de reutilización de las aguas</p>
      </button>
    </article>
  );
};