"use client";
import React, { useState, useRef, useEffect } from "react";
import Img1 from "../public/bg.jpg";
import img2 from "..//public/gb2.jpg"
import Image from "next/image";
import Menubuttons from "./Menubuttons";
import Aboutus from "./Aboutus";
import Order from "./Order";
import Fixedbar from "./Fixedbar";
import Imagecontainer from "./Imagecontainer";

function Mainbar() {
  const [upperhide, setupperhide] = useState(false);
  const [open, setopen] = useState(false);
  const [open1, setopen1] = useState(false);
  const click = () => {
    var current = document.documentElement.scrollTop || document.body.scrollTop;
    if (current >= 200) {
      setupperhide(true);
    } else {
      setupperhide(false);
    }
    console.log(current);
  };
  useEffect(() => {
    const handleScroll = () => {
      click();
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="  text-white font-sans h-screen relative">
      {upperhide && (
        <div className="text-black bg-[#E2DFD0] animate-slideDown top-0 z-30 w-full fixed h-auto text-2xl">
          <div className="hidden lg:flex">
            <Fixedbar />
          </div>
        </div>
      )}

      {open && (
        <div
          className={`bg-black lg:hidden h-auto  ${
            !open1 ? "animate-slideUp" : "animate-slideDown"
          } transform w-full fixed top-0 z-30`}
        >
          <img
            onClick={() => {
              if (open === true) {
                setopen1(false);
                setTimeout(() => {
                  setopen(false);
                }, 990);
              }
            }}
            className="p-2 hover:cursor-pointer hover:rotate-90 transition-allpb-2 duration-200"
            width="50"
            height="50"
            src="https://img.icons8.com/ios/50/FFFFFF/multiply-2.png"
            alt="multiply-2"
          />
          <div className="flex flex-row items-end justify-between p-1">
            <Menubuttons />
            <div className=" mb-2 mr-2">
              <Order />
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-row h-20 bg-gray-800 relative z-40   ">
        {!open && (
          <div className="h-20 ml-4 w-[110px] justify-center flex lg:hidden items-center">
            <img
              onClick={() => {
                setopen(true);
                setopen1(true);
              }}
              className="hover:rotate-90 transition-all duration-200 hover:cursor-pointer w-[45px] h-[40px]"
              src="https://img.icons8.com/ios-filled/50/FA5252/circled-menu.png"
              alt="external-menu-multimedia-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto-2"
            />
            <p className="text-white p-1">
              <span className="font-bold text-lg">M</span>enu
            </p>
          </div>
        )}
        {!upperhide && (
          <div className="lg:bg-white w-full h-full flex items-center justify-center lg:bg-opacity-50">
            <Fixedbar />
          </div>
        )}
      </div>
      <div className="text-black absolute top-0 z-20 w-full font-sans h-full flex flex-col items-center">
        <Aboutus/>

     
        
        
      </div>

    </div>
  );
}

export default Mainbar;
