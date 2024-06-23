"use client"


import Link from "next/link"
import { usePathname } from "next/navigation";




const NavLink = ({link}) => {

    const pathName = usePathname();
    return (
        <Link className={`hover:border-b-[2px] border-[#FBBB52] hover: transition-all duration-300 ease-in ${pathName === link.url && "border-b-[2px] border-[#FBBB52] "}`} href={link.url}> 
        {link.title}
        
        </Link>

        
    );
};

export default NavLink;
