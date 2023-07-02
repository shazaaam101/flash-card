import React, { useEffect, useState } from "react";
import "../styles/play.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import Category from "../components/Category";
import { useNavigate } from "react-router-dom";

const Play = () => {
  const collectionRef = collection(db, "cards");
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const getAllCategories = async () => {
      try {
        setIsLoading(true);
        const querySnapshot = await getDocs(collectionRef);
        const data = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setCategories(data);
        setIsLoading(false);
        console.log("category", data);
      } catch (err) {
        console.error("Error at get categories: ", err);
      }
    };
    getAllCategories();
  }, []);

  const handleClickCategory = (category) => {
    //Move to ./category/
    navigate(`./${category}`);
  };

  return (
    <div className="play">
      {isLoading && <h2 className="loading">Loading . . .</h2>}
      <div className="wrapper-categories">
        {categories?.map((c) => (
          <Category
            key={c.id}
            category={c.category}
            callback={() => handleClickCategory(c.category)}
          />
        ))}
      </div>
    </div>
  );
};

export default Play;
