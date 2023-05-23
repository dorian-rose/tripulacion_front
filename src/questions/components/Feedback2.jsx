import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const Feedback2 = () => {
  //collect current answers state
  const { answersObject } = useSelector((state) => state.answers);
  //if (answersObject.question2 == "option1") {
  return (
    <p className=" text-center relative top-1/2 -translate-y-1/2">
      En España, el Ministerio para la Transición Ecológica es responsable de
      varias tareas relacionadas con la gestión de recursos hídricos, incluyendo
      la elaboración del Plan Hidrológico Nacional, la coordinación de planes de
      emergencia, la inspección y control de infraestructuras hidráulicas, el
      establecimiento de criterios para la conservación de acuíferos, y la
      promoción de actividades de depuración y reutilización del agua, así como
      medidas para fomentar el ahorro del agua.
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
