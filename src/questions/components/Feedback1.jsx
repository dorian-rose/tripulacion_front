import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const Feedback1 = () => {
  //collect current answers state
  const { answersObject } = useSelector((state) => state.answers);
  // if (answersObject.question1 == "option2") {
  return (
    <p className="text-center mx-4 relative top-1/2 -translate-y-1/2">
      Las políticas del agua abordan una amplia gama de temas relacionados con
      la gestión del agua, como la planificación y desarrollo de
      infraestructuras hidráulicas, la protección de los ecosistemas acuáticos,
      la conservación del agua, la gestión de la sequía y las inundaciones, la
      promoción de la eficiencia en el uso del agua.
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
