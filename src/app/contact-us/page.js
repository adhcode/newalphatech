"use client"

import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";










const ContactUs = () => {

    
    return (
        <div className="mt-[50px] px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32">

            
            <div>
                <h2 className="text-[32px] font-medium lg:w-[625px]">Talk to us. We’re always happy to make new connections</h2>
            </div>
            

            <div className="lg:flex lg:gap-[250px] lg:mt-16"> 
            <div className="mt-[20px]">
            <div>
              <div className="rounded-full h-[48px] w-[48px] bg-[#E0D9FC] flex items-center justify-center">
              <FaEnvelope className="h-[24px] w-[24px]" / >

              </div>
              <p className="text-[20px] font-medium text-[#2E2E2E] mt-2 lg:text-[24px]">contact@alphatechcity.com</p>


            </div>

            <div className="mt-[20px]">
              <div className="rounded-full h-[48px] w-[48px] bg-[#E0D9FC] flex items-center justify-center">
              <FaPhoneAlt className="h-[24px] w-[24px]" />


              </div>
              <p className="text-[20px] font-medium text-[#2E2E2E] mt-2 lg:text-[24px] lg:w-[363px]"> 070 533 182 03 / 081 407 353 63 </p>


            </div>

            <div className="mt-8">
              <h2 className="text-[24px] font-bold">Follow Us</h2>
              <div className="flex gap-2 mt-4">
              <div className="rounded-full h-[48px] w-[48px] bg-[#E0D9FC] flex items-center justify-center">
              <FaFacebook className="h-[24px] w-[24px]" / >

              </div>
              <div className="rounded-full h-[48px] w-[48px] bg-[#E0D9FC] flex items-center justify-center">
              <FaTwitter className="h-[24px] w-[24px]" / >

              </div>
              <div className="rounded-full h-[48px] w-[48px] bg-[#E0D9FC] flex items-center justify-center">
              <Link href="https://www.instagram.com/alpha_techcity?igsh=cmc2Zm5vazlwZngz"><FaInstagram className="h-[24px] w-[24px]" / ></Link>

              </div>
              <div className="rounded-full h-[48px] w-[48px] bg-[#E0D9FC] flex items-center justify-center">
              <Link href="https://www.linkedin.com/company/alphatechcity/"><FaLinkedinIn className="h-[24px] w-[24px]" / ></Link>

              </div>
              </div>
            </div>
            </div>


            {/* CONTACT FORM */}
            <div className="mt-16 lg:mt-0">
            <form className="mt-4">
           
            {/* NAME */}
            <div className="lg:flex lg:gap-2">
            <div className="">
 
 <input type="text" placeholder="Name" className="w-[343px] pl-4 lg:w-[316px] rounded-[8px] h-[50px] border border-[#E1E1E1] bg-[#FAFAFA] text-[16px]"></input>
 </div>
 {/* EMAIL */}
 <div className="mt-2 lg:mt-0">
 
 <input type="text" placeholder="Email" className="w-[343px] pl-4 lg:w-[316px] rounded-[8px] h-[50px] border border-[#E1E1E1] bg-[#FAFAFA] text-[16px] text-[#666666]"></input>
 </div>
 </div>
 {/* MESSAGE */}
 <div className="mt-2 mb-16">
 
 <textarea type="text" placeholder="Message" className="w-[343px] pl-4  lg:w-[640px] rounded-[8px] h-[200px] border border-[#E1E1E1] bg-[#FAFAFA] text-[16px] resize-none"></textarea>
 </div>

 {/* SUBMIT BUTTON */}
 <button className='w-[343px] h-[45px] bg-[#FBBB52] rounded-[24px] lg:text-[18px] font-semibold mt-4 mb-8' >Submit</button>

                </form>
            </div>
            </div>
        
        
        
        </div>
    )
}

export default ContactUs