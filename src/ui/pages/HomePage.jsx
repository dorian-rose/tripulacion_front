import React from "react";
import logoText from "../../assets/logoText.png";
import userButton from "../../assets/userButton.svg";
import { MapContainerComp } from "../../components/map";

export const HomePage = () => {
  return (
    <div className="py-14">
      <section>
        <hgroup className="flex justify-between">
          <img className="mx-5 mb-7  w-36" src={logoText} alt="logo" />
          <button>
            <img
              className="mx-5 mb-7 "
              src={userButton}
              alt="button to edit user details"
            />
          </button>
        </hgroup>

        <h2 className="text-xs mx-5 my-2">Selección de categoría</h2>
        <article className="flex flex-wrap justify-start mx-3 md:justify-center">
          <button className="my-1 ms-2 py-1 px-3 border border-white bg-small-button/80 hover:bg-secondary  text-center  text-xs rounded-3xl">
            Políticas azules
          </button>
          <button className="my-1 ms-2 py-1 px-3 border border-white bg-small-button/80 hover:bg-secondary  text-center  text-xs rounded-3xl">
            Buenos usos
          </button>
          <button className="my-1 ms-2 py-1 px-3 border border-white bg-small-button/80 hover:bg-secondary  text-center  text-xs rounded-3xl">
            Sequía
          </button>
          <button className="my-1 ms-2  py-1 px-3 border border-white bg-small-button/80 hover:bg-secondary  text-center  text-xs rounded-3xl">
            Contaminación
          </button>
          <button className="my-1 ms-2 py-1 px-3 border border-white bg-small-button/80 hover:bg-secondary  text-center  text-xs rounded-3xl">
            Mas cosas
          </button>
        </article>
        <button className="mb-4 mt-7 drop-shadow w-11/12 border border-terciary bg-secondary hover:bg-primary text-white block  text-center m-auto py-3 shadow-lg rounded-3xl">
          Legislación sobre (Insert)
        </button>
        <button className="mb-8 drop-shadow w-11/12 border border-terciary bg-secondary hover:bg-primary text-white block text-center m-auto py-3 shadow-lg rounded-3xl">
          Curiosidades sobre (Insert)
        </button>
        <p className="m-3 text-darkBlue text-xs text-bold ">Reservas de agua en españa</p>
        <div className="relative bg-white h-64 w-full text-center border">
          <div className="absolute top-0 bottom-0 left-0 right-0">
            <MapContainerComp />
          </div>
        </div>
        <button className="mt-12 py-3 drop-shadow w-11/12 bg-primary hover:bg-white hover:text-primary text-white block  text-center m-auto  shadow-lg rounded-3xl">
          Iniciar encuesta
        </button>
      </section>
    </div>
  );
};
