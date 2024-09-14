import React from 'react'

function Menubuttons() {
  return (
    <div className='flex lg:w-full justify-center'>
         <div className="lg:flex lg:w-full text-white p-1 lg:h-full gap-10 text-lg lg:items-center lg:justify-center">
          
          <p className=" p-2 m-1 hover:cursor-pointer w-auto duration-100 shadow-2xl text-2xl">Home</p>
          <p className=" p-2 m-1 shadow-2xl text-2xl ">About Us</p>
          <p className=" p-2 m-1 shadow-2xl text-2xl">Product</p>
          <p className=" p-2 m-1  shadow-2xl text-2xl">Contact Us</p>
          <p className=" p-2 m-1  shadow-2xl text-2xl">Inquiry</p>
        </div>

    </div>
  )
}

export default Menubuttons