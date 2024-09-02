import React from 'react'

function Menubuttons() {
  return (
    <div className='flex lg:w-full justify-center'>
         <div className="lg:flex lg:w-full text-white p-1 lg:text-black lg:h-full gap-10 text-lg lg:items-center lg:justify-center">
          
          <p className=" p-2 m-1  hover:translate-x-1 hover:translate-y-1 border-b-2 border-r-2 lg:border-b-4 lg:border-r-4 hover:border-0 lg:border-black border-white outline-white lg:outline-black hover:cursor-pointer w-auto duration-100 shadow-2xl text-xl">Home</p>
          <p className=" p-2 m-1 hover:translate-x-1 hover:translate-y-1 border-b-2 border-r-2 lg:border-b-4 lg:border-r-4 hover:border-0 lg:border-black border-white outline-white lg:outline-black hover:cursor-pointer w-auto duration-100 shadow-2xl text-xl ">About Us</p>
          <p className=" p-2 m-1 hover:translate-x-1 hover:translate-y-1 border-b-2 border-r-2 lg:border-b-4 lg:border-r-4 hover:border-0 lg:border-black border-white outline-white lg:outline-black hover:cursor-pointer w-auto duration-100 shadow-2xl text-xl">Product</p>
          <p className=" p-2 m-1 hover:translate-x-1 hover:translate-y-1 border-b-2 border-r-2 lg:border-b-4 lg:border-r-4 hover:border-0 lg:border-black border-white outline-white lg:outline-black hover:cursor-pointer w-[120px] lg:w-auto duration-100 shadow-2xl text-xl">Contact Us</p>
          <p className=" p-2 m-1 hover:translate-x-1 hover:translate-y-1 border-b-2 border-r-2 lg:border-b-4 lg:border-r-4 hover:border-0 lg:border-black border-white outline-white lg:outline-black hover:cursor-pointer w-auto duration-100 shadow-2xl text-xl">Inquiry</p>
        </div>

    </div>
  )
}

export default Menubuttons