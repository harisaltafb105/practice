import React from 'react';
import Image from 'next/image';

export const Category = () => {
  return (
    <div className='mt-[130px] mb-2'>
       <div className='flex gap-2'>
        <div className='w-[20px] h-[40px] bg-[#DB4444] ml-32'></div>

        <div className='w-[126px] h-[40px] mt-2' ><h3 className='font-semibold text-base text-[#DB4444]'> Categories </h3></div>
       </div>
       
        <div className='w-[379px] h-[48px] ml-32 mt-2'><h2 className='font-semibold text-4xl font-[Inter]'>Browse By Category</h2></div>
        
        <div className='mt-12 flex flex-col items-center sm:flex-row sm:flex-wrap sm:gap-8 md:gap-12 lg:gap-20 xl:gap-4 '>
        {/*1 0f 6 divs */}
        <div className='w-[170px] h-[145px] sm:ml-32  border-2 rounded flex flex-col justify-center items-center'>
            <Image src="/C-Camera.png" alt="img" width={56} height={56}></Image>
            <p> Phones </p>
        </div>
        <div className='w-[170px] h-[145px]  border-2 rounded flex flex-col justify-center items-center'>
            <Image src="/C-Camera.png" alt="img" width={56} height={56}></Image>
            <p> Phones </p>
        </div>
        <div className='w-[170px] h-[145px] sm:ml-32 md:ml-0 border-2 rounded flex flex-col justify-center items-center'>
            <Image src="/C-Camera.png" alt="img" width={56} height={56}></Image>
            <p> Phones </p>
        </div>
        <div className='w-[170px] h-[145px]  xl:ml-0 md:ml-32 border-2 rounded flex flex-col justify-center items-center'>
            <Image src="/C-Camera.png" alt="img" width={56} height={56}></Image>
            <p> Phones </p>
        </div>
        <div className='w-[170px] h-[145px] sm:ml-32 md:ml-0 border-2 rounded flex flex-col justify-center items-center'>
            <Image src="/C-Camera.png" alt="img" width={56} height={56}></Image>
            <p> Phones </p>
        </div>
        <div className='w-[170px] h-[145px]  border-2 rounded flex flex-col justify-center items-center'>
            <Image src="/C-Camera.png" alt="img" width={56} height={56}></Image>
            <p> Phones </p>
        </div>

        </div>


    </div>
  )
}
