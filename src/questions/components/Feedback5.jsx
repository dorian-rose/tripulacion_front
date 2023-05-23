import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const Feedback5 = () => {
  //collect current answers state
  const { answersObject } = useSelector((state) => state.answers);
  //if (answersObject.question5 == "option4") {
  return (
    <p className="px-4 text-center relative top-1/2 -translate-y-1/2">
      Andalucía se destaca como la comunidad autónoma en España que presenta los
      índices más reducidos de almacenamiento de agua en sus embalses. Su
      capacidad hídrica se encuentra actualmente al 27,6%, lo cual indica una
      disminución significativa en comparación con su capacidad total.
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
