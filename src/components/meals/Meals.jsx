import React, { useEffect, useState } from "react";

import axios from "axios";
import "./Meals.css";

function Meals() {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((response) => {
        // console.log(response.data.meals);
        setMeals(response.data.meals);
      })
      .catch((err) => console.error(err));
  }, []);
  const itemList =
    meals.length > 0 ? (
      meals.map((meal) => {
        const { idMeal, strMeal, strMealThumb } = meal;
        return (
          <section key={idMeal} className="card">
            <img src={strMealThumb} alt="Start Meal Image" />
            <section className="content">
              <p>{strMeal}</p>
              <p>#{idMeal}</p>
            </section>
          </section>
        );
      })
    ) : (
      <h3>No meal data found</h3>
    );

  return (
    <div className="container">
      <h1>My Meal Lists</h1>
      <div className="items-container">{itemList}</div>
    </div>
  );
}

export default Meals;
