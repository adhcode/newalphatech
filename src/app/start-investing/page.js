import { CgClose } from "react-icons/cg";






const StartInvesting = () => {
    return (
        <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32">

            <div className="w-[343px] mt-[40px]">
                    <p className="text-[32px] font-semibold">Start Investing</p>
                    <p className="text-[16px] font-normal text-[#666666] mt-2">Read the information below and fill the form to get started</p>
            </div>

            <div className="">
            <p className="text-[24px] mt-16 font-medium leading-[27.58px]">How Do Our Members/</p>
            <p className="text-[24px] font-medium leading-[27.58px]">Investors Actively Participate In Wealth X ?</p>
            <p className="text-[#666666] text-[16px] mt-4">As a member or Investor, you can engage in either of the following in the Cooperative.</p>

            </div>

           <div>
            <p className="text-[#2E2E2E] text-[16px] font-medium mt-4">You Can Invest Your Money With High Return</p>
            <p className="text-[#666666] text-[16px] mt-4">With proper guidance from our wealth experts, be rest assured that you are on your way to becoming a millionaire when you Invest with Us. </p>
            <p className="text-[#666666] text-[16px] mt-4">With our fractional ownership project, every investor gets to own a piece of the cake. You can choose to invest for a period of 24, 36, 48 months or as long as you are willing to Invest with our cooperative. The longer you Invest the more your RETURN ON INVESTMENT</p>
           </div>

           <div>
            <p className="text-[#2E2E2E] text-[16px] font-medium mt-4">You Can Save Your Money Securely</p>
            <p className="text-[#666666] text-[16px] mt-4">You can save your money with us and earn interest on your savings for as long as you desire.</p>
            <p className="text-[#666666] text-[16px] mt-4">Joining our Cooperative will help you save your money securely. You can either save daily, weekly, or monthly for a period of time, and you will get a 15% Interest on your savings at the end of the year.</p>
           </div>

           <form className="mt-4">
           <label className="flex items-center justify-between">
    <p className="text-[16px]">Choose Type</p>
    <CgClose className="h-[16px] w-[16px] text-[#FF4444]" />

    
 </label>
 <select className="w-full rounded-[24px] h-[40px] border border-[#E1E1E1] mt-4 mb-2">
    
 <option value="Choose">Choose</option>
    <option value="Wealth X Premium Investment" className="">Wealth X Premium Investment</option>
    <option value="Wealth X Classic Investment">Wealth X Classic Investment</option>
    <option value="Wealth X Savings">Wealth X Savings</option>
    <option value="Wealth X Gold Investment">Wealth X Gold Investment</option>
    
 </select>
<div>
 <label className="flex items-center justify-between mt-4 pl-4 mb-2">
    <p className="text-[16px]">Full Name:</p>

    <CgClose className="h-[16px] w-[16px] text-[#FF4444]" />

    
 </label>
 <input type="text" placeholder="Full name" className="w-full pl-4 rounded-[24px] h-[40px] border border-[#E1E1E1]"></input>
 </div>
 <div>
 <label className="flex items-center justify-between mt-4 mb-2">
    <p className="text-[16px]">Email Address:</p>
    <CgClose className="h-[16px] w-[16px] text-[#FF4444]" />

    
 </label>
 <input type="text" placeholder="Email Address" className="w-full pl-4 rounded-[24px] h-[40px] border border-[#E1E1E1]"></input>
 </div>
 <div>
 <label className="flex items-center justify-between mt-4 mb-2">
    <p className="text-[16px]">Phone Number:</p>
    <CgClose className="h-[16px] w-[16px] text-[#FF4444]" />

    
 </label>
 <input type="number" placeholder="Phone number" className="w-full pl-4 rounded-[24px] h-[40px] border border-[#E1E1E1]"></input>
 </div>
 <div>
 <label className="flex items-center justify-between mt-4 mb-2">
    <p className="text-[16px]">Whatsapp Number:</p>
    <CgClose className="h-[16px] w-[16px] text-[#FF4444]" />

    
 </label>
 <input type="number" placeholder="Whatsapp Number" className="w-full pl-4 rounded-[24px] h-[40px] border border-[#E1E1E1]"></input>
 </div>
 
 <div>
 <label className="flex items-center justify-between mt-4 mb-2">
    <p className="text-[16px]">Occupation:</p>
    <CgClose className="h-[16px] w-[16px] text-[#FF4444]" />

    
 </label>
 <input type="text" placeholder="Occupation" className="w-full pl-4 rounded-[24px] h-[40px] border border-[#E1E1E1]"></input>
 </div>
 <div>
 <label className="flex items-center justify-between mt-4 mb-2">
    <p className="text-[16px]">Home Address:</p>
    <CgClose className="h-[16px] w-[16px] text-[#FF4444]" />

    
 </label>
 <input type="text" placeholder="Home Address" className="w-full pl-4 rounded-[24px] h-[40px] border border-[#E1E1E1]"></input>
 </div>
 <div>
 <label className="flex items-center justify-between mt-4 mb-2">
    <p className="text-[16px]">Comments:</p>
    <CgClose className="h-[16px] w-[16px] text-[#FF4444]" />

    
 </label>
 <textarea type="text" className="w-full rounded-[24px] h-[112px] border border-[#E1E1E1]"></textarea>
 </div>
 <button className='w-full h-[45px] bg-[#FBBB52] rounded-[24px] lg:text-[18px] font-semibold mt-4 mb-8' >Submit</button>
 
           </form>
        </div>
    )
}

export default StartInvesting