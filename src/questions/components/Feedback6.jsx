import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const Feedback6 = () => {
  //collect current answers state
  const { answersObject } = useSelector((state) => state.answers);
  //if (answersObject.question6 == "option2") {
  return (
    <p className="px-4 text-center relative top-1/2 -translate-y-1/2">
      La Cuenca del Ebro registra el mayor número de embalses: 73. En segundo
      lugar, la Cuenca del Tajo con 51 embalses.
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
