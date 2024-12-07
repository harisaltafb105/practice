import React from 'react';
import Image from 'next/image';

export const Featured = () => {
  return (
    <div>
    <div className='mt-[200px] flex gap-4 ml-32 '>
        <div className='w-[270px] h-[350px]'> {/*one of 4 divs*/}
            
            <div className='w-[270px] h-[250px] bg-[#F5F5F5] rounded flex flex-col justify-center items-center '>
                
                
                    
               <div className='flex mt-2'>
                <div className="bg-[#DB4444] w-[55px] h-[26px] mr-44 rounded py-1 px-3 text-xs font-normal text-[#FAFAFA] font-[Poppins] "> 40 % </div>
               
                <div className='flex flex-col gap-1  w-8' >
                    <div> <Image src="/FillHeart.png" alt="img" width={28} height={28}></Image></div>
                    <div> <Image src="/FillEye.png" alt="img" width={28} height={28}></Image></div>
                </div>
                </div>
                
                
                <div className='w-[190px] h-[190px] ml-2 '>
            <Image src="/Gamepad.png" alt="Pic" width={172} height={152}></Image>
                </div>
                

            </div>
           
           
           
           <div className='w-[201px] h-[84px] '>
                <p className='text-base font-medium font-[Poppins]'>HAVIT HV-G92 Gamepad</p>
               <div className='flex gap-2'>
                <p className='text-red-500'>$120</p>  <p >$160</p>
                </div>
                <Image src="/Ratings.png" alt="Img" width={100} height={100}></Image>

            </div>


        </div>

        <div className='w-[270px] h-[350px]'> {/*two of 4 divs*/}
            
            <div className='w-[270px] h-[250px] bg-[#F5F5F5] rounded flex flex-col justify-center items-center '>
                
                
                    
               <div className='flex mt-2'>
                <div className="bg-[#DB4444] w-[55px] h-[26px] mr-44 rounded py-1 px-3 text-xs font-normal text-[#FAFAFA] font-[Poppins] "> 40 % </div>
               
                <div className='flex flex-col gap-1  w-8' >
                    <div> <Image src="/FillHeart.png" alt="img" width={28} height={28}></Image></div>
                    <div> <Image src="/FillEye.png" alt="img" width={28} height={28}></Image></div>
                </div>
                </div>
                
                
                <div className='w-[190px] h-[190px] ml-2'>
            <Image src="/Keyboard.png" alt="Pic" width={191} height={101}></Image>
                </div>
                

            </div>
           
           
           
           <div className='w-[201px] h-[84px] '>
                <p className='text-base font-medium font-[Poppins]'>HAVIT HV-G92 Gamepad</p>
               <div className='flex gap-2'>
                <p className='text-red-500'>$120</p>  <p >$160</p>
                </div>
                <Image src="/Ratings.png" alt="Img" width={100} height={100}></Image>

            </div>


        </div>

        <div className='w-[270px] h-[350px]'> {/*3 of 4 divs*/}
            
            <div className='w-[270px] h-[250px] bg-[#F5F5F5] rounded flex flex-col justify-center items-center '>
                
                
                    
               <div className='flex mt-2'>
                <div className="bg-[#DB4444] w-[55px] h-[26px] mr-44 rounded py-1 px-3 text-xs font-normal text-[#FAFAFA] font-[Poppins] "> 40 % </div>
               
                <div className='flex flex-col gap-1  w-8' >
                    <div> <Image src="/FillHeart.png" alt="img" width={28} height={28}></Image></div>
                    <div> <Image src="/FillEye.png" alt="img" width={28} height={28}></Image></div>
                </div>
                </div>
                
                
                <div className='w-[190px] h-[190px] ml-2'>
            <Image src="/Lcd.png" alt="Pic" width={170} height={129}></Image>
                </div>
                

            </div>
           
           
           
           <div className='w-[201px] h-[84px] '>
                <p className='text-base font-medium font-[Poppins]'>HAVIT HV-G92 Gamepad</p>
               <div className='flex gap-2'>
                <p className='text-red-500'>$120</p>  <p >$160</p>
                </div>
                <Image src="/Ratings.png" alt="Img" width={100} height={100}></Image>

            </div>


        </div>


        <div className='w-[270px] h-[350px]'> {/*4 of 4 divs*/}
            
            <div className='w-[270px] h-[250px] bg-[#F5F5F5] rounded flex flex-col justify-center items-center '>
                
                
                    
               <div className='flex mt-2'>
                <div className="bg-[#DB4444] w-[55px] h-[26px] mr-44 rounded py-1 px-3 text-xs font-normal text-[#FAFAFA] font-[Poppins] "> 40 % </div>
               
                <div className='flex flex-col gap-1  w-8' >
                    <div> <Image src="/FillHeart.png" alt="img" width={28} height={28}></Image></div>
                    <div> <Image src="/FillEye.png" alt="img" width={28} height={28}></Image></div>
                </div>
                </div>
                
                
                <div className='w-[190px] h-[180px] ml-16'>
            <Image src="/Chair.png" alt="Pic" width={107} height={140}></Image>
                </div>
                

            </div>
           
           
           
           <div className='w-[201px] h-[84px] '>
                <p className='text-base font-medium font-[Poppins]'>HAVIT HV-G92 Gamepad</p>
               <div className='flex gap-2'>
                <p className='text-red-500'>$120</p>  <p >$160</p>
                </div>
                <Image src="/Ratings.png" alt="Img" width={100} height={100}></Image>

            </div>


        </div>


    </div> 
    <div className='flex justify-center items-center mt-4'> <button className='w-[234px] h-[56px]  bg-[#DB4444] text-[Poppins] text-[#FAFAFA]'> View All Products </button></div>
    
    </div>
 )
}
