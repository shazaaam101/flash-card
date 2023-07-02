import React, { useEffect, useState } from "react";
import "./flash.css";
const Flash = ({ question, answer, callbackNextQuestion, setCorrectScore }) => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  console.log("RENDER", isCorrect, isSubmit);
  // useEffect(() => {
  //   console.log("ONMOUNT");
  // }, [isCorrect, isSubmit]);
  const handleSubmitAnswer = (e) => {
    e.preventDefault();
    const myAnswer = e.target.answer.value;
    setIsSubmit(true);
    //check answer

    if (myAnswer.toLowerCase() === answer.toLowerCase()) {
      setIsCorrect(true);
      setCorrectScore((prev) => prev + 1);
      console.log("TRUE");
    }
    setTimeout(() => {
      setIsSubmit(false);
      callbackNextQuestion();
    }, 2500);
  };
  if (isSubmit && isCorrect) {
    console.log("HI");
    return (
      <div className="flash correct">
        <h1>
          NICE!<i className="icon fa-sharp fa-solid fa-circle-check"></i>
        </h1>
        <div className="timeout-bar-wrapper">
          <div className="timeout-bar"></div>
        </div>
      </div>
    );
  }
  if (isSubmit && !isCorrect) {
    return (
      <div className="flash wrong">
        <h1>
          WRONG<i className="icon fa-solid fa-circle-xmark"></i>
        </h1>
        <p>Answer: {answer}</p>
        <div className="timeout-bar-wrapper">
          <div className="timeout-bar"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="flash">
      <form onSubmit={handleSubmitAnswer}>
        <label htmlFor="answer" className="question">
          Q: {question}
        </label>
        <input
          name="answer"
          id="answer"
          type="text"
          placeholder="Your answer . . ."
        />
      </form>
    </div>
  );
};

export default Flash;
