import React, { useEffect, useState } from 'react';
import Race_New from "../../assets/Race_New_Baru.png"
import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import { useLocation, useNavigate } from 'react-router-dom';
import Race_News from "../../assets/Race_New _Bg.png"
function StatusbarComponents({ children }) {
    const { scrollY } = useScroll()
    const router = useLocation();
    const [pathname, setPathname] = useState(router.pathname);
    const [NilaiScroll, setNilaiScroll] = useState(0)
    useMotionValueEvent(scrollY, "change", (latest) => {
        const Sebelumnya = scrollY.getPrevious()
        setNilaiScroll(latest)
        console.log(`ini scroll nilai`, NilaiScroll)
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
        <>
            <motion.div
                className={`ph:hidden  ${pathname === "/" ? "bg-transparent " : "bg-white shadow-md "} ${NilaiScroll > 50 ? " top-0 fixed transition-all duration-1000  ease-in-out bg-white shadow-md z-50" : "opacity-1 transition-all top-0 fixed"}   `}>
                <div className="w-screen  h-[117px] px-20 py-5 flex justify-between items-center">
                    <div
                        className="w-[197px] h-[77px] "
                    >
                        <img src={Race_New} alt="Race New Logo" />
                    </div>
                    <div className="flex justify-start items-start gap-10 ">
                        <div id='/' onClick={(e) => UbahHalaman(e.target.id)} className={`${pathname === "/" ? " " : "text-[#F05423] "}  text-2xl ${NilaiScroll > 50 ? " text-[#FEBCA7]" : NilaiScroll <= 3 && pathname === "/" ? "text-white" : ""}  cursor-pointer hover:border-b-2 font-semibold text-[16px] hover:border-white`}>Tentang Kami</div>
                        <div id='cekongkir' onClick={(e) => UbahHalaman(e.target.id)} className={` text-2xl ${pathname === "/" ? " " : "text-[#F05423]  "} ${NilaiScroll > 50 ? " text-[#FEBCA7]" : NilaiScroll <= 3 && pathname === "/" ? "text-white" : ""} cursor-pointer hover:border-b-2 font-semibold text-[16px] hover:border-white`}>Cek Ongkir</div>
                        <div id='cekresi' onClick={(e) => UbahHalaman(e.target.id)} className={`${pathname === "/" ? " " : "text-[#F05423]  "}${NilaiScroll > 50 ? " text-[#FEBCA7]" : NilaiScroll <= 3 && pathname === "/" ? "text-white" : ""}  text-2xl  cursor-pointer hover:border-b-2 font-semibold text-[16px] hover:border-white `}>Cek Resi</div>
                        <div id='karir' onClick={(e) => UbahHalaman(e.target.id)} className={`${pathname === "/" ? " " : "text-[#F05423]  "}${NilaiScroll > 50 ? " text-[#FEBCA7]" : NilaiScroll <= 3 && pathname === "/" ? "text-white" : ""} text-2xl  cursor-pointer hover:border-b-2 font-semibold text-[16px] hover:border-white`}>Race Karir</div>
                    </div>
                </div>

            </motion.div>
            <div className='opacity-100 md:opacity-0 ml-5 mt-7 h-7 flex items-center ph:flex ph:justify-between  mx-auto w-11/12'>
                <div className={`rounded-full  ${pathname === "/" ? "bg-white bg-opacity-20" : "bg-red-500 bg-opacity-70"}  w-[40px] h-[40px] flex items-center justify-center`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-align-justify">
                        <line x1="3" y1="6" x2="21" y2="6" />
                        <line x1="3" y1="12" x2="21" y2="12" />
                        <line x1="3" y1="18" x2="21" y2="18" />
                    </svg>
                </div>
                <img className='w-[62px] h-[48px]' src={Race_News} />
            </div>

        </>
    );
}

export default StatusbarComponents;
