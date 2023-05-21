import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { consultation } from "../../api/fetch";

export const FinalFeedback = () => {
  const [userAnswers, setUserAnswers] = useState("");
  const [counter, setCounter] = useState(0);
  //collect current answers state
  const { answersObject } = useSelector((state) => state.answers);
  //collect current visited pages state
  const { visitedObject } = useSelector((state) => state.visited);

  useEffect(() => {
    setUserAnswers({ ...answersObject });
  }, []);

  //correct answers
  const answers = {
    question1: "option1",
    question2: "option2",
    question3: "option4",
    question4: "option2",
  };

  //calculate score
  useEffect(() => {
    for (const key in answers) {
      if (userAnswers[key] === answers[key]) {
        setCounter((previousNumber) => previousNumber + 1);
      }
    }
  }, [userAnswers]);

  //define arguments for fetch
  const url = import.meta.env.VITE_RESULT_URL;
  const method = "POST";
  const body = {
    questions: { ...answersObject },
    status: { ...visitedObject },
  };
  console.log(body);
  //call fetch to send result data
  useEffect(() => {
    consultation(url, method, body);
  }, []);

  return <p>{`final result: Acertaste ${counter} preguntas!`}</p>;
};
