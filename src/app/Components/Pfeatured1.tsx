import React from 'react';
import Cfeatured1 from './Cfeatured1';
import Image from 'next/image';


const Pfeatured1 = () => {
 interface Featured{
    image:any,
    description:string,
    price:string,
    rating:string,
}
/* Array of objects */
const featured: Featured[] =[
    {image: <Image src="/Gamepad.png" alt="Gamepad" height={172} width={152}></Image>,description: 'Honda City',price: '6,000,000', rating: '621 reviews'  },
    {image: <Image src="/Keyboard.png" alt="Keyboard" height={250} width={150}></Image> ,description: 'Honda Civic',price: '8,000,000', rating: '221 reviews' },
    {image: <Image src="/Lcd.png" alt="Lcd" height={170} width={129}></Image> ,description: 'Suzuki Alto',price: '3,000,000', rating: '300 reviews' },
    {image:<Image src="/Chair.png" alt="Chair" height={120} width={120}></Image> ,description: 'Toyota Corolla',price: '6,000,000', rating: '423 reviews' }
]
return(
    
<div className= 'flex flex-col items-center md:flex md:flex-row md:justify-center md:p-16 md:gap-2 md:min-w-full'>
{
featured.map((products,index)=>{
    return(<div key={index}>
        <Cfeatured1 Image={products.image} Name={products.description}
    Price={products.price} Ratings={products.rating}/>
    </div>
    )
}
    )

}

</div>

    

)
}

export default Pfeatured1;