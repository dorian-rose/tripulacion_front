import React from "react";
import suministro from "../../../assets/homePageButtons/suministro.svg";

export const SuministroCards = ({ handleClick }) => {
  return (
    <article>
      <button
        id="suministro"
        onClick={handleClick}
        className="m-0 z-10 mb-4 mt-7 drop-shadow w-11/12 border border-terciary bg-terciary hover:bg-primary text-darkBlue font-bold block  text-center m-auto shadow-lg rounded-2xl"
      >
        <div className="h-24 sm:h-40 overflow-hidden">
          <img
            className="w-full rounded-t-2xl"
            src={suministro}
            alt="Water pouring from a tap into a large recipient"
          />
        </div>
        <p className="my-2">Coste suministro por habitante</p>
      </button>
    </article>
  );
};