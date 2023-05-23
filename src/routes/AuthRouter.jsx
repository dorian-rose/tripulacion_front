import { Routes, Route, Navigate } from "react-router-dom";
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

export const AuthRouter = () => {
  const user = localStorage.getItem("id");
  console.log(user);
  return (
    <Routes>
      <Route path="/" element={<IntroPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};
