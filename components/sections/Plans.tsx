import React from 'react'
import Image from 'next/image'

const Plans = () => {
    return (
        <div className='span-light bg-section3-background pb-20'>
            <div id='plans-section' >
                 {/* Header Section */}
            <div className="relative ">
                {/* Background Image */}
                <div className="absolute top-0 left-0 min-h-screen h-full w-screen">
                    <Image
                        src="/images/plans-background.svg" 
                        alt="Background"
                        fill
                        priority
                    />                    
                </div>
                {/* overlay */}
                <div className="absolute top-0 left-0 min-h-screen h-full w-screen bg-black/50"></div>

                <div className="relative pt-[400px] md:pt-[400px] 2xl:pt-[1300px] 3xl:pt-[2300px]">
                    <div className="flex flex-col items-center text-center py-8 md:py-10">
                        <div className="ring-1 ring-primary rounded-full relative w-[120px] h-[120px] md:w-[200px] md:h-[200px]">
                            <Image
                                src="/images/PundD_2.jpg"
                                alt="Anton Studio"
                                fill
                                className="rounded-full object-cover"
                                sizes="(max-width: 768px) 120px, 200px"
                                priority
                            />
                        </div>
                        <div className='pb-3 md:pb-5 pt-3 md:pt-8'>
                            <h2 className="text-lg md:text-5xl text-primary mb-4">
                                Wähle deinen Plan, ohne Risiko.
                            </h2>
                            <p className='text-white text-xs md:text-sm'>
                                unsere Zusammenarbeit ist unkompliziert & flexibel: Retainer sind monatlich kündbar.
                                <br />
                                Mindestlaufzeit 3 Monate.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* White Cards Section */}
            <div className="max-w-6xl mx-auto px-4 mb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 z-10 relative">


                </div>
            </div>

            </div>
            
        </div>
    )
}

export default Plans