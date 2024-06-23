"use client"


import { IoAddSharp } from "react-icons/io5";
import { BiMinus } from "react-icons/bi";
import Accordion from "./accordion";


import Image from "next/image";
import Link from "next/link";
import { useState } from "react";




const Foot = () => {



    return (
        <div className="px-6 sm:px-8 md:px-12 lg:px-20 xl:px-32 bg-[#FAFAFA]">
        <div className="h-[1908px] lg:h-[800px] mt-8 lg:pl-0 pt-[40px]">
            <div className="lg:flex lg:w-[1280px] lg:flex-row-reverse lg:items-center lg:justify-between lg:h-[588px]">
                <div className="lg:w-[626px] lg:mr-[50px] lg-mt-[10px]">

                    
                <div className="p-4  rounded-lg">
     <Accordion/>
    </div>
                </div>

                <div className="mt-8 lg:w-[466px] lg:items-center lg:flex lg:flex-col lg:ml-[100px]">
                    <div className="flex flex-col items-center justify-center ">
                        <p className="text-[24px] lg:text-[32px] lg:font-semibold text-[#2E2E2E] items-center">Got any Questions?</p>
                        <p className="text-[16px] lg:text-[20px] items-center text-[#666666] mt-4
">Let us help, we’re here to answer all your </p>
<p className="text-[16px] lg:text-[20px] mt-4 lg:mt-2 items-center text-[#666666]
"> your questions about Alphatechcity</p>
                    </div>
                    <div className="mt-16 bg-[#FFFFFF] w-[343px] rounded-[16px] h-[210px] flex flex-col items-center justify-center"> 
                        <div className="flex relative">
                            <Image src ="/avatar1.png"
                            width={48}
                            height={48} className="absolute left-[-30px]"
                            alt="avt1" />
                            <Image src ="/avatar2.png"
                            width={56}
                            height={56} className="z-[100]"
                            alt="avt2"  />
                            <Image src ="/avatar3.png"
                            width={48}
                            height={48} className="absolute left-[40px]"
                            alt="avt3"  />
                        </div>
                        <div className="flex flex-col items-center justify-center" >
                            <p className="flex flex-col items-center mt-4 text-[16px] text-[#101828]">Still have questions?</p>
                            <Link href="/contact-us"><p className="text-[#FBBB52] text-[16px] items-center mt-4">Contact us.</p></Link>
                        </div>
                    </div>
                    
                </div>
                
            </div>
            


        </div>
        </div>
    )
}

export default Foot