import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const Feedback7 = () => {
  //collect current answers state
  const { answersObject } = useSelector((state) => state.answers);
  //if (answersObject.question7 == "option3") {
  return (
    <p className="px-4 text-center relative top-1/2 -translate-y-1/2">
      Existe un gran desequilibrio entre regiones, liderando la reutilización de
      aguas Murcia (57.8%) y Comunidad Valenciana (40.6%). En el otro lado de la
      balanza se encuentran Navarra y La Rioja, con menos del 1% de agua
      reutilizada.
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
