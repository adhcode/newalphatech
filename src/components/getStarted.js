import Link from "next/link"

const GetStarted = () => {
    return (
        <Link href="/start-investing"><button className='w-[195px] hover:bg-transparent hover:transition-all duration-300 hover:text-[#FBBB52] hover:border-[2px] hover:border-[#FBBB52] h-[45px] bg-[#FBBB52] rounded-[24px] lg:text-[18px] font-semibold cursor-pointer'>
        Get Started
    </button>
    </Link>
    )
}

export default GetStarted