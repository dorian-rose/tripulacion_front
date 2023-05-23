import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const Feedback8 = () => {
  //collect current answers state
  const { answersObject } = useSelector((state) => state.answers);
  //if (answersObject.question8 == "option1") {
  return (
    <p className="px-4 text-center relative top-1/2 -translate-y-1/2">
      Según nuestro modelo de predicción basado en series temporales, si se
      mantienen las condiciones actuales climáticas y de gestión y explotación
      de estos recursos, se prevé un empeoramiento del estado de los embalses.
    </p>
  );
  //} else {
  //   return (
  //     <p className="text-center">
  //       Feedback para pregunta 1: respuesta incorrecta
  //     </p>
  //   );
  // }
};
