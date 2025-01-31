import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';


export default function Home() {
const [meals, setmeals] = useState([])

function getMeals(){
    axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=")
    .then((res)=>{
setmeals(res.data.meals)  })
    .catch((res)=>{})
    }

  useEffect(()=>{
    getMeals()
    },[])

  
  return (
    <>
    <h1 className='mb-8 text-[ #DB5A45,#F19525] font-bold italic text-[2rem] font-serif'>Learn, Cook, Eat Your Food</h1>
    <div>
      <ul className='flex flex-wrap content-center items-center gap-6 border-b-[1px]'>
      <NavLink to="" >
        <li className='border rounded-full px-4 py-2 hover:bg-white hover:drop-shadow-2xl'>
       
          All
      
        </li>
        </NavLink>
        
        <li className='border rounded-full px-4 py-2 hover:bg-white hover:drop-shadow-2xl'>
          <NavLink to="category/Beef">
          Beef
          </NavLink>

        </li>
        <li className='border rounded-full px-4 py-2 hover:bg-white hover:drop-shadow-2xl'>
          <NavLink to="category/Breakfast">
          Breakfast
          </NavLink>

        </li>
        <li className='border rounded-full px-4 py-2 hover:bg-white hover:drop-shadow-2xl'>
          <NavLink to="category/Chicken">
          Chicken
          </NavLink>

        </li>
        <li className='border rounded-full px-4 py-2 hover:bg-white hover:drop-shadow-2xl'>
          <NavLink to="category/Dessert">
          Dessert
          </NavLink>

        </li>
        <li className='border rounded-full px-4 py-2 hover:bg-white hover:drop-shadow-2xl'>
          <NavLink to="category/Goat">
          Goat
          </NavLink>

        </li>
        <li className='border rounded-full px-4 py-2 hover:bg-white hover:drop-shadow-2xl'>
          <NavLink to="category/Lamp">
          Lamp
          </NavLink>

        </li>
        <li className='border rounded-full px-4 py-2 hover:bg-white hover:drop-shadow-2xl'>
          <NavLink to="category/Miscellaneous">
          Miscellaneous
          </NavLink>

        </li>
        <li className='border rounded-full px-4 py-2 hover:bg-white hover:drop-shadow-2xl'>
          <NavLink to="category/Pasta">
          Pasta
          </NavLink>

        </li>
        <li className='border rounded-full px-4 py-2 hover:bg-white hover:drop-shadow-2xl'>
          <NavLink to="category/Pork">
          Pork
          </NavLink>

        </li>
        <li className='border rounded-full px-4 py-2 hover:bg-white hover:drop-shadow-2xl'>
          <NavLink to="category/Seafood"> 
          Seafood
          </NavLink>

        </li>
        <li className='border rounded-full px-4 py-2 hover:bg-white hover:drop-shadow-2xl'>
          <NavLink to="category/Side">
          Side
          </NavLink>

        </li>
        <li className='border rounded-full px-4 py-2 hover:bg-white hover:drop-shadow-2xl'>
          <NavLink to="category/Starter">
          Starter
          </NavLink>

        </li>
        <li className='border rounded-full px-4 py-2 hover:bg-white hover:drop-shadow-2xl'>
          <NavLink to="category/Vegan">
          Vegan
          </NavLink>

        </li>
        <li className='border rounded-full px-4 py-2 hover:bg-white hover:drop-shadow-2xl'>
          <NavLink to="category/Vegetarian">
          Vegetarian
          </NavLink>

        </li>
      </ul>
    </div>
    <div className='my-20 flex flex-wrap gap-y-14 gap-x-6 content-center items-center'>
    {meals?.map((meal)=>(<div key={meal.idMeal} className='bg-white relative w-[23%] group pt-12 pb-2 px-12 rounded-3xl text-center hover:scale-110 hover:drop-shadow-lg'>
      <div className='absolute top-[-12%] left-[25%] size-32 bg-red-700 rounded-full  '>
      <img className='w-full rounded-full group-hover:rotate-[360deg] transition duration-700' src={meal.strMealThumb} alt="" />
      </div>
      <h1 className='text-2xl mt-16 mb-1'>{meal.strMeal}</h1>
      <div className='flex content-center items-center gap-2  mb-4 ps-5'>
      <i className="fa-solid fa-earth-europe text-emerald-600 "></i>    
          <h2 className='text-emerald-600 font-semibold'>{meal.strArea}</h2>
      </div>
<Link to={`mealdetails/${meal.idMeal}`}>
      <button className='rounded-full bg-emerald-500 px-12 py-2 my-1 font-semibold text-white'>View <br/> Recipe</button>
      </Link>
    </div>
 ))}
    </div>
    </>
  )
}
