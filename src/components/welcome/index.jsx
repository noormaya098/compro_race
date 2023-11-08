// Welcome.js
import React from 'react';
import Background from "../../assets/Background.png";
import Race_New_Bg from "../../assets/Race_New _Bg.png";
import StatusbarComponents from '../statusbar';
import SejarahComponeent from '../Sejarah';
import { motion } from 'framer-motion';
function Welcome() {
    return (
        <>
            <div
                className='h-screen overflow-hidden ' style={{ backgroundImage: `url(${Background})` }}>
                <StatusbarComponents />
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                    className='text-white  mt-32 '>
                    {/* <div className='flex justify-center mb-10'>
                        <img className='md:opacity-0 ' src={Race_New_Bg} />
                    </div> */}
                    <p className='text-[24px] md:text-[48px] text-center'>Welcome to Raja Cepat</p>
                    <p className=' text-[14px] text-center md:text-[24px] mx-auto  w-9/12 mt-8'>In this site, you can get information about the company profile, service programs provided, <br />check your delivery receipt and careers.<br />
                        Let’s scroll through this website to get to know more about Raja Cepat!</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                    className='flex justify-center mt-10 '>
                    <img className='hidden md:block' src={Race_New_Bg} />
                    <div className='md:hidden mt-16'>
                    <button className=' border-white border-2 w-[105px] h-[38px] text-white font-semibold text-[14px] rounded-[10px]'>Start Explore</button>
                    </div>
                </motion.div>
            </div>
        </>
    );
}

export default Welcome;
