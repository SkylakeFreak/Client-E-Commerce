import React, { useEffect, useState,Ref, useRef } from 'react'
import Image from 'next/image'
import img1 from "../public/linearbag1.png"
import img2 from "../public/carrybag.png"

function Imagecontainer() {
    const array1=[img1,img2]
    const [current,setcurrent]=useState(img1);
    var start=0;
    useEffect(()=>{
        const interval=setInterval(() => {
            setcurrent(array1[start%array1.length])
            console.log(current)
            start+=1
            
        }, 4000);
        return ()=>{
                clearInterval(interval);
                
        }


    },[])

  return (
    <div className="w-auto h-auto outline-white ml-2 mr-2">
        {/* <Image className='w-full h-[450px] object-scale-down shadow-2xl ' src={img1} alt='Image'></Image> */}
        <Image key={current.src} className='w-full h-[450px] object-scale-down ' src={current} alt='Image'></Image>

    </div>
  )
}

export default Imagecontainer