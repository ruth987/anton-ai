"use client"
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Header2 = () => {
    const router = useRouter(); 

    const handleLogoClick = () => {
        router.push('/');
    };

    return (
        <div className="w-full flex justify-between items-center py-2 md:py-4 px-3 md:px-6 span-light ">
            <div className="flex items-center gap-1 cursor-pointer" onClick={handleLogoClick}>
                <div className='w-[50px] md:w-[70px] ' >
                    <Image
                    src="/images/antonlogo.svg"
                    alt="Logo"
                    width={70}
                    height={70}
                    className='w-full h-auto'
                    />
                </div>
                
                 <div className="text-black text-sm md:text-xl  ">GenAI Studio</div>
            </div>
        </div>
    )
}

export default Header2
