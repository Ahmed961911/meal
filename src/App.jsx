import { useState } from 'react'
import './App.css'
import Home from './Components/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout';
import Category from './Components/Category/Category';
import MealDetais from './Components/MealDetail/MealDetais';


let x = createBrowserRouter([
{path:"",element: <Layout />,children:[
  {index:true,element:<Home />},
  {path:"category/:catname",element:<Category />},
  {path:"mealdetails/:id",element:<MealDetais/>}
]},

])

function App() {

  return (
    <>
    <div className=' absolute left-0 right-0  bg-[#F4F2EE]'>
     <RouterProvider router={x}></RouterProvider>
     </div>
    </>
  )
}

export default App
