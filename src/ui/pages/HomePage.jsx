import React from "react";
import { useState, useRef } from "react";
import logoText from "../../assets/logoText.png";
import userButton from "../../assets/userButton.svg";
import { Link, useNavigate } from "react-router-dom";
import { MapContainerComp } from "../../map/components";
import { LegislationInfo } from "../components/LegislationInfo";

export const HomePage = () => {
  const [infoButtons, setInfoButtons] = useState("drought");
  const [infoTopic, setInfoTopic] = useState("");
  const navigate = useNavigate();
  const info = useRef(null);

  //function to scroll to info
  const scrollToInfo = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  //click on info buttons
  const handleClick = ({ target }) => {
    console.log("here");
    setInfoTopic(target.id);
    scrollToInfo(info);
  };
  return (
    <>
      <div className="bg-backgroundPrimary min-h-screen pb-6">
        <section className="z-101">
          <hgroup className="flex justify-between pt-10">
            <h1>
              <img className="mx-5 w-36" src={logoText} alt="logo" />
            </h1>
            <Link to="/profile">
              <img
                className="mx-5"
                src={userButton}
                alt="button to edit user details"
              />
            </Link>
          </hgroup>

          <h2 className="font-bold text-darkBlue text-xs mx-5 my-2 md:text-center">
            Selección de categoría
          </h2>
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
          {infoButtons == "drought" && (
            <article>
              <button
                id="drought-legislation"
                onClick={handleClick}
                className="mb-4 mt-7 drop-shadow w-11/12 border border-terciary bg-secondary hover:bg-primary text-white block  text-center m-auto py-3 shadow-lg rounded-3xl"
              >
                Legislación sobre (Insert)
              </button>
              <button className="mb-8 drop-shadow w-11/12 border border-terciary bg-secondary hover:bg-primary text-white block text-center m-auto py-3 shadow-lg rounded-3xl">
                Curiosidades sobre (Insert)
              </button>
            </article>
          )}
          <div className="border-t border-secondary w-11/12 block m-auto"></div>

          <div className="mt-3 mx-3 mb-2 flex justify-between">
            <p className="text-xs font-bold text-darkBlue">
              Reservas de agua en España
            </p>
            <Link to="/viewmap" className="text-xs text-darkBlue">
              ver mapa
            </Link>
          </div>

          <div className="relative bg-white h-64 w-full text-center border">
            <div className="absolute top-0 bottom-0 left-0 right-0 z-0">
              <MapContainerComp />
            </div>
          </div>
          <Link
            to="/quiz/1"
            className="fixed left-1/2 -translate-x-1/2 bottom-2  z-10 my-10 py-3 drop-shadow  w-11/12 bg-primary hover:bg-secondary text-white block  text-center m-auto  shadow-lg rounded-3xl"
          >
            Iniciar encuesta
          </Link>
        </section>
      </div>
      <div id="info" className="info" ref={info}>
        {infoTopic == "drought-legislation" && <LegislationInfo />}
      </div>
    </>
  );
};
