import React from 'react'
import Image from 'next/image'

export const Hero = () => {
  return (
    <div className='md:flex gap-4 flex-col  '>
        <div className='ml-[135px] mt-[70px] w-[217px] h-[344px] '> {/*left div */}
        <ul id="one" className='flex flex-col gap-4 text-base font-normal font-[Poppins]'>
            <li> Woman's Fashion</li>
            <li>Men's Fashion</li>
            <li>Electronics</li>
            <li>Home & Lifestyle</li>
            <li> Medicine</li>
            <li> Sports & Outdoor</li>
            <li> Baby's & Toys</li>
            <li> Groceries & Pets</li>
            <li> Health & Beauty</li>
        </ul>
        </div>

        <div className='bg-black text-white flex mt-16  h-[344px] xl:w-[892px] w-[550px]'> {/*right div */}
        
        <div> {/*right section*/}
        
        <div className='flex ml-[64px] mt-[58px]'>
        <Image src="/Applelogo.png" alt="img" width={40} height={49}></Image>
        <div className='p-4'>
        <p className='text-sm font-normal font-[poppins]'> iPhone l4 Series</p>
       </div>
       </div>
        <div className='w-[304px] h-[120px]'>
        <h3 className='text-3xl font-[inter] font-semibold ml-16 mt-[27px]'> Up to 10% off Voucher </h3>
        </div>
        <div className='flex gap-2'>
        <p className='ml-[67px]'>Shop Now</p>
        <Image className='ml-[3.5px]' src="/Vector (1).png" alt="img" width={24} height={24}></Image>
        </div>
        </div>



        <div className='mt-6 ml-4'> {/*left section*/}
            <Image src="/Iphone.png" alt="Img" width={400} height={400}></Image>
            
        </div>
    
    


        </div>

    </div>

  )
}
