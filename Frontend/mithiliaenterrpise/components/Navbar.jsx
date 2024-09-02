import React from "react";

function Front() {
  return (
    <div className="w-full text-xs sm:text-sm md:text-md h-[110px]  md:h-[80px] flex items-center justify-center font-sans">
      <div className="h-[110px]  md:h-[80px] flex flex-col md:flex-row w-full p-2  bg-[#1A3636]">
      <div className="w-full h-full flex flex-col xl:flex-row items-center justify-center gap-1 xl:gap-10 text-white">
        <div className="flex items-center justify-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
            />
          </svg>

          <p>+91 9999999999</p>
        </div>
        <div className="flex items-center justify-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>
          <p>167-168, Devraj Industrial Estate, Ahmedabad</p>
        </div>
      </div>
      <div className="w-full flex h-full items-center gap-4 justify-center">
      <img  className="w-[30px] h-[30px] hover:w-[40px] hover:h-[40px] xl:w-[40px] xl:h-[40px] xl:hover:w-[50px] xl:hover:h-[50px] hover:cursor-pointer transform  duration-75" src="https://img.icons8.com/glyph-neue/64/FFFFFF/youtube-play.png" alt="youtube-play"/>
        <img className="w-[30px] h-[30px] hover:w-[40px] hover:h-[40px] xl:w-[40px] xl:h-[40px] xl:hover:w-[50px] xl:hover:h-[50px] hover:cursor-pointer transform  duration-75" src="https://img.icons8.com/ios-filled/50/FFFFFF/twitterx--v1.png" alt="twitterx--v1"/>
        <img  className="w-[30px] h-[30px] hover:w-[40px] hover:h-[40px] xl:w-[40px] xl:h-[40px] xl:hover:w-[50px] xl:hover:h-[50px] hover:cursor-pointer transform  duration-75" src="https://img.icons8.com/glyph-neue/64/FFFFFF/instagram-new--v1.png" alt="instagram-new--v1"/>
  
        <img className="w-[30px] h-[30px] hover:w-[40px] hover:h-[40px] xl:w-[40px] xl:h-[40px] xl:hover:w-[50px] xl:hover:h-[50px] hover:cursor-pointer transform  duration-75" src="https://img.icons8.com/glyph-neue/64/FFFFFF/facebook.png" alt="facebook"/>
      </div>
      
    </div>

    </div>
    
  );
}

export default Front;
