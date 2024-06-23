import GetStarted from "@/components/getStarted";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import Link from "next/link";




const AboutPage = () => {
    return (
        <div className="">
             
             <div className="mt-[50px] px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32">
                <p className="text-[20px] text-[#2E2E2E] font-medium">About Alphatechcity</p>
                <p className="text-[32px] text-[#2E2E2E] font-medium leading-[36.77px] mt-4 lg:w-[502px]">We set out to build a way to make your money work for you</p>

                <div className='mt-4 lg:flex lg:mt-10 space-x-8'>
                <GetStarted />
                <Link href="/master-class"><button className='flex items-center lg:text-[18px] gap-2 w-[296px] lg:w-[325px] bg-[#EBEBEB] h-[44px] pl-[20px] rounded-[24px] mt-4 mb-16 lg:mt-0'>
                    Sign up for monthly masterclass
                    <GoArrowUpRight />

                </button>
                </Link> 
             </div>
             </div>

             <div className="h-[1282px] lg:h-[900px] md:h-[1010px] bg-[#221A3F] w-full">
                <div className=" ">
                <div className="pt-8 lg:pt-16 pl-[16px] lg:pr-[155px] lg:pl-[155px] pr-[16px]">

                    <p className="text-[#FAFAFA] text-[24px] font-medium lg:text-[32px]">Our Goal</p>
                    <p className="text-[#D7D7D7] text-[14px] lg:text-[24px] mt-4 font-normal">At Alphatechcity, we believe in breaking down barriers and making real estate accessible to everyone. It's not just about buying and selling property; it's about unlocking the dream of homeownership for all!</p>
                </div>

                <div className="pl-[16px] pr-[16px] lg:pr-[155px] lg:pl-[155px] mt-8 lg:mt-16 lg:flex lg:gap-[190px]">
                    

                    <div className="lg:w-[400px] ">
                    <p className="text-[24px] text-[#FAFAFA] font-medium lg:text-[32px]">Our Mission</p>
                         <p className="text-[14px] lg:text-[16px] font-normal text-[#FAFAFA] mt-4">
                         We are on a mission to unlock the dream of property ownership for all. By creating inclusive and accessible investment opportunities, we aim to build a more prosperous society where everyone can thrive.</p>


                </div>

                    <div className="relative w-[343px] h-[200px] lg:w-[500px] lg:h-[200px] mt-4">
            <Image
            src="/mission1.png"
            layout="fill"
            alt="mission"
                         />
                         </div>
                       
                </div>

                <div className="pl-[16px] pr-[16px] lg:pr-[195px] lg:pl-[155px] mt-8 lg:mt-16 lg:flex lg:flex-row-reverse lg:gap-[190px]">
                    <div className="lg:w-[400px]">
                    <p className="text-[24px] text-[#FAFAFA] lg:text-[32px]">Our Vision</p>
                    <div>
                         

<p className="text-[14px] lg:text-[16px] font-normal mt-4 text-[#FAFAFA]">Driven by the value of hospitality, Alphatechcity Limited envisions a Nigeria where everyone has access to real estate ownership. We strive to break down financial barriers and open the doors of this valuable asset class to all Nigerians.
                         </p>
                         </div>
                         </div>

                    <div className="relative w-[343px] h-[200px] lg:w-[500px] lg:h-[200px] mt-4">
            <Image
            src="/mission2.png"
            layout="fill"
            alt="mission"
                         />
                         </div>
                         
                </div>
                </div>

             </div>

                <div className="lg:mt-32  ml-[16px] mr-16px] lg:ml-[160px] md:ml-[220px] lg:mr-[84px] ">
            <div>
            <p className="text-[#2E2E2E] text-[16px] mt-8">Why you should join us</p>
            <p className="text-[#2E2E2E] text-[24px] font-normal leading-[27.58px] w-[249px] mt-2 lg:w-[505px] lg:text-[32px] lg:font-medium lg:mt-4">Exclusive Investment Opportunity</p>
            </div>

            <div className="lg:flex lg:gap-4 lg:mt-6 ">
            <div className="flex gap-4 mt-4">
                <div className="mt-2 w-[162px] lg:w-[263px] h-[252px] border border-[#E1E1E1] rounded-[16px] pt-4 pl-2">
                    <div className="relative w-[32px] h-[32px] lg:w-[64px] lg:h-[64px]">
                <Image className=" "
            src="/eio1.png"
            layout="fill"
            alt="EIO"
            
                         />
                         </div>
                         <div className="">
                            <p className="text-[16px] lg:text-[20px]  font-medium mt-4">Exclusive privilege</p>
                            <p className="w-[139px] mt-2 text-[14px] lg:text-[16px] lg:leading-[18.36px] lg:w-[239px] text-[#666666]">As an Investor or a member of our cooperative you gain access to our property financing option.</p>
                         </div>
                </div>
                <div className="mt-2 w-[162px] lg:w-[263px] h-[252px] border border-[#E1E1E1] rounded-[16px] pt-4 pl-2">
                <div className="relative w-[32px] h-[32px] lg:w-[64px] lg:h-[64px]">
                <Image className=" "
            src="/eio2.png"
            layout="fill"
            alt="EIO"
            
                         />
                         </div>
                         <div>
                            <p className="text-[16px] lg:text-[20px] font-medium mt-4">Safe & Secure Investment</p>
                            <p className="w-[139px] mt-2 text-[14px] lg:text-[16px] lg:leading-[18.36px] lg:w-[239px] text-[#666666]">Wealth X enables you Invest Securely in Realestate and get high returns without buying any property.</p>
                         </div>
                </div>
            </div>
            <div className="flex gap-4 mt-4">
                <div className=" mt-2 w-[163px] h-[252px] lg:w-[263px] border border-[#E1E1E1] rounded-[16px] pt-4 pl-2">
                <div className="relative w-[32px] h-[32px] lg:w-[64px] lg:h-[64px]">
                <Image className=" "
            src="/eio3.png"
            layout="fill"
            alt="EIO"
            
                         />
                         </div>
                         <div className="">
                            <p className="text-[16px] font-medium lg:text-[20px] mt-4">Flexible payment plan</p>
                            <p className="w-[139px] mt-2 text-[14px] lg:text-[16px] lg:leading-[18.36px] lg:w-[239px] font-normal text-[#666666]">In Wealth X you enjoy our flexible payment plan that allows you spread your Investment for a period of 6 Months.</p>
                         </div>
                </div>
                <div className="mt-2 w-[163px] h-[252px] lg:w-[263px] border border-[#E1E1E1] rounded-[16px] pt-4 pl-2">
                <div className="relative w-[32px] h-[32px] lg:w-[64px] lg:h-[64px]">
                <Image className=" "
            src="/eio4.png"
            layout="fill"
            alt="EIO"
            
                         />
                         </div>
                         <div>
                            <p className="text-[16px] lg:text-[20px] font-medium mt-4">Interest earning</p>
                            <p className="w-[139px] mt-2 text-[14px] lg:text-[16px] lg:leading-[18.36px] lg:w-[239px] font-normal text-[#666666]">Wealth X gives you an accrued Interest on your Investment over time.</p>
                         </div>
                </div>
            </div>
            </div>

            
        </div>
        <div className="pl-[16px] pr-[16px] lg:ml-[150px] md:ml-[220px] mt-16">
            <p className="text-[16px] font-normal">Our CAC registration certificate</p>
            <p className="text-[24px] font-medium mt-4">We are officially licensed</p>
            <div className="relative w-[343px] h-[415px] lg:w-[414px] lg:h-[501px] mt-8 mb-16">
                <Image className=" "
            src="/reg.png"
            layout="fill"
            alt="CAC"
            
                         />
                         </div>
        </div>
        </div>
    )
}

export default AboutPage