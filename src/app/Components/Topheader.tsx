import React from 'react';
import Image from 'next/image';
export const Topheader = () => {
  return (
    <div className='flex p-9'>
        <div className='w-[675px] h-6 gap-[190px] ml-20 flex'>
        <div>
        <h3 className='text-xl font-bold'> Exclusive</h3>
        </div>
        
        <div>
            <ul className='flex gap-10'>
                <li> <a href="/">Home</a> </li>
                <li> <a href="/">Contact</a> </li>
                <li> <a href="/">About</a> </li>
                <li> <a href="/">Sign up</a> </li>

            </ul>
        </div>
        </div>
        
        <div className='flex gap-14'>
        <div className='flex gap-6 w-[248px] p-1 bg-slate-100  justify-center '>
            <p>what are you looking for</p>
            <div> <Image src="/Vector.png" alt="Search" width={24} height={24}></Image></div>

        </div>
       <div className='flex gap-2'>
        <Image src="/Wishlist.png" alt="Pic" width={32} height={32}></Image>
        
        <Image src="/Cart1.png" alt="Pic" width={32} height={32}></Image>
        </div>
        </div>
        

    </div>
  )
}
