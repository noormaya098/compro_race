import React, { useEffect, useState } from 'react'
import race_sip from "../../assets/race_sip.png"
import { motion, useMotionValueEvent, useScroll } from "framer-motion"
function SejarahComponeent() {
    const { scrollY } = useScroll();
    const [isPastTriggerPoint, setIsPastTriggerPoint] = useState(false);

    useEffect(() => {
        return scrollY.onChange((latest) => {
            const triggerPoint = 480;
            setIsPastTriggerPoint(latest > triggerPoint);
        });
    }, [scrollY]);

    const jempolorang = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -200 },
    };
    const jempolorangkanan = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: 150 }
    };

    return (
        <div className=' grid grid-cols-2 mb-52 w-9/12 mt-20 mx-auto '>
            <motion.div
                initial="hidden"
                animate={isPastTriggerPoint ? "visible" : "hidden"}
                variants={jempolorang}
                transition={{ type: "tween" }}
                className='w-8/12'>
                <img src={race_sip} />
                <p className='text-[24px] mt-5'>Pada tahun 2017, Raja Cepat berdiri. Berkat kepercayaan customer setia, kini RACE bisa membentangkan layanan menyeluruh ke penjuru negri. Tidak hanya itu, RACE juga pada</p>
            </motion.div>
            <motion.div
                initial="hidden"
                animate={isPastTriggerPoint ? "visible" : "hidden"}
                variants={jempolorangkanan}
                transition={{ type: "tween" }}
            >
                <div className='text-[64px] text-[#F05423] font-bold'>2022</div>
                <p className='text-[24px]'>RACE Operates in Jawa, Sulawesi, and Sumatera.</p>
                <div className='text-[64px] text-[#F05423] font-bold mt-10'>2021</div>
                <p className='text-[24px]'>RACE Operates in Denpasar, Bali.</p>
                <div className='text-[64px] text-[#F05423] font-bold mt-10'>2020</div>
                <p className='text-[24px]'>RACE Operates in Bandung, Semarang, Yogyakarta, and Surabaya.</p>
                <div className='text-[64px] text-[#F05423] font-bold mt-10'>2019</div>
                <p className='text-[24px]'>RACE Hub Start Operates.</p>
                <div className='text-[64px] text-[#F05423] font-bold mt-10'>2017</div>
                <p className='text-[24px]'>RACE Operates.</p>
            </motion.div>
        </div>
    )
}

export default SejarahComponeent