import React from "react";
import gota from "../../assets/gota.png";

export const AssistantPage = () => {
  return (
    <div className="py-16">
      <article className="border border-white drop-shadow w-3/4 bg-secondary/80 text-white block m-auto  pt-6 pb-48 px-8 shadow-lg rounded-lg">
        <p className="text-center">
          ¡Bienvenido/a a nuestra plataforma sobre políticas azules! Aquí
          encontrarás información y recursos para aumentar tu concienciación
          sobre este tema. Explora preguntas frecuentes y descubre cómo puedes
          contribuir a la conservación de nuestros océanos y recursos marinos.
          ¡Únete a nosotros y hagamos del mundo un lugar más azul!
        </p>
      </article>
      <img className="relative -top-48 block m-auto" src={gota} alt="logo" />
      <button className="relative  -top-44 drop-shadow w-11/12 bg-secondary text-white block  mb-10 text-center m-auto py-4 shadow-lg rounded-3xl">
        Siguiente
      </button>

      {/* transform-rotate-10 */}
    </div>
  );
};
