import Image from "next/image"
import Link from "next/link"




const CorporateGovernance = () => {
    return (
        <div className="mt-[50px] px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 mb-[50px]">
            <div>
                 {/* CORPORATE GOVERNANCE */}
                <div className="lg:mb-16">
                    <p className="text-[20px] font-normal">Meet the Corporate Governance</p>
                    <h2 className="text-[32px] font-medium leading-[36.77px] lg:w-[579px] mt-[20px]">Meet the Team that is Revolutionizing Real-Estate Investment world</h2>
                </div>

                  {/* CORPORATE EXECUTIVES */}

                <div className="mt-[30px] max-w-full">
                    <h2 className="text-[24px] font-medium flex justify-center md:text-[32px]">Management Team</h2>
                     <div className="lg:flex lg:flex-row lg:gap-4 flex flex-col justify-center items-center"> 


                    {/* CHAIRMAN */}

                <div className="mt-[10px] md:mt-[20px]">
                <div className="w-[343px] h-[307px] border border-[#E1E1E1] flex flex-col items-center justify-center gap-4 rounded-[8px]">
                <Image className="w-[120px] h-[120px]"
            src="/ohikhena.png"
            width={120}
            height={120}
            
            alt="Chairman"
            
            
                         />
                         <div className="flex flex-col gap-0 items-center justify-center ">
                         <p className="text-[24px] font-extrabold">Ohikhena Gabriel</p>
                         <p className="text-[14px] font-medium">Chief Executive Officer</p>
                         </div>
                         <div className="flex">
                            <div className="flex gap-4">
                            <Image className=" "
            src="/linkedin.png"
            width={24}
            height={24}
            alt="x"
            
                         />
                         <Link href="https://www.instagram.com/ohikhenagabriel?igsh=MWNkeGtvNGdzZ2IxMg=="><Image className=" "
            src="/insta.png"
            width={24}
            height={24}
            alt="instagram"
            
                         />
                         </Link>
                            </div>
                         </div>


                    </div>
                </div>

                {/* CO- CHAIR */}

                <div className="mt-[20px]">
                <div className="w-[343px] h-[307px] border border-[#E1E1E1] flex  flex-col items-center justify-center gap-4 rounded-[8px] ">
                <Image className=" "
            src="/adenola.png"
            width={120}
            height={120}
            alt="Co Chair"
            
                         />
                         <div className="flex flex-col gap-0 items-center justify-center ">
                         <p className="text-[24px] font-extrabold">Adenola Precious</p>
                         <p className="text-[14px] font-medium">Chief Operational Officer</p>
                         </div>
                         <div className="flex">
                            <div className="flex gap-4">
                            <Link href="https://www.linkedin.com/in/precious-ola-44922a1a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><Image className=" "
            src="/linkedin.png"
            width={24}
            height={24}
            alt="x"
            
                         /></Link>
                           <Link href="https://www.instagram.com/precious.ola?igsh=OG1leDB5ZzFpZ2Ni"><Image className=" "
            src="/insta.png"
            width={24}
            height={24}
            alt="instagram"
            
                         />
                         </Link>
                            </div>
                         </div>


                    </div>
                </div>

                {/* NON - EXECUTIVE DIRECTOR */}

                <div className="mt-[20px]">
                <div className="w-[343px] h-[307px] border border-[#E1E1E1] flex  flex-col items-center justify-center gap-4 rounded-[8px] ">
                <Image className=" "
            src="/nwoye.png"
            width={120}
            height={120}
            alt="executive director"
            
                         />
                         <div className="flex flex-col gap-0 items-center justify-center ">
                         <p className="text-[24px] font-extrabold">Nwoye Emmanuel</p>
                         <p className="text-[14px] font-medium">Project Manager</p>
                         </div>
                         <div className="flex">
                            <div className="flex gap-4">
                            <Link href="https://www.linkedin.com/in/emmanuel-nwoye-234b2a100?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><Image className=" "
            src="/linkedin.png"
            width={24}
            height={24}
            alt="x"
            
                         /></Link>
                         <Link href="https://www.instagram.com/emmanuelnwoye_/"><Image className=" "
            src="/insta.png"
            width={24}
            height={24}
            alt="instagram"
            
                         />
                         </Link>
                            </div>
                         </div>


                    </div>
                </div>
                </div>
                </div>




            </div>


           

           
        </div>
    )
}

export default CorporateGovernance