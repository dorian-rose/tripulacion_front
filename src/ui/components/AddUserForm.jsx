import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { consultation } from '../../api/fetch'

export const AddUserForm = () => {

  const [score, setScore] = useState(null);
  const navigate = useNavigate();

  //manage logout
  const logout = () => {
    // localStorage.removeItem("answers");
    // localStorage.removeItem("visited");
    // localStorage.removeItem("id");
    // localStorage.removeItem("email");
    localStorage.clear();
    navigate("/");
  };
  //capture text inputs with react hook
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  {
    mode: "all";
  }

  const sendUserInfo = (data) => {
    //send user info to fetch/db
  };

  const getScore = async () => {

    try {

      const userId = localStorage.getItem("id");

      if (userId) {

        const url = `https://h2ohback.onrender.com/api/v1/entries/${userId}`;
        const request = await consultation(url);
        const score = request.data.score
        if (!isNaN(score)) {
          setScore(score);
        }
      }

    } catch (error) {
      console.error(error);
    }
  }
  
  useEffect(() => {
    getScore();
  }, []);

  //prefill form with user data
  return (
    <form
      className="p-5 font-sans"
      onSubmit={handleSubmit((data) => sendUserInfo(data))}
    >
      <label className="text-sm ps-2 font-medium tracking-wide" htmlFor="name">
        Nombre
      </label>
      <input
        {...register("name", {
          required: "Inserte nombre",
          minLength: {
            value: 2,
            message: "Nombre tiene que tener al menos dos cáracteres",
          },
        })}
        type="text"
        placeholder="Nombre"
        name="name"
        id="name"
        className="mt-1 border border-form-border tracking-wide text-sm  placeholder:text-black px-3 h-10 bg-terciary focus:outline-none focus:border-2 focus:border-solid rounded-md w-full"
      />
      <p className="mb-4 font-thin italic text-emphasis">
        {errors.name?.message}
      </p>
      <label className="text-sm ps-2 font-medium tracking-wide" htmlFor="name">
        Apellido
      </label>
      <input
        {...register("surname", {
          required: "Inserte apellido",
          minLength: {
            value: 2,
            message: "Apellido tiene que tener al menos dos cáracteres",
          },
        })}
        type="text"
        placeholder="Apellido"
        name="surname"
        id="surname"
        className="mt-1 border border-form-border tracking-wide text-sm  placeholder:text-black px-3 h-10 bg-terciary focus:outline-none focus:border-2 focus:border-solid rounded-md w-full"
      />
      <p className="mb-4 font-thin italic text-emphasis">
        {errors.surname?.message}
      </p>
      <label className="text-sm ps-2 font-medium tracking-wide" htmlFor="name">
        Comunidad Autónoma
      </label>
      <select
        {...register("ccaa", { required: "Seleccione provincia" })}
        name="ccaa"
        id="ccaa"
        className="mt-1 border border-form-border tracking-wide text-sm   px-2 h-10 bg-terciary focus:outline-none focus:border-2 focus:border-solid rounded-md w-full"
      >
        <option value="">Comunidad Autónoma</option>
        <option value="andalucia">Andalucía</option>
        <option value="murcia">Murcia</option>
        <option value="extremadura">Extremadura</option>
        <option value="castillaLaManch">Castilla La Mancha</option>
        <option value="valencia">Comunidad Valenciana</option>
        <option value="castillaLeon">Castilla y León</option>
        <option value="madrid">Madrid</option>
        <option value="aragon">Aragón</option>
        <option value="catalunia">Cataluña</option>
        <option value="galicia">Galicia</option>
        <option value="asturias">Asturias</option>
        <option value="cantabria">Cantabria</option>
        <option value="paisVasco">País Vasco</option>
        <option value="laRioja">La Rioja</option>
        <option value="navarra">Navarra</option>
        <option value="baleares">Islas Baleares</option>
        <option value="canarias">Islas Canarias</option>
        <option value="ceuta">Ceuta</option>
        <option value="melilla">Melilla</option>
      </select>
      <p className="mb-4 font-thin italic text-emphasis">
        {errors.ccaa?.message}
      </p>
      <label className="text-sm ps-2 font-medium tracking-wide" htmlFor="name">
        Ciudad
      </label>
      <input
        {...register("city", {
          required: "Inserte ciudad",
        })}
        type="text"
        placeholder="Ciudad"
        name="city"
        id="city"
        className="mt-1 border border-form-border tracking-wide text-sm  placeholder:text-black px-3 h-10 bg-terciary focus:outline-none focus:border-2 focus:border-solid rounded-md w-full"
      />
      <p className=" font-thin italic text-emphasis">
        {errors.surname?.message}
      </p>
      <div className="mt-4 mb-20">
        <label className="text-sm ps-2 font-medium tracking-wide">
          Puntuación
        </label>
        <p type="text" placeholder="Aún no se ha obtenido un resultado" name="score" id="score"
          className="mt-1 pt-2 border border-form-border tracking-wide text-sm  placeholder:text-black px-3 h-10 bg-terciary focus:outline-none focus:border-2 focus:border-solid rounded-md w-full"
        >
          {score !== null ? score : 'Aún no se ha obtenido un resultado'}
        </p>
      </div>

      <button
        className="mb-5 bg-terciary text-emphasis w-full border border-emphasis px-3 h-10 rounded-2xl hover:outline-none hover:border-2 hover:border-solid"
        onClick={logout}
      >
        Cerrar sesión
      </button>
      <input
        className="mb-10 h-10 drop-shadow w-full bg-primary hover:bg-secondary text-white block  text-center m-auto  shadow-lg rounded-2xl"
        type="submit"
        value="Confirmar"
      />
    </form>
  );
};
