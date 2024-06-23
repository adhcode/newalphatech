import React, { useState } from "react";

const Accordion = () => {
  

  return (
    <div className="py-2 text-[#2E2E2E]">
     <div className="collapse collapse-plus ">
  <input type="radio" name="my-accordion-3" defaultChecked  /> 
  <div className="collapse-title text-xl font-medium">
  Who can join our cooperative?
  </div>
  <div className="collapse-content text-[14px]"> 
    <p className="mb-2"><span className="font-bold">Salary Earners : </span>As a salary Earner you can secure your financial future by investing in an asset that historically appreciates in value. You get to protect yourself from rising costs "inflation" and build a stable financial foundation generations to come. You get to invest in your future and the future of your loved ones. Owning real estate through our cooperative will create a lasting legacy that benefits generations to come.</p>
    <p className="mb-2"><span className="font-bold">Business Owner : </span>As a business owner you can secure your financial future by investing in a stable and reliable asset class like our affordable housing projects. Our cooperative offers flexible investment options that align with your risk tolerance and business goals. It is wise that you let your investment work for you while you focus on growing your business. Enjoy regular returns and build a sustainable income stream for long-term financial security.</p>
    <p className="mb-2"><span className="font-bold">Student :  </span>As a student you get a head start on building wealth while you're still young. Our cooperative provides affordable entry points into the real estate market, setting you up for financial success early on. Connect with like-minded individuals, mentors, and experienced professionals within the cooperative. This network can open doors to exciting opportunities and accelerate your career path</p>
  </div>
</div>
<div className="collapse collapse-plus ">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  What is the project about?
  </div>
  <div className="collapse-content text-[14px]"> 
    <p>To empower over 10,000+ individuals to build wealth through smart real estate fractional Investment</p>
  </div>
</div>
<div className="collapse collapse-plus ">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  Project benefit for investors
  </div>
  <div className="collapse-content text-[14px]"> 
    <p>1. Usage Right On Specific Properties</p>
    <p>2. You get High Return on your investment</p>
    <p>3. You get reduced rate on any property you want to buy from the company</p>
  </div>
</div>
<div className="collapse collapse-plus">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  What is the minimum Investment plan
  </div>
  <div className="collapse-content text-[14px]"> 
    <p>The minimum investment plan is how premium plan - When you subscribe to our premium plan you get 16% on Investment From N500,000 to N2,000,0000 (Five Hundred Thousand Naira -- Two Million Naira) in 12months</p>
    
  </div>
</div>
<div className="collapse collapse-plus ">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  Is there a limit to the number of investment i can make?
  </div>
  <div className="collapse-content text-[14px]"> 
    <p>No, there is no limit to the number of investment you can make.</p>
    
  </div>
</div>
    </div>

    


  );
};

export default Accordion;