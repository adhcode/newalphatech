import Image from "next/image"
import { GoArrowUpRight } from "react-icons/go";
import GetStarted from "./getStarted";
import Link from "next/link";




const AboutUs = () => {
    return (
        <div className="ml-[5px] lg:ml-[20px] mt-[-120px] px-6 sm:px-8 md:px-12 lg:px-20 xl:px-32">
        <div className="">
            <h2 className="text-[14px] font-normal">About Us</h2>
            <p className="text-[24px] w-[293px] font-medium mt-2 lg:w-[502px]">We set out to create a platform that makes your money work for you</p>
        </div>
        <div className="mt-6 md:flex md:gap-8 lg:flex xl:flex lg:items-center lg:mb-16"> 
        <div className="relative w-[343px] h-[224px] lg:w-[550px] lg:h-[360px]">
<Image className=""
            src="/aboutus.png"
           layout="fill"
           alt="About Us"
            
                         />

</div>
          <div>
            <h2 className="font-medium text-[16px]  mt-4">About Alpha techcity Limited</h2>
            <p className="text-[14px] w-[343px] xl:w-[537px] font-normal text-[#666666] mt-4">Alpha techcity Limited is Nigeria's most hospitable realestate company. We offer a unique opportunity through our registered real estate investment cooperative. This allows investors of all financial backgrounds to participate in our fractional ownership projects, securing consistent annual returns on their investments.</p>


            <Link href="/about"><button className='flex items-center gap-2 w-[147px] bg-[#FFFFFF] border border-[#EBEBEB] h-[44px] pl-[20px] rounded-[24px] mt-4 lg:mt-8 hover:bg-transparent hover:transition-all duration-300 hover:text-[#FBBB52] hover:border-[2px] hover:border-[#EBEBEB]'>
                    Learn more
                   <GoArrowUpRight />

                </button></Link>
          </div>
        </div>
{/* JOIN US */}
<div className="">


<div className="mt-8">
<h2 className="text-[14px] font-normal lg:text-[16px]">Join Us</h2>
<div className="lg:flex lg:gap-[250px]">
<div>
            <p className="text-[24px] w-[343px] font-medium mt-4 text-[#2E2E2E] leading-[27.58px] lg:text-[32px] lg:w-[502px]">How Can Members/Investors Participate In The Cooperative?</p>
            </div>
            <div>
            <p className="text-[16px] lg:text-[18px] lg:w-[326px] w-[326px] font-medium mt-4 text-[#666666] leading-[18.38px]">As an aspiring member or a potential Investor, you can engage in either of the following in the Cooperative.</p>
            </div>
            </div>

</div>
<div className="lg:flex lg:gap-16 mt-4">
<div className="mt-4">
<div className="relative w-[343px] h-[200px] lg:w-[500px] lg:h-[200px]">
<Image className=""
            src="/joinus1.png"
           layout="fill"
           alt="Join Us"
            
                         />

</div>

                         <p className="text-[16px] lg:text-[24px] lg:w-[501px] mt-4 font-medium text-[#2E2E2E] ">You Can Invest Your Money With High Return</p>
                         <p className="mt-4 w-[343px] lg:w-[501px] text-[#666666] lg:text-[16px] text-[14px]">With proper guidance from our wealth experts, be rest assured that you are on your way to becoming a millionaire when you Invest with Us. </p>

<p className="mt-2 w-[343px] text-[#666666] lg:w-[501px] lg:text-[16px] text-[14px]">With our fractional ownership project, every investor gets to own a piece of the cake. You can choose to invest for a period of 24, 36, 48 months or as long as you are willing to Invest with our cooperative. The longer you Invest the more your RETURN ON INVESTMENT</p>

<div className="mt-4">
<GetStarted />
</div>

</div>


<div className="mt-4">
    <div className="relative w-[343px] lg:w-[500px] lg:h-[200px]">
<Image className=""
            src="/joinus2.png"
           layout="fill"
           alt="Join Us"
            
                         />

</div>
                         <p className="text-[16px] mt-4 font-medium lg:text-[24px] lg:w-[501px] text-[#2E2E2E] ">You Can Save Your Money Securely</p>
                         <p className="mt-4 w-[343px] text-[#666666] lg:text-[16px] lg:w-[501px] text-[14px]">You can save your money with us and earn interest on your savings for as long as you desire. </p>

<p className="mt-2 w-[343px] text-[#666666] lg:text-[16px] lg:w-[501px] text-[14px]">Joining our Cooperative will help you save your money securely. You can either save daily, weekly, or monthly for a period of time, and you will get a 15% Interest on your savings at the end of the maturity date.</p>

<div className="mt-9">
<GetStarted />
</div>

</div>
</div>

</div>

{/* WHY YOU SHOULD JOIN US */}
        <div className="lg:mt-32">
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
       
        </div>
    )
}

export default AboutUs