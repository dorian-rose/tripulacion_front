import React from "react";
import { MapContainerComp } from "../../map/components";
import backButton from "../../assets/backButton.svg";
import logoText from "../../assets/logoText.png";

export const MapPage = () => {
  return (
    <>
      <div className="flex pt-6 mx-5">
        <button onClick={() => navigate(-1)}>
          <h1>
            <img src={backButton} alt="left arrow" />
          </h1>
        </button>
        <img
          className="text-center  ms-[calc(50%-7rem)] mt-2"
          src={logoText}
          alt="logo H2OH"
        />
      </div>
      <div className="absolute top-0 bottom-0 left-0 right-0 z-0">
        <MapContainerComp />
      </div>
    </>
  );
};
