import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Cart from '@/components/Cart'
import Services from '@/components/Services'


export default function CartPage(){
    return (
        <>
            <div>
        <Image
          src={"/images/cart-img.png"}
          alt="cart-section"
          width={1440}
          height={316}
          className="w-full h-auto mt-20"
        />
      </div>
            <div className="flex flex-col lg:flex-row lg:h-[525px] items-center lg:justify-around">
                <div className="flex flex-col w-full lg:w-auto">
                     <Cart />
                   
                    
                </div>
            </div>
            <Services/>

        </>

    )
}

