import React from 'react'
import Menubuttons from './Menubuttons'

function Fixedbar() {
  return (
    <div className="w-full flex bg-gray-800 h-full top-0 flex-cols">
        
        <div className="hidden lg:flex w-full"><Menubuttons/>
        </div>
        <div className="w-full min-w-[150px] text-sm lg:w-[400px] flex items-center justify-end pr-2 lg:pr-0 lg:justify-center">
          <button className="h-10 p-2 font-medium rounded-sm bg-[#D6BD98] text-black">
            Request a Quote
          </button>
        </div>

      </div>
  )
}

export default Fixedbar