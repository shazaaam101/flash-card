import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../firebase-config";
import Flash from "../components/Flash";
import arrayShuffle from "array-shuffle";
import "../styles/flash-card.css";
const FlashCard = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const collectionRef = collection(db, `cards/${category}/children`);
  const [flash, setFlash] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [correctScore, setCorrectScore] = useState(0);
  const [index, setIndex] = useState(0);
  const flashLength = flash.length;

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const querySnapshot = await getDocs(collectionRef);
        //raw data
        const data = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        //shuffle data
        setFlash(arrayShuffle(data));
        setIsLoading(false);
        console.log("flash: ", data);
        console.log("shuffle flash: ", arrayShuffle(data));
      } catch (err) {
        console.error("Error at get data in category: ", err);
      }
    };
    getData();
  }, []);

  const nextQuestion = () => {
    setIndex((prev) => (prev < flashLength ? prev + 1 : prev));
  };

  return (
    <div className="flash-card">
      <header>
        <h1>
          {category}{" "}
          {index < flashLength && (
            <span>
              &#40;{index}/{flashLength}&#41;
            </span>
          )}
        </h1>
      </header>
      {isLoading && <h2 className="loading">Loading . . .</h2>}
      {index < flashLength
        ? !isLoading && (
            <Flash
              question={flash[index]?.question}
              answer={flash[index]?.answer}
              callbackNextQuestion={nextQuestion}
              setCorrectScore={setCorrectScore}
            />
          )
        : !isLoading && (
            <div className="summary">
              <h2>
                Your score: {correctScore}/{flashLength}
              </h2>
              <button className="back-btn" onClick={() => navigate("/play")}>
                Go back
              </button>
            </div>
          )}
    </div>
  );
};

export default FlashCard;
