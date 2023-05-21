import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../../hooks/useLoginForm";

export const LoginForm = () => {
  const { loading, error, login } = useLogin();

  const handleLogin = async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    await login(email.value, password.value);
  };

  const handleProviderLogin = async (provider) => {
    await login("", "", provider);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-backgroundPrimary">
      <div className="flex flex-col items-center justify-center my-2">
        <img
          src="https://dorian-rose.github.io/politicas_azules_logo/politicas_azules_logo.png"
          className="h-auto w-1/3 md:w-1/6"
          alt="Logo"
        />
      </div>

      <form
        className="p-5 font-sans flex flex-col items-center my-2 w-full sm:w-3/4 md:w-2/3 lg:w-1/2"
        onSubmit={handleLogin}
      >
        <h3 className="font-sans flex flex-col my-2 w-full">Inicia sesión</h3>
        <input
          type="email"
          placeholder="Email"
          name="email"
          id="email"
          className="mt-1 border border-form-border tracking-wide text-sm placeholder:text-black px-3 h-10 bg-gray-200 focus:outline-none focus:border-2 focus:border-solid rounded-md w-full"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          id="password"
          className="mt-1 border border-form-border tracking-wide text-sm placeholder:text-black px-3 h-10 bg-gray-200 focus:outline-none focus:border-2 focus:border-solid rounded-md w-full"
        />

        {error && <p className="mb-2 text-red-500">{error}</p>}

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-full sm:w-3/4 md:w-2/3 lg:w-1/2 my-2"
        >
          {loading ? "Cargando..." : "Iniciar sesión"}
        </button>
      </form>

      <div className="flex flex-col items-center justify-center my-2">
        <p>
          No tienes una cuenta?{" "}
          <Link to="/signup" className="text-blue-500 hover:text-blue-600">
            Regístrate
          </Link>
        </p>
        <p>O ingresa con</p>
        <div className="flex mt-2 space-x-2">
          <button
            type="button"
            onClick={() => handleProviderLogin("google")}
            className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-200"
          >
            <img
              src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png"
              alt="Google"
              className="w-3 h-3"
            />
          </button>
          <button
            type="button"
            onClick={() => handleProviderLogin("facebook")}
            className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-200"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/640px-Facebook_Logo_%282019%29.png"
              alt="Facebook"
              className="w-3 h-3"
            />
          </button>
          <button
            type="button"
            onClick={() => handleProviderLogin("apple")}
            className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-200"
          >
            <img
              src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c516.png"
              alt="Apple"
              className="w-3 h-3"
            />
          </button>
        </div>
      </div>
    </div>
  );
};
