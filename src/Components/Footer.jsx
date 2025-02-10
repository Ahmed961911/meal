import React from 'react'
import logo from '../assets/logo.png'




export default function Footer() {
  return (
    <>
    <div className='bg-white relative bottom-0 left-0 right-0 z-40 px-14'>

   
    <div className=' border-dotted border-b-[1px] flex content-between items-center py-6'>
        <div className='flex content-center items-center'>
            <a href="" className='flex content-center items-center gap-3 text-black'>
                <div className='w-[3.5%]'>
                <img src={logo} alt="" className='w-full'/>
                </div>
                <h3 className='font-bold italic text-[1.6rem]'>Recipe</h3>
            </a>

        </div>
        <div>
            <h2 className='text-[1.8rem] font-bold italic text-blue-600'>Route</h2>
        </div>

    </div>
    <div className=' text-center text-sm font-semibold text-gray-500 py-8'>
    <p>© 2025 Nagy Osama™. All Rights Reserved.</p>
    </div>
    </div>
    </>
  )
}
