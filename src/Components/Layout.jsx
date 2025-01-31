import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';


export default function Layout() {
  return (
    <>
    <Navbar />
    <div className=' lg:ml-52 lg:px-20 lg:pt-12 sm:ml-0 sm:px-10 sm:pt-4'>
<Outlet />
</div>


    <Footer />
    </>
  )
}
