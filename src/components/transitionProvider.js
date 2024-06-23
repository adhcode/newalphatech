"use client";

import { AnimatePresence } from "framer-motion";
import Navbar from "./navbar";
import Footer from "./footer";
import {motion} from "framer-motion";
import { usePathname } from "next/navigation";





const TransitionProvider = ({children}) => {


    const pathName = usePathname()

    return (

        
        <AnimatePresence >
            
        <div className="">
        <div key= {pathName}
         className="w-screen h-screen">
           

<motion.div className="h-screen w-screen fixed bg-[#221A3F] opacity-10 rounded-b-[100px] z-40" 
            animate={{height:"0vh"}}
            exit={{height:"140vh"}}
            transition={{duration:0.5, ease:"easeOut"}}/>


          <div className="h-[120px]">
          <Navbar />
          </div>
          <div className="h-[calc(100vh-120px)]">
          {children}
          <div>
            <Footer />
          </div>
          </div>
          </div>
        </div>
        </AnimatePresence>

    )
}


export default TransitionProvider;