import React from 'react'
import img2 from "@/public/gb2.jpg"
import img3 from "@/public/me.jpg"
import Image from 'next/image'
function Aboutus() {
  return (
    <div className='bg-white w-full h-auto'>
        <div className='mt-20 h-full w-full'>
            <Image className='w-full outline outline-2 outline-black' src={img2} alt="NO IMAGE"></Image>
            <div className='h-[800px] w-full p-2  md:p-20 flex flex-col'>
                <div className='h-20 flex items-center'>
                    <p className='text-3xl md:text-4xl'>Welcome to Our Industry!</p>
                </div>
                <div className='flex flex-col xl:flex-row w-full'>
                <div className='w-full flex items-center justify-center'>
                    <Image className='w-[700px] h-[300px] xl:h-[500px] object-contain' src={img3} alt=""></Image>
                </div>
                <div className='w-full items-center flex justify-center p-10'>
                    <p>We “Khushi Poly Pack”, incorporated in the year 2007 as a Sole Proprietorship firm at Ahmedabad (Gujarat, India), are
                         the reputed Manufacturer and Supplier of high quality range of Plastic Packaging Roll, Plastic Liner,
                         Plastic Tablecloth and Catering Table Roll. Our offered products are highly acclaimed in 
                         the market for their precise processing, 
                         fine finish and tear resistance. With able assistance of, “Mr. Kamlesh Patel” 
                         (Proprietor), we have gained tremendous success in this domain.</p>
                </div>
                </div>
                


            </div>

        </div>
    </div>
  )
}

export default Aboutus