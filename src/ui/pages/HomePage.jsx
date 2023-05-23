import React from "react";
import { useState, useRef, useEffect } from "react";
import logoText from "../../assets/logoText.png";
import userButton from "../../assets/userButton.svg";
// import martillo from "../../assets/martillo.png";
import { Link, useNavigate } from "react-router-dom";
import { MapContainerComp } from "../../map/components";
import { DroughtConsequences } from "../components/homepageCards/DroughtConsequences";
import { setVisited } from "../../store/slice/visited/visitedSlice";
import { useDispatch, useSelector } from "react-redux";
import { setVisitedLocal } from "../../helpers/localStorage";
import { DroughtCards } from "../components/homepageButtons/DroughtCards";
import { DroughtLegislation } from "../components/homepageCards/DroughtLegislation";
import { ContaminationCards } from "../components/homepageButtons/ContaminationCards";
import { ContaminationInfo } from "../components/homepageCards/ContaminationInfo";

export const HomePage = () => {
  const user = localStorage.getItem("id");
  console.log(user);
  //collect current visited pages state
  const { visitedObject } = useSelector((state) => state.visited);

  const dispatch = useDispatch();
  const [infoButtons, setInfoButtons] = useState("drought");
  const [infoTopic, setInfoTopic] = useState("");
  const info = useRef(null);

  //===="CATEGORY" LOGIC====//
  const changeCategory = ({ target }) => {
    setInfoButtons(target.id);
  };

  //====INFO SECTION LOGIC===//
  //function to scroll to info
  const scrollToInfo = () => {
    info.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  //click on info buttons, infoTopic is changed
  const handleClick = ({ target }) => {
    const button = target.closest("button");
    setInfoTopic(button.id);
    //scroll to info section - one millisecond wait to allow component to load
    setTimeout(scrollToInfo, 100);
  };

  //on change of infoTopic
  useEffect(() => {
    // set state that topic has been visited
    if (infoTopic != "") {
      if (visitedObject[infoTopic] == false) {
        const newScore = visitedObject.score + 5;
        const visitedPages = {
          ...visitedObject,
          [infoTopic]: true,
          score: newScore,
        };
        dispatch(setVisited(visitedPages));
      }
    }
  }, [infoTopic]);

  useEffect(() => {
    setVisitedLocal(visitedObject);
  }, [visitedObject]);

  return (
    <>
      <div
        className={`bg-backgroundPrimary ${infoTopic == "" && "min-h-screen"} `}
      >
        <section className="z-101 pb-10">
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
            <button
              id="policies"
              onClick={changeCategory}
              className="my-1 ms-2 py-1 px-3 border border-white bg-small-button/80 hover:bg-secondary  text-center  text-xs rounded-3xl font-semibold"
            >
              Políticas azules
            </button>
            <button
              id="uses"
              onClick={changeCategory}
              className="my-1 ms-2 py-1 px-3 border border-white bg-small-button/80 hover:bg-secondary  text-center  text-xs rounded-3xl font-semibold"
            >
              Buenos usos
            </button>
            <button
              id="drought"
              onClick={changeCategory}
              className="my-1 ms-2 py-1 px-3 border border-white bg-small-button/80 hover:bg-secondary  text-center  text-xs rounded-3xl font-semibold"
            >
              Sequía
            </button>
            <button
              id="contamination"
              onClick={changeCategory}
              className="my-1 ms-2  py-1 px-3 border border-white bg-small-button/80 hover:bg-secondary  text-center  text-xs rounded-3xl font-semibold"
            >
              Contaminación
            </button>
            <button
              id="more"
              onClick={changeCategory}
              className="my-1 ms-2 py-1 px-3 border border-white bg-small-button/80 hover:bg-secondary  text-center  text-xs rounded-3xl font-semibold"
            >
              Mas cosas
            </button>
          </article>
          {infoButtons == "drought" && (
            <DroughtCards handleClick={handleClick} />
          )}
          {infoButtons == "contamination" && (
            <ContaminationCards handleClick={handleClick} />
          )}
          <div className="border-t border-secondary w-11/12 block m-auto"></div>

          <div className="mt-3 mx-3 mb-2 flex justify-between">
            <p className="text-xs font-bold text-darkBlue">Modelo predictivo</p>
            <Link to="/viewmap" className="text-xs text-darkBlue font-semibold">
              Ver modelo
            </Link>
          </div>
          <div className="relative bg-white h-64  w-full text-center border"></div>
          <div className="mt-4 border-t border-secondary w-11/12 block m-auto"></div>
          <div className="mt-3 mx-3 mb-2 flex justify-between">
            <p className="text-xs font-bold text-darkBlue">
              Reservas de agua en España
            </p>
            <Link to="/viewmap" className="text-xs text-darkBlue font-semibold">
              Ver mapa
            </Link>
          </div>
          <div className="relative bg-white h-64  w-full text-center border">
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
      <div className="info pb-16" ref={info}>
        {infoTopic == "droughtVisited" && <DroughtConsequences />}
        {infoTopic == "politicsVisited" && <DroughtLegislation />}
        {infoTopic == "contaminationVisited" && <ContaminationInfo />}
      </div>
    </>
  );
};
