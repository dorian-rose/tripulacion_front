import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const Feedback3 = () => {
  //collect current answers state
  const { answersObject } = useSelector((state) => state.answers);
  //if (answersObject.question3 == "option2") {
  return (
    <p className="px-4 text-center relative top-1/2 -translate-y-1/2">
      La titularidad del agua en España corresponde al Estado, pero su gestión
      se lleva a cabo a través de las administraciones regionales y locales de
      cada comunidad autónoma. En algunos casos se han creado empresas públicas
      para la gestión del suministro y saneamiento.
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
