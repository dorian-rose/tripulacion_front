import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const Feedback4 = () => {
  //collect current answers state
  const { answersObject } = useSelector((state) => state.answers);
  //if (answersObject.question4 == "option3") {
  return (
    <p className="px-4 text-center relative top-1/2 -translate-y-1/2">
      En España se establece una media de consumo en las dos últimas décadas de
      39.3 litros por persona y día, siendo Cantabria con 45.7 la comunidad que
      más gasto de agua realiza.
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
