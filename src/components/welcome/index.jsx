// Welcome.js
import React from "react";
import Race_New_Bg from "../../assets/Race_New _Bg.png";
import Race_Logo from "../../assets/Race_New_Baru.png";
import Background from "../../assets/Background.png";
import StatusbarComponents from "../statusbar";
import SejarahComponeent from "../Sejarah";
import { motion } from "framer-motion";
function Welcome() {
  return (
    <>
      <div
        className="h-screen overflow-hidden "
        style={{ backgroundImage: `url(${Background})` }}
      >
        <StatusbarComponents />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="text-white mt-32 "
        >
          
          {/* <div className='flex justify-center mb-10'>
                        <img className='md:opacity-0 ' src={Race_New_Bg} />
                    </div> */}
          <div className="w-11/12 mx-auto">
          <img className="hidden md:block mb-10 w-[10%]" src={Race_Logo} />
            <p className="text-[24px] md:text-[48px] text-start ">
              Welcome to Raja Cepat
            </p>
            <div className=" text-[14px] text-start md:text-[24px] mx-auto mt-8">
              Fast, Safe delivery and Customer satisfaction<br/> is our <span className="text-[#f05423]">priority</span>. 
              Find the best logistics solution <br/> for your needs here! priority <span className="text-[#3D62B0]">shipping</span> needs here!
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="flex justify-center mt-10 "
        >
          {/* <img className="hidden md:block" src={Race_New_Bg} /> */}
          <div className="md:hidden mt-16">
            <button className=" border-white border-2 w-[105px] h-[38px] text-white font-semibold text-[14px] rounded-[10px]">
              Start Explore
            </button>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Welcome;
