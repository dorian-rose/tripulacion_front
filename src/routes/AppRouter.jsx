import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  HomePage,
  IntroPage,
  AssistantPage,
  UserProfilePage,
  LoginPage,
  SignupPage,
  MapPage,
} from "../ui/pages";
import {
  QuestionPage,
  FeedbackPage,
  FinalResultPage,
} from "../questions/pages";
import { GraphicPage } from "../graphic/components/pages/GraphicPage";
import { UserRouter } from "./UserRouter";
import { AuthRouter } from "./AuthRouter";

export const AppRouter = () => {
  const [logged, setLogged] = useState(null);
  const user = localStorage.getItem("id");

  useEffect(() => {
    console.log("in use effect");
    setLogged(user);
  }, [user, !logged]);

  console.log(logged);
  return (
    <>
      <Routes>
        {user && <Route path="/*" element={<UserRouter />} />}
        {!user && <Route path="/*" element={<AuthRouter />} />}
      </Routes>
    </>
  );
};
