// Welcome.js
import React from 'react';
import Background from "../../assets/Background.png";
import Race_New_Bg from "../../assets/Race_New _Bg.png";
import Property1 from "../../assets/Property 1=Banner 1.png";
import Property2 from "../../assets/Property 1=Banner 2.png";
import Property3 from "../../assets/Property 1=Banner 3.png";
import StatusbarComponents from '../statusbar';
import SejarahComponeent from '../Sejarah';
import { motion } from 'framer-motion';
import { Carousel } from 'antd';
function Welcome() {
    return (
        <>
            <StatusbarComponents />
            <div
                className=' overflow-hidden  bg-yellow-200 md:w-screen'>
                {/* <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                    className='text-white  mt-32 '> */}
                {/* <div className='flex justify-center mb-10'>
                        <img className='md:opacity-0 ' src={Race_New_Bg} />
                    </div> */}
                <Carousel autoplay className='md:w-screen bg-red-400 flex justify-center md:h-1/6'>
                    <div className='flex justify-center'>
                        <img className='w-screen' src={Property1} />
                    </div>

                    <div>
                        <img className='w-screen' src={Property2} />
                    </div>
                    <div>
                        <img className='w-screen' src={Property3} />
                    </div>

                </Carousel>
                {/* </motion.div> */}
            </div>
                <div className='h-auto bg-red-500 flex items-center justify-between p-12 mx-auto'>
                    <p> Let’s explore more about Raja Cepat</p>
                    <button>Explore Now</button>
                </div>
        </>
    );
}

export default Welcome;
