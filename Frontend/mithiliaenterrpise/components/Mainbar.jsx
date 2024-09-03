"use client";
import React, { useState, useRef, useEffect } from "react";
import Img1 from "../public/bg.jpg";
import Image from "next/image";
import Menubuttons from "./Menubuttons";
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

      <div className="flex flex-row h-20 relative z-40   ">
        {!open && (
          <div className="h-20 ml-4 justify-center flex lg:hidden items-center">
            <img
              onClick={() => {
                setopen(true);
                setopen1(true);
              }}
              className="hover:rotate-90 transition-all duration-200 hover:cursor-pointer w-[45px] h-[40px]"
              src="https://img.icons8.com/external-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto/64/external-menu-multimedia-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto-2.png"
              alt="external-menu-multimedia-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto-2"
            />
            <p className="text-black p-1">
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
      <div className="text-black relative z-20 w-full font-sans justify-center flex flex-col items-center">
        <div className="flex flex-row gap-x-10 ml-20 mr-20 mt-20">
          <div className="flex flex-col w-full gap-y-2">
            <p className="text-4xl">
              <span className="text-5xl">W</span>e are Manufacturing products
              with world class Quality
            </p>
            <p className="text-lg md:w-[700px] mt-2">
              Our Offered Products are highly acclamined in the market for their
              Precise Processing, fine finish and Tear Resistance
            </p>
          </div>
          <div className="hidden lg:flex">
            <Order />
          </div>
        </div>
        <div className="h-full flex items-center justify-center w-full md:mt-5">
          <Imagecontainer/>
        </div>
      </div>

      <Image
        src={Img1}
        className="h-screen object-cover w-full min-h-[900px] absolute z-10 top-0"
        alt=""
      />
    </div>
  );
}

export default Mainbar;
