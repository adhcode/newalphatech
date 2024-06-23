const MasterClass = () => {
    return (
        <div className="mt-[50px] px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 lg:flex lg:flex-row-reverse lg:justify-end">
             
             
             {/* MASTER CLASS IMAGE */}
             <div className="w-full flex items-center justify-center lg:items-start">
             
            <div className="w-[345px] h-[350px] bg-[#D9D9D9] lg:w-[500px] lg:ml-[290px] lg:mt-[30px]">

            </div>
            </div>

            {/* MASTER CLASS DATE */}

            <div >
                {/* MONTH */}
                <div className="flex gap-4 mt-10">
                <div className="h-[122.97px] bg-[#EBEBEB] w-[88px] flex items-center justify-center flex-col rounded-[10px]" >
                   <h2 className="text-[40px] font-bold">12</h2>
                   <p>Month</p>
                </div>

                 {/* DAYS */}
                 <div className="h-[122.97px] bg-[#EBEBEB] w-[88px] flex items-center justify-center flex-col rounded-[10px]" >
                   <h2 className="text-[40px] font-bold">12</h2>
                   <p>Days</p>
                </div>

                 {/* HOURS */}
                 <div className="h-[122.97px] bg-[#EBEBEB] w-[88px] flex items-center justify-center flex-col rounded-[10px]" >
                   <h2 className="text-[40px] font-bold">12</h2>
                   <p>Hours</p>
                </div>
                </div>
                <div>
                <h2 className="text-[32px] font-bold text-[#FBBB52]">Remaining</h2>
                </div>

                {/* MASTERCLASS TITLE */}
            <h2 className="text-[48px] font-bold text-[#303A42] mt-4">Masterclass Title</h2>

            {/* MASTERCLASS SUBTITLE */}
            <p className="text-[24px] font-medium text-[#303A42] mt-10">Masterclass Subtitle</p>
            <button className="w-[240px] bg-[#FBBB52] text-[18px] font-bold text-[#2E2E2E] rounded-[24px] pt-[12px] pl-[48px] pb-[12px] pr-[48px] mt-10 mb-16">
                Join Masterclass
            </button>
            </div>

            

            <div>

            

            

            </div>

            
            
            
            </div>
    )
}

export default MasterClass