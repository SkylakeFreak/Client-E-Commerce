import React from "react";
import Image from "next/image";
import img1 from "../public/sce11.jpg";

function First() {
  return (
    <div className="bg-gradient-to-r from-white to-white/0 h-auto p-5 lg:flex font-sans lg:flex-row">


      <div className="flex w-auto min-w-[300px] items-center justify-center gap-2">
        <Image className="h-20 w-20" src={img1} alt="Description of image" />
        <p className="font-sans text-2xl"><span className="text-3xl">M</span>ithilia Enterprise</p>
      </div>



      <div className="flex w-full items-center justify-center gap-5">
        <div className="flex gap-1">
          <img
          className="h-10 w-10"
            src="https://img.icons8.com/badges/48/rubber-stamp.png"
            alt="rubber-stamp"
          />
          <div className="flex flex-col">
            <p>Certified Company</p>
            <p className="text-gray-500 font-bold ml-1 text-xs">ISO 9001:2005</p>
          </div>
        </div>
        <div className="flex">
          <img
          className="h-10 w-10"
            src="https://img.icons8.com/isometric-line/50/trophy.png"
            alt="trophy"
          />
          <div className="flex flex-col">
            <p>The Best Industrial</p>
            <p className="text-gray-500 font-bold ml-1 text-xs">Solution Provider</p>
          </div>
        </div>
      </div>


      <div className="flex mt-5 w-auto lg:w-[500px] items-center hover:cursor-pointer justify-center">
        <div className="bg-red-700  peer p-2 h-[50px] flex items-center justify-center"><img width="30" height="30" src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/FFFFFF/external-download-interface-kiranshastry-solid-kiranshastry.png" alt="external-download-interface-kiranshastry-solid-kiranshastry"/></div>
        <button className="w-40 h-[50px] peer-hover:translate-x-2 peer-hover:bg-black bg-gray-800 hover:bg-black translate-x-0 transition-transform duration-500 text-white">Downloads</button>
        
      </div>


    </div>
  );
}

export default First;
