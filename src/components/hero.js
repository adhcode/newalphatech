"use client"


import Image from 'next/image'
import GetStarted from './getStarted'
import { GoArrowUpRight } from "react-icons/go";
import Link from 'next/link';

import {motion} from 'framer-motion';


const banner = "Invest into real-estate projects without owning a property"

const Hero = () => {
    return (
       
        <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 relative">
             <div className=''>
             <div className='absolute pt-[20px] pl-[10px] lg:pt-[100px]'>
                <motion.div className='text-[32px] w-[343px] font-[700] lg:text-[64px] lg:w-[787px]'>
                    {banner.split("").map((letter,index) =>(
                        <motion.span key={index} initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{
                            duration:5, 
                            repeat: Infinity, delay:index * 0.1,
                        }} >{letter}</motion.span>
                    ))}
                </motion.div>
                <p className='text-[16px] w-[343px] lg:text-[24px] lg:w-[787px]'>Get a consistent return on your Investment through our Fractional Ownership Investment program</p>
             </div>
             <div className='flex flex-col gap-4 absolute top-[270px] lg:top-[500px] lg:flex-row z-20'>
                <GetStarted />
                <Link href='/master-class'><button className='flex items-center lg:text-[18px] gap-2 w-[296px] lg:w-[325px] bg-[#EBEBEB] h-[44px] pl-[20px] rounded-[24px] cursor-pointer hover:bg-transparent hover:transition-all duration-300 hover:text-[#FBBB52] hover:border-[2px] hover:border-[#EBEBEB] '>
                    Sign up for monthly masterclass
                    <GoArrowUpRight />

                </button>
                </Link>
             </div>
             <div className='relative w-[350px] sm:[640px] h-[420px] md:w-[768px] lg:w-[1024px] lg:h-[573px] xl:w-[1280px] 2xl:w-[1536px]'>
            <Image
            src="/hero.png"
            layout='fill'
            objectFit='cover'
            alt="hero" 
            
                         />
                         </div>
        </div>
        </div>

        

        
    )
}

export default Hero