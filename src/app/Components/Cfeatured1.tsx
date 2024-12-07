import React from 'react';
import Image from 'next/image';

export const Cfeatured1 = (props:any) => {
  return (
    <div>
        
        <div className='border-2 shadow-lg border-l-fuchsia-950 mb-7 w-72 h-56 bg-white'>
          {props.Image} 
          </div>
        
        
        <div className='flex flex-col items-center '>
          <h2 className='underline text-xl text-red-500'>{props.Name}</h2>
          <p className='underline text-lg text-red-500'>Price: {props.Price}</p>
          <p className='underline text-lg text-red-500'>{props.Ratings}</p>
    </div>
    </div>
  )
}
export default Cfeatured1;