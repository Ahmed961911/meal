import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'


export default function Category() {

    let {catname} = useParams()

    const [meals, setmeals] = useState([])

    function getMeals(){
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${catname}`)
        .then((res)=>{
    setmeals(res.data.meals)  })
        .catch((res)=>{})
        }
    
      useEffect(()=>{
        getMeals()
        },[catname])


  return (
    <>
    <h1 className='mb-8 text-[ #DB5A45,#F19525] font-bold italic text-[2rem] font-serif'>Learn, Cook, Eat Your Food</h1>
    <div>
      <ul className='flex flex-wrap content-center items-center gap-6 border-b-[1px]'>
        <li className='border rounded-full px-4 py-2 hover:bg-white hover:drop-shadow-2xl'>
          <NavLink to="/" >
          All
          </NavLink>

        </li>
        <NavLink to="/category/Beef">
        <li className='border rounded-full px-4 py-2 hover:bg-white hover:drop-shadow-2xl'>
          Beef
        </li>
        </NavLink>

        <NavLink to="/category/Breakfast">
        <li className='border rounded-full px-4 py-2 hover:bg-white hover:drop-shadow-2xl'>
          Breakfast
        </li>
        </NavLink>
        <NavLink to="/category/Chicken">

        <li className='border rounded-full px-4 py-2 hover:bg-white hover:drop-shadow-2xl'>
          Chicken

        </li>
        </NavLink>
        <NavLink to="/category/Dessert">

        <li className='border rounded-full px-4 py-2 hover:bg-white hover:drop-shadow-2xl'>
          Dessert

        </li>
        </NavLink>
        <NavLink to="/category/Goat">

        <li className='border rounded-full px-4 py-2 hover:bg-white hover:drop-shadow-2xl'>
          Goat

        </li>
        </NavLink>
        <NavLink to="/category/Lamp">

        <li className='border rounded-full px-4 py-2 hover:bg-white hover:drop-shadow-2xl'>
          Lamp

        </li>
        </NavLink>
        <NavLink to="/category/Miscellaneous">

        <li className='border rounded-full px-4 py-2 hover:bg-white hover:drop-shadow-2xl'>
          Miscellaneous

        </li>
        </NavLink>
        <NavLink to="/category/Pasta">

        <li className='border rounded-full px-4 py-2 hover:bg-white hover:drop-shadow-2xl'>
          Pasta

        </li>
        </NavLink>
        <NavLink to="/category/Pork">

        <li className='border rounded-full px-4 py-2 hover:bg-white hover:drop-shadow-2xl'>
          Pork

        </li>
        </NavLink>
        <NavLink to="/category/Seafood"> 

        <li className='border rounded-full px-4 py-2 hover:bg-white hover:drop-shadow-2xl'>
          Seafood

        </li>
        </NavLink>
        <NavLink to="/category/Side">

        <li className='border rounded-full px-4 py-2 hover:bg-white hover:drop-shadow-2xl'>
          Side

        </li>
        </NavLink>
        <NavLink to="/category/Starter">

        <li className='border rounded-full px-4 py-2 hover:bg-white hover:drop-shadow-2xl'>
          Starter

        </li>
        </NavLink>
        <NavLink to="/category/Vegan">

        <li className='border rounded-full px-4 py-2 hover:bg-white hover:drop-shadow-2xl'>
          Vegan

        </li>
        </NavLink>
        <NavLink to="/category/Vegetarian">

        <li className='border rounded-full px-4 py-2 hover:bg-white hover:drop-shadow-2xl'>
          Vegetarian

        </li>
        </NavLink>

      </ul>
    </div>
    <div>
    </div>
    <div className='my-20 flex flex-wrap gap-y-14 gap-x-6 content-center items-center'>
    {meals?.map((meal)=>(<div key={meal.idMeal} className='bg-white h-[17.5rem] hover:scale-110 group relative w-[23%] pt-12 pb-2 px-12 rounded-3xl text-center'>
      <div className='absolute top-[-12%] left-[25%] size-32 bg-red-700 rounded-full '>
      <img className='w-full group-hover:rotate-[360deg] transition duration-700 rounded-full ' src={meal.strMealThumb} alt="" />
      </div>
      <h1 className='text-2xl mt-16 mb-1'>{meal.strMeal.split(" ").slice(0,2).join(" ")}</h1>
      
<Link to={`/mealdetails/${meal.idMeal}`}>
      <button className='rounded-full bg-emerald-500 px-12 py-2 my-1 font-semibold text-white'>View <br/> Recipe</button>
      </Link>
    </div>
 ))}
    </div>
    </>
    
  )
}
