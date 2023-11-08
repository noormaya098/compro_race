import React, { useEffect, useState } from 'react';
import Race_New from "../../assets/Race_New_Baru.png"
import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import { useLocation, useNavigate } from 'react-router-dom';
function StatusbarComponents({ children }) {
    const { scrollY } = useScroll()
    const router = useLocation();
    const [pathname, setPathname] = useState(router.pathname);
    const[NilaiScroll, setNilaiScroll] = useState(0)
    useMotionValueEvent(scrollY, "change", (latest) => {
        const Sebelumnya = scrollY.getPrevious()
        setNilaiScroll(latest)
        console.log(`ini scroll nilai`,NilaiScroll)
        if (latest > Sebelumnya && latest > 50) {
            // sethide(true)
        }
        else {
            // sethide(false)
        }
    })
    useEffect(() => {
        setPathname(router.pathname);
    }, [router.pathname]);

    const pindahhalaman = useNavigate()
    function UbahHalaman(e) {
        if (e === "cekresi") {
            pindahhalaman("/cekresi")
        } else if (e === "/") {
            pindahhalaman("/")
        } else if (e === "cekongkir") {
            pindahhalaman("/cekongkir")
        } else if (e === "karir") {
            pindahhalaman("/karir")
        }
    }

    return (
        <motion.div
            // initial={{ opacity: 0, scale: 0.5 }}
            // animate={{ opacity: 1, scale: 1 }}
            // transition={{
            //     duration: 0.8,
            //     delay: 0.5,
            //     ease: [0, 0.71, 0.2, 1.01]
            // }}
            className={` ${pathname === "/" ? "bg-transparent " : "bg-white shadow-md "} ${NilaiScroll > 50 ? " top-0 fixed transition-all duration-1000  ease-in-out bg-white shadow-md z-50" : "opacity-1 transition-all top-0 fixed"}   `}>
            <div className="w-screen  h-[117px] px-20 py-5 flex justify-between items-center">
                <div
                    className="w-[197px] h-[77px] "
                >
                    <img src={Race_New} alt="Race New Logo" />
                </div>
                <div className="flex justify-start items-start gap-10 ">
                    <div id='/' onClick={(e) => UbahHalaman(e.target.id)} className={`${pathname === "/" ? " " : "text-[#F05423] "}  text-2xl ${NilaiScroll > 50 ? " text-[#FEBCA7]" : NilaiScroll <= 3 && pathname === "/"? "text-white" :""}  cursor-pointer hover:border-b-2 font-semibold text-[16px] hover:border-white`}>Tentang Kami</div>
                    <div id='cekongkir' onClick={(e) => UbahHalaman(e.target.id)} className={` text-2xl ${pathname === "/" ? " " : "text-[#F05423]  "} ${NilaiScroll > 50 ? " text-[#FEBCA7]" : NilaiScroll <= 3 && pathname === "/"? "text-white" :""} cursor-pointer hover:border-b-2 font-semibold text-[16px] hover:border-white`}>Cek Ongkir</div>
                    <div id='cekresi' onClick={(e) => UbahHalaman(e.target.id)} className={`${pathname === "/" ? " " : "text-[#F05423]  "}${NilaiScroll > 50 ? " text-[#FEBCA7]" : NilaiScroll <= 3 && pathname === "/"? "text-white" :""}  text-2xl  cursor-pointer hover:border-b-2 font-semibold text-[16px] hover:border-white `}>Cek Resi</div>
                    <div id='karir' onClick={(e) => UbahHalaman(e.target.id)} className={`${pathname === "/" ? " " : "text-[#F05423]  "}${NilaiScroll > 50 ? " text-[#FEBCA7]" : NilaiScroll <= 3 && pathname === "/"? "text-white" :""} text-2xl  cursor-pointer hover:border-b-2 font-semibold text-[16px] hover:border-white`}>Race Karir</div>
                </div>
            </div>
        </motion.div>
    );
}

export default StatusbarComponents;
