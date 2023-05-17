/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#3485FE',
        'secondary': '#67A3FE',
        'terciary': '#CCE0FF',
        'darkBlue': '#001433'
      },
      height: {
        'panel': '50rem'
      },
      margin: {
        'boton': '28rem',
      },
      backgroundImage: {
        'backgroundPrimary': "url('https://images-ext-2.discordapp.net/external/mgdFka2m_F0hDwQ6GsJe5Ljs6ZWcxQuzcoOqiMHGy3E/%3Falt%3Dmedia%26token%3D56748177-1197-47f2-9338-990fe5f21de3/https/firebasestorage.googleapis.com/v0/b/proyecto-final-backend-f0580.appspot.com/o/background.png?width=301&height=651')"
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

