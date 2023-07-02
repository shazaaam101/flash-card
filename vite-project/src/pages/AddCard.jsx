import React, { useRef } from "react";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import "../styles/add-card.css";
import { db } from "../firebase-config";
const AddCard = () => {
  const categoryRef = useRef();
  const questionRef = useRef();
  const answerRef = useRef();
  const collectionRef = collection(db, "cards");

  const handleAddCard = async (e) => {
    e.preventDefault();
    const category_id = categoryRef.current.value.toLowerCase();
    const title = document.querySelector(".add-card-title");
    try {
      title.classList.add("completed");
      setTimeout(() => {
        title.classList.remove("completed");
      }, 1000);
      await setDoc(doc(collectionRef, category_id), {
        category: category_id,
      });
      await addDoc(collection(db, `cards/${category_id}/children`), {
        question: questionRef.current.value,
        answer: answerRef.current.value,
      });

      categoryRef.current.value = "";
      questionRef.current.value = "";
      answerRef.current.value = "";
    } catch (err) {
      console.error("Error at add card:", err);
    }
  };

  return (
    <div className="add-card">
      <header>
        <h1 className="add-card-title">ADD CARD</h1>
      </header>
      <form className="form" onSubmit={handleAddCard}>
        <div className="input-field">
          <label htmlFor="category">Category:</label>
          <input
            id="category"
            type="text"
            placeholder="ex. country"
            ref={categoryRef}
            required
          />
        </div>
        <div className="input-field">
          <label htmlFor="question">Question:</label>
          <input
            id="question"
            type="text"
            placeholder="ex. What is the biggest animal?"
            ref={questionRef}
            required
          />
        </div>
        <div className="input-field">
          <label htmlFor="answer">Answer:</label>
          <input
            id="answer"
            type="text"
            placeholder="ex. Blue whale"
            ref={answerRef}
            required
          />
        </div>
        <button type="submit">ADD</button>
      </form>
    </div>
  );
};

export default AddCard;
