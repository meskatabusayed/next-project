"use client"
import React, { useEffect, useState }  from 'react'

const Meals = () => {
  const [search , setSearch] = useState("");
  const [meals , setMeals] = useState([]);

  const loadData = async() => {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`);
    const data = res.json();
    setMeals(data.meals);
  }

  const handler = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);


  }

  // useEffect(() => {
  //    loadData();
  // } , [search]);
  
  return (
    <div>
      <input 
      onChange={handler}
      type="text" placeholder='search meals...'/>
      <button className='bg-blue-700 p-2 text-white rounded-md font-bold'>Search</button>
    </div>
  )
}

export default Meals;
