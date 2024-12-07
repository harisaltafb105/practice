import React from 'react';
import Image from 'next/image';

export const NewArrival = () => {
  return (
    <div>
        <div className='grid-flow-col justify-center items-center gap-7 grid-cols-4 grid-rows-2 xl:h-[600px] h-[400px] xl:ml-32 ml-7 mt-32 w-[500px] xl:w-[1150px]'>
        <div className=' bg-[#000000] col-span-2 row-span-2 flex justify-center items-center'><Image src="/NAimg1.png" alt="Image" width={511} height={511}></Image> 
        <div className='absolute text-white xl:mr-[260px] mr-[160px] mt-80  '> <h2 className='text-2xl'>Play Station 5 </h2> 
        <p className='mt-2 text-sm'>Black and white version of PS5</p>
        <p className='text-sm'> coming out on sale</p>
        <button className='mt-7 text-base'> Shop Now </button>
        </div>
        
        </div>
        <div className='bg-[#0D0D0D] col-span-2 flex items-end justify-end' ><Image src="/NAimg2.png" alt="Image" width={432} height={286}></Image></div>
        <div className=' bg-[#000000] flex items-center justify-center'><Image src="/NAimg3.png" alt="Image" width={210} height={222}></Image></div>
        <div className=' bg-[#000000] flex justify-center items-center'><Image src="/NAimg4.png" alt="Image" width={210} height={222}></Image></div>
</div>

    </div>
  )
}
