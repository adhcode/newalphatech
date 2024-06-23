"use client"

import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';
import GetStarted from './getStarted';
import NavLink from './navLink';
import {motion} from 'framer-motion';

const links = [
    {url: "/" , title: "Home"},
    {url: "/about" , title: "About"},
    {url: "/project-brief" , title: "Project Brief"},
    {url: "/corporate-governance" , title: "Corporate Governance"},
    {url: "/contact-us" , title: "Contact Us"}

];


const Navbar = () => {
    const [open, setOpen] = useState(false);

    


    const topVariants={
        closed:{
            rotate:0,
        },
        opened:{
            rotate:45,
            backgroundColor: "rgb(34,26,63)",
            
        },
    };

    const centerVariants={
        closed:{
            opacity:1,
        },
        opened:{
            opacity:0,
            
            
        }
    }

    const bottomVariants={
        closed:{
            rotate:0,
        },
        opened:{
            rotate:-45,
            backgroundColor: "rgb(34,26,63)",
            
        },
    };


    const listVariants = {
        closed: {
            x:"100vw",
        },
        opened:
        {
            x: 0,
            transition:{
                when:"beforeChildren",
                staggerChildren:0.2,
            }
        },
    };

    const listitemVariants= {
        closed:{
            x: -10,
            opacity: 0,
        },
        opened: {
            x:0,
            opacity:1
        },
        };
    
     return (
        <div className="h-full max-w-full flex items-center justify-between px-6 sm:px-8 md:px-12 lg:px-20 xl:px-32 bg-[#221A3F]">
            
           
            {/* LOGO */}
            <div className=' lg:flex lg:justify-between gap-44 lg:gap-12 xl:gap-44 2xl:gap-56'>
           <Link href="/">
            
            <div className="">
            <Image
            src="/logo.png"
            width={84}
            height={84}
            alt="logo"
                         />
                         
                         </div>
                         </Link> 

                         
                            <div className='font-normal text-[18px] md:text-[14px] sm:text-[12px] lg:text-[16px] xl:text-[18px]  hidden lg:flex text-[#FAFAFA] gap-4 justify-center items-center' >
            {links.map(link=>(
                        <NavLink link={link} key={link.title}/>
                    ))}
                    </div>
                    <div className='hidden lg:flex gap-4 justify-center items-center'>
          <GetStarted/>
          </div>
            
            </div>

            
            
            {/* RESPONSIVE MENU */}
            <div className='lg:hidden'>
                {/* MENU BUTTON */}

               
                         
                        
            
                <button className='w-[48px] h-[48px] bg-[#FBBB52] flex flex-col justify-center items-center gap-1 z-50 relative rounded-[4px]' onClick={()=>setOpen((prev) => !prev)}>
                    <motion.div variants={topVariants} 
                    animate={open ? "opened" : "closed"}
                    className='w-[16px] h-[2px] bg-[#2E2E2E] rounded origin-left'></motion.div>
                    <motion.div variants={centerVariants}
                    animate={open ? "opened" : "closed"}
                     className='w-[16px] h-[2px] bg-[#2E2E2E] rounded'>
                    
                    </motion.div>
                    <motion.div variants={bottomVariants} 
                    animate={open ? "opened" : "closed"}
                    className='w-[16px] h-[2px] bg-[#2E2E2E] rounded origin-left'>
                    
                    </motion.div>
                </button>
             
               
                {/* MENU LIST */}

                {
                    open && (
                        
                <motion.div  variants={listVariants} initial="closed" animate="opened" className='absolute top-[110px] left-0 w-screen h-screen p-10 bg-[#221A3F] text-[#FAFAFA] flex flex-col items-left justify-center gap-8 text-[18px] z-50 '>
                     
                    <div className='absolute top-[60px] flex flex-col gap-8'>
                        {links.map(link=>(
                        <motion.div variants={listitemVariants} className= ""
                        key={link.title}>
                        <Link href={link.url}>
                            {link.title}
                        </Link>
                        </motion.div>
                    ))}
                    <GetStarted />
                    </div>
                    
                     
                </motion.div>
                )}


            </div>

            
            </div>
            
        
    )
}

export default Navbar