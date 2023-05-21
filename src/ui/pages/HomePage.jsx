import React from "react";
import { useState, useRef, useEffect } from "react";
import logoText from "../../assets/logoText.png";
import userButton from "../../assets/userButton.svg";
import martillo from "../../assets/martillo.png";
import { Link, useNavigate } from "react-router-dom";
import { MapContainerComp } from "../../map/components";
import { LegislationInfo } from "../components/LegislationInfo";
import { setVisited } from "../../store/slice/visited/visitedSlice";
import { useDispatch, useSelector } from "react-redux";
import { setVisitedLocal } from "../../helpers/localStorage";

export const HomePage = () => {
  //collect current visited pages state
  const { visitedObject } = useSelector((state) => state.visited);
  const dispatch = useDispatch();
  const [infoButtons, setInfoButtons] = useState("drought");
  const [infoTopic, setInfoTopic] = useState("");
  const info = useRef(null);

  //function to scroll to info
  const scrollToInfo = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  //click on info buttons, infoTopic is changed
  const handleClick = ({ target }) => {
    setInfoTopic(target.id);
    //scroll to info section, if section mounted:
    if (infoTopic != "") {
      scrollToInfo(info);
    }
  };

  //on change of infoTopic
  useEffect(() => {
    // set state that topic has been visited
    console.log(infoTopic);
    if (infoTopic != "") {
      const visitedPages = { ...visitedObject, [infoTopic]: true };
      dispatch(setVisited(visitedPages));
    }
    //scroll to info section
    scrollToInfo(info);
  }, [infoTopic]);
  console.log(visitedObject);

  useEffect(() => {
    setVisitedLocal(visitedObject);
  }, [visitedObject]);

  return (
    <>
      <div
        className={`bg-backgroundPrimary ${infoTopic == "" && "min-h-screen"} `}
      >
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
            <button className="my-1 ms-2 py-1 px-3 border border-white bg-small-button/80 hover:bg-secondary  text-center  text-xs rounded-3xl font-medium">
              Políticas azules
            </button>
            <button className="my-1 ms-2 py-1 px-3 border border-white bg-small-button/80 hover:bg-secondary  text-center  text-xs rounded-3xl font-medium">
              Buenos usos
            </button>
            <button className="my-1 ms-2 py-1 px-3 border border-white bg-small-button/80 hover:bg-secondary  text-center  text-xs rounded-3xl font-medium">
              Sequía
            </button>
            <button className="my-1 ms-2  py-1 px-3 border border-white bg-small-button/80 hover:bg-secondary  text-center  text-xs rounded-3xl font-medium">
              Contaminación
            </button>
            <button className="my-1 ms-2 py-1 px-3 border border-white bg-small-button/80 hover:bg-secondary  text-center  text-xs rounded-3xl font-medium">
              Mas cosas
            </button>
          </article>
          {infoButtons == "drought" && (
            <article>
              <button
                id="droughtVisited"
                onClick={handleClick}
                className="mb-4 mt-7 drop-shadow w-11/12 border border-white bg-terciary hover:bg-primary text-darkBlue font-semibold block  text-center m-auto py-3 shadow-lg rounded-3xl"
              >
                {/* <img className="" src={martillo} alt="drought graph"/> */}
                Legislación sobre el agua
              </button>
              <button
                id="contaminationVisited"
                onClick={handleClick}
                className="mb-8 drop-shadow w-11/12 border border-terciary bg-terciary hover:bg-primary text-darkBlue font-semibold block text-center m-auto py-3 shadow-lg rounded-3xl"
              >
                {/* <img className="" src={martillo} alt="drought graph"/> */}
                Curiosidades sobre el agua
              </button>
            </article>
          )}
          <div className="border-t border-secondary w-11/12 block m-auto"></div>

          <div className="mt-3 mx-4 mb-2 flex justify-between">
            <p className="text-xs font-bold text-darkBlue">
              Reservas de agua en España
            </p>
            <Link to="/viewmap" className="text-xs text-darkBlue font-medium">
              Ver mapa
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
      <div className="info pb-6" ref={info}>
        {infoTopic == "droughtVisited" && <LegislationInfo />}
      </div>
    </>
  );
};
