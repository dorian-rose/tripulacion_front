import { Routes, Route, Navigate } from "react-router-dom";
import { AssistantPage, HomePage } from "../ui/pages/index";
export const AppRouter = () => {
  //logica de si es logueado
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/welcome" element={<AssistantPage />} />
        <Route path="/*" element={<Navigate to={"/"} />} />
      </Routes>
    </>
  );
};
