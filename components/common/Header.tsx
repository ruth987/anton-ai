"use client"
import React from 'react'
import Image from 'next/image'

const Header = () => {

    return (
        <div className="w-full flex justify-between items-center py-2 md:py-4 px-3 md:px-6 span-light ">
            <div className="flex items-center gap-1 cursor-pointer" >
                <div className='w-[50px] md:w-[70px] ' >
                    <Image
                    src="/images/antonlogo.svg"
                    alt="Logo"
                    width={70}
                    height={70}
                    className='w-full h-auto'
                    />
                </div>
                
                 <div className="text-black text-sm md:text-xl  ">AI </div>
            </div>
            <div
             className='cursor-pointerhover:text-primary font-extrabold'>
                    Demo
                </div>
        </div>
    )
}

export default Header
