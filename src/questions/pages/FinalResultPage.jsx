import React from "react";

import gota from "../../assets/gota.png";

import { Link, useParams } from "react-router-dom";
import { FinalFeedback } from "../components/FinalFeedback";

export const FinalResultPage = () => {
  return (
    <div className="pt-16 bg-backgroundPrimary min-h-screen ">
      <article className="border border-white drop-shadow w-10/12 bg-primary/90 text-white block m-auto  pt-6  px-4 h-96 shadow-lg rounded-lg">
        <FinalFeedback />
      </article>
      <img
        className="relative -top-32 block m-auto w-56"
        src={gota}
        alt="logo"
      />
      <Link
        to="/"
        className="fixed left-1/2 -translate-x-1/2 bottom-2 drop-shadow w-11/12 bg-primary text-white hover:bg-secondary  block  mb-10 text-center m-auto py-2 shadow-lg rounded-3xl"
      >
        Siguiente
      </Link>
    </div>
  );
};
