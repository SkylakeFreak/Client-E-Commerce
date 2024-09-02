import React from 'react'

function Order() {
  return (
    <div className="flex flex-col items-center  justify-center w-full">
          <div className="bg-white outline outline-1 flex bg-opacity-50 flex-col items-center justify-center p-4 shadow-2xl h-[170px] w-[250px]">
            <div className="flex flex-col items-center justify-center">
            <p className="w-full text-xl font-medium">Check Orders</p>
            <input type="text" className="mt-2 outline outline-1 p-1" placeholder="Enter Order Number" />
            <div className="flex items-center justify-left mt-2 w-full">
            <button className="bg-black text-white p-2 m-1">Search</button>
            </div>
            
            </div>
           

          </div>

        </div>
  )
}

export default Order