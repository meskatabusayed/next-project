"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Meals = () => {
  const [search, setSearch] = useState("a");
  const [error, setError] = useState("");
  const [meals, setMeals] = useState([]);
  

  const loadData = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`
      );
      const data = await res.json();
      setMeals(data.meals);
      setError("");
    } catch (error) {
      setError("No Data Found...");
    }
  };

  const handler = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  // useEffect(() => {
  //   loadData();
  // }, [search]);

  return (
    <div>
      <input onChange={handler} type="text" placeholder="search meals..." />
      <button
        onClick={() => loadData()}
        className="bg-blue-700 p-2 text-white rounded-md font-bold"
      >
        Search
      </button>
      <div className="mt-12 grid grid-cols-3 gap-6">
        { meals?.length > 0 && !error &&
          meals?.map((meal) => (
            <div key={meal.idMeal} className="border-2 p-4">
              <Image src={meal?.strMealThumb} alt={meal.strMeal} width={500} height={500}/>
              <h6>{meal.strMeal}</h6>
              <p>{meal.strInstructions}</p>
            </div>
          ))}
          {
            error && <h6>No data Found...</h6>
          }
      </div>
    </div>
  );
};

export default Meals;
