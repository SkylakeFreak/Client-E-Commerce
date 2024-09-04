import React from 'react';
import Image from 'next/image';
import img1 from '../public/linearbag1.png';
import img2 from '../public/carrybag.png';
import img3 from "../public/sce11.jpg";

function Imagecontainer() {
  return (
    <div className="h-[500px] overflow-hidden w-[100%] flex space-x-80 justify-center">
        <div className='flex space-x-80 '>
        <Image className='animate-loopscroll h-80 ' src={img1}></Image>
        <Image className='animate-loopscroll h-80 ' src={img2}></Image>
        <Image className='animate-loopscroll h-80 ' src={img1}></Image>

        </div>
        <div className='flex space-x-80 ' aria-hidden="true">
        <Image className='animate-loopscroll h-80 ' src={img2}></Image>
        <Image className='animate-loopscroll h-80 ' src={img1}></Image>
        <Image className='animate-loopscroll h-80 ' src={img2}></Image>

        </div>
        
        


       
        

      
    </div>
  );
}

export default Imagecontainer;
