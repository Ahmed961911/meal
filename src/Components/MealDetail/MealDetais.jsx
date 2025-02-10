import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'


export default function MealDetais() {
    let {id} = useParams()

    const [Meal, setMeal] = useState([])
const [ingrediants, setingrediants] = useState([{}])




   async function getMeal(id){
      await  axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((res)=>{
            setMeal(res.data.meals[0])
            setingrediants([{"ing":res.data.meals[0].strIngredient1,"mes":res.data.meals[0].strMeasure1},
                {"ing":res.data.meals[0].strIngredient2,"mes":res.data.meals[0].strMeasure2},
                {"ing":res.data.meals[0].strIngredient3,"mes":res.data.meals[0].strMeasure3},
                {"ing":res.data.meals[0].strIngredient4,"mes":res.data.meals[0].strMeasure4},
                {"ing":res.data.meals[0].strIngredient5,"mes":res.data.meals[0].strMeasure5},
                {"ing":res.data.meals[0].strIngredient6,"mes":res.data.meals[0].strMeasure6},
                {"ing":res.data.meals[0].strIngredient7,"mes":res.data.meals[0].strMeasure7},
                {"ing":res.data.meals[0].strIngredient8,"mes":res.data.meals[0].strMeasure8},
                {"ing":res.data.meals[0].strIngredient9,"mes":res.data.meals[0].strMeasure9},
                ])
console.log(ingrediants);
        })
        .catch((res)=>{
      
        })
      }

      


     useEffect(()=>{
        getMeal(id);
      },[])





  return (
    <>
     <div className='flex flex-wrap gap-6 mb-5'>
        <div className='lg:w-[60%] sm:w-[100%] '>
<h1 className='text-5xl font-bold'>{Meal?.strMeal}</h1>
<div className='flex flex-wrap gap-8 content-center '>
<div className='lg:w-[45%] sm:w-[100%]'>
    <img src={Meal?.strMealThumb} className='rounded-xl mt-4 w-full' alt="" />

<div className='mt-8 flex gap-4 '>
<button onClick={()=>window.open(Meal?.strYoutube, '_blank')} className='flex gap-3 px-4 py-2 rounded-lg text-white bg-red-500 items-center'>
<i className="fa-brands fa-youtube"></i>
            <h2>Youtube</h2>
    </button>
    <button onClick={()=>window.open(Meal?.strSource, '_blank')} className='flex gap-3 px-4 py-2 rounded-lg text-white bg-emerald-500 items-center'>
    <i className="fa-solid fa-globe"></i>
            <h2>Source</h2>
    </button>
</div>

        </div>
        <div className='lg:w-[45%] sm:w-[100%] mt-4'>
            <p>{Meal?.strInstructions}</p>
        </div>
        </div>
        </div>
        
<div className='w-[30%] bg-white rounded-xl px-3 ms-6 pt-6 h-full'>
 <h2 className='text-3xl font-bold pb-2 border-b-4 border-[#E5E7EB] font-serif mb-6'>Ingredients</h2>
 {ingrediants?.map((eng)=>(eng.ing? <div key={eng.ing} className='flex flex-wrap content-between gap-x-10 pb-2 mb-4 border-b-2 border-[#E5E7EB]'>
    <span className='w-[40%]'>{eng.ing}:</span>
<span className='text-right w-[40%]'>{eng.mes}</span>
</div>:null))}

        </div>
    </div> 
    </>
  )
}
