// Welcome.js
import React from "react";
import Race_New_Bg from "../../assets/Race_New _Bg.png";
import Property1 from "../../assets/Property 1=Banner 1.png";
import Property2 from "../../assets/Property 1=Banner 2.png";
import Property3 from "../../assets/Property 1=Banner 3.png";
import StatusbarComponents from "../statusbar";
import SejarahComponeent from "../Sejarah";
import { motion } from "framer-motion";
import { Carousel } from "antd";
import Mile1 from "../../assets/mile1.png";
import Mile2 from "../../assets/mile2.jpg";
import Mile3 from "../../assets/mile3.jpg";
import Mile4 from "../../assets/mile4.jpg";
import Mile5 from "../../assets/mile5.jpg";
import Mile6 from "../../assets/mile6.jpg";
import BG from "../../assets/bg.png";
// import { Carousel } from "antd";
function Welcome() {
  const carouselStyle = {
    backgroundImage: `url(${BG})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "auto", // Sesuaikan tinggi sesuai kebutuhan
  };
  return (
    <>
      <StatusbarComponents />
      <div className=" overflow-hidden  bg-yellow-200 md:w-screen">
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
        <Carousel
          autoplay
          className="md:w-screen bg-red-400 flex justify-center md:h-1/6"
        >
          <div className="flex justify-center">
            <img className="w-screen" src={Property1} />
          </div>

          <div>
            <img className="w-screen" src={Property2} />
          </div>
          <div>
            <img className="w-screen" src={Property3} />
          </div>
        </Carousel>
        {/* </motion.div> */}
      </div>
      <div className="h-auto bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500 flex items-center justify-between ph:p-5 p-10 mx-auto ph:grid ph:grid-flow-col-1 ph:justify-center ">
        <h4 className="text-white font-plus-jakarta">
          Let's explore more about RajaCepat
        </h4>
        <button className="bg-transparent  text-white font-bold ph:py-1 ph:h-10 py-2 px-4 border border-white rounded-2xl font-plus-jakarta ph:mt-3 ph:justify-center ph:w-28 ph:ml-20 ph:text-xs">
          Explore Now
        </button>
      </div>
    </>
  );
}

export default Welcome;
