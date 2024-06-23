import Image from "next/image"
import GetStarted from "./getStarted"




const InvestmentPlan = () => {
    return (
        <div className="bg-[#221A3F] h-[1520px] lg:h-[1007px] pl-[20px] pt-8">
            <div className="lg:ml-[210px]">
            <p className="text-[#FAFAFA] font-normal text-[14px]">Investment Plan</p>
            <p className="text-[#FAFAFA] text-[24px] font-medium mt-6">Alphatechcity Investment Plan</p>
            </div>
            <div>
                
             <div className="mt-4 lg:flex items-center lg:gap-[100px] lg:flex-row-reverse lg:justify-center">
                <div className="relative w-[343px] h-[200px] lg:w-[500px] lg:h-[200px]">
            <Image
            src="/inv1.png"
            layout="fill" 
            alt="invest" 
                         />
                         </div>
                         <div className="lg:mt-2">
                         <p className="text-[#FAFAFA] text-[24px] lg:text-[32px] font-medium mt-6 lg:mt-2">PREMIUM</p>
                         <p className="text-[#FAFAFA] w-[343px] lg:w-[400px] lg:text-[16px] font-normal mt-6 lg:mt-2 text-[14px]">When you subscribe to our premium plan you get 16% on Investment From N500,000 to N2,000,0000 (Five Hundred Thousand Naira -- Two Million Naira) in 12months.</p>
                         <div className="mt-4">
                         <GetStarted />
                         </div>
                         </div>

</div>
<div className="mt-8 lg:mt-16 lg:flex items-center lg:gap-[100px] lg:justify-center">
<div className="relative w-[343px] h-[200px] lg:w-[500px] lg:h-[200px]">
            <Image
            src="/inv2.png"
            layout="fill"
            alt="invest" 
                         />
                         </div>
                         <div>
                         <p className="text-[#FAFAFA] text-[24px] lg:text-[32px] font-medium mt-6 lg:mt-2">CLASSIC</p>
                         <p className="text-[#FAFAFA] w-[343px] lg:w-[400px] lg:text-[16px] font-normal mt-6 lg:mt-2 text-[14px]">When you subscribe to our classic plan you get 18% on Investment From N3,000,000 to N5,000,000 (Three Million Naira -- Five Million Naira) in 12months</p>
                         <div className="mt-4">
                         <GetStarted />
                         </div>
                         </div>

</div>
<div className="mt-8 lg:mt-16 lg:flex items-center lg:gap-[100px] lg:flex-row-reverse lg:justify-center">
    <div className="relative w-[343px] h-[200px] lg:w-[500px] lg:h-[200px]">
            <Image
            src="/inv3.png"
            layout="fill"
            alt="invest" 
                         />
                         </div>
                         <div>
                         <p className="text-[#FAFAFA] text-[24px] lg:text-[32px] font-medium mt-6 lg:mt-2">GOLD</p>
                         <p className="text-[#FAFAFA] w-[343px] lg:w-[400px] lg:text-[16px] font-normal mt-6 lg:mt-2 text-[14px]">When you subscribe to our gold plan you Get 20% on Investment From N6,000,000 and Above in 12months With 500 Investors from our Millionaires Club or Cooperative Investing at least N500,000 each, we will be able to achieve the above projections with ease.</p>
                         <div className="mt-4">
                         <GetStarted />
                         </div>
                         </div>

</div>
</div>


        </div>
    )
}

export default InvestmentPlan