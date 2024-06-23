
import Image from 'next/image'
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Link from 'next/link';






const Footer = () => {
    return (
        <div className="h-[819px] bg-[#221A3F] pt-[30px] lg:pt-[50px] lg:h-[650px]">

            <div className=''>
            <div className='flex flex-col items-center'>
            <p className='text-[24px] text-[#FFFFFF] font-semibold'>Subscribe to our newsletter</p>
            <p className='text-[14px] text-[#FFFFFF] font-normal mt-4'>Never miss a beat.</p>
            <p className='text-[14px] text-[#FFFFFF] font-normal'>Get regular update and tips in your inbox.</p>
            </div>
        <div className='flex flex-col items-center justify-center mt-8 gap-2'>
        
        <form className='' >
      <input type="text" name="name" placeholder='Email address' className='w-[215px] lg:w-[319px] h-[56px] rounded-[6px] text-[14px] p-[30px]' />
      <button type="submit" className='w-[120px] h-[56px] bg-[#FBBB52] rounded-[6px] ml-2'>Subscribe</button>
    </form>
    <div className='h-[1px] w-[343px] lg:w-full bg-[#362E53] mt-16' />
    
    </div>
    </div>

    <div className='mt-8 ml-[20px] '>
      <div className='lg:flex lg:items-center lg:justify-between lg:pl-[90px] lg:pr-[90px]'> 
    <div className="">
            <Image
            src="/logo.png"
            width={84}
            height={84}
            alt="logo"
                         />
                         
                         </div>
                         <div className=' lg:flex gap-4'>
                         <div className='mt-8'>

                         <p className='text-[#FFFFFF] text-[14px] font-normal'>Contact us</p>
                         <p className='text-[#FBBB52] mt-2'>contact@alphatechcity.com</p>
                         <p className='text-[#FBBB52] mt-2'>081 407 353 63 / 070 533 182 03</p>
                         </div>

                         <div className='mt-8'>
                            <p className='text-[#FFFFFF] text-[14px] font-normal'>Follow Us</p>
                            <div className='flex gap-2 mt-4'>
                                <div className='rounded-full w-[24px] h-[24px] bg-[#FBBB52] justify-center items-center flex'>
                            <FaFacebook className='text-[#2E2E2E]' />
                            </div>
                            <div className='rounded-full w-[24px] h-[24px] bg-[#FBBB52] justify-center items-center flex'>
                            <FaTwitter className='text-[#2E2E2E]' />
                            </div>
                             <div className='rounded-full w-[24px] h-[24px] bg-[#FBBB52] justify-center items-center flex'>
                            <Link href="https://www.instagram.com/alpha_techcity?igsh=cmc2Zm5vazlwZngz"><FaInstagram className='text-[#2E2E2E]' /></Link>
                            </div>
                            <div className='rounded-full w-[24px] h-[24px] bg-[#FBBB52] justify-center items-center flex'>
                            <Link href="https://www.linkedin.com/company/alphatechcity/"><FaLinkedinIn className='text-[#2E2E2E]' /></Link>
                            </div>

                            </div>
                            </div>
                            </div>
                         </div>
                         <div className='mt-16 lg:flex lg:items-center lg:justify-between lg:pl-[90px] lg:pr-[90px]'>
                          <p className='text-[#FFFFFF] text-[16px] font-medium'>Read <Link href="/laws"><span className='text-[#FBBB52] text-[16px] font-medium'>WealthX Byelaw</span>
                          </Link></p>
                          <div className='lg:flex lg:items-center lg:justify-between '>
                          <div><p className='text-[#FFFFFF] text-[16px] font-medium mt-8 lg:mt-0'>&copy; 2024. Designed & Powered by <Link href="https://uvise.ng/"><span className='text-[#FBBB52] text-[16px] font-medium'>UVISE.NG </span></Link></p></div>
                         <div><p className='text-[#FFFFFF] text-[16px] font-medium'> .All Rights Reserved.</p></div> 
                          </div>
                          </div>
                         </div>

        </div>
        
            
        
        
    )
}

export default Footer