import React, { useEffect } from 'react';
import Race_New from "../../assets/Race_New.png"
import { motion, useMotionValueEvent, useScroll } from "framer-motion"
function StatusbarComponents({ children }) {
    const { scrollY } = useScroll()
    useMotionValueEvent(scrollY, "change", (latest) => {
        const Sebelumnya = scrollY.getPrevious()
        console.log(latest)
        if (latest > Sebelumnya && latest > 50) {
            // sethide(true)
        }
        else {
            // sethide(false)
        }
    })
    const fade = {
        initial: {
            opacity: 0,
            x: -200,
        },
        animate: {
            opacity: 1,
            x: 0
        }
    }
    return (
        <div className=" bg-transparent sticky">
            <div className="w-screen h-[117px] px-20 py-5 flex justify-between items-center">
                <motion.div
                    initial={{opacity : 0 , x : -200}}
                    animate={{opacity : 1 , x : 0}}
                    viewport={{
                        once : true
                    }}
                    transition={{ type: "tween", stiffness: 100 }}
                    className="w-[197px] h-[77px]"
                >
                    <img src={Race_New} alt="Race New Logo" />
                </motion.div>
                <div className="flex justify-start items-start gap-10 ">
                    <div className="text-white text-2xl  cursor-pointer hover:border-b-2 font-semibold text-[16px] hover:border-white">Tentang Kami</div>
                    <div className="text-white text-2xl  cursor-pointer hover:border-b-2 font-semibold text-[16px] hover:border-white">Cek Ongkir</div>
                    <div className="text-white text-2xl  cursor-pointer hover:border-b-2 font-semibold text-[16px] hover:border-white">Cek Resi</div>
                    <div className="text-white text-2xl  cursor-pointer hover:border-b-2 font-semibold text-[16px] hover:border-white">Race Karir</div>
                </div>
            </div>
        </div>
    );
}

export default StatusbarComponents;
