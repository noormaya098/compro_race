import React, { useEffect, useState } from 'react'
import orangnaikmotor from "../../assets/orangnaikmotor.png"
import sameday from "../../assets/sameday.png"
import Regular from "../../assets/Regular.png"
import fulfilment from "../../assets/fulfilment 1.png"
import { motion, useMotionValueEvent, useScroll } from "framer-motion"
function OurService() {
    const { scrollY } = useScroll();
    const [nilaiScroll, setnilaiScroll] = useState()
    const [isPastTriggerPoint, setIsPastTriggerPoint] = useState(false);
    const [isPastTriggerPoint2, setIsPastTriggerPoint2] = useState(false);
    const [isPastTriggerPoint3, setIsPastTriggerPoint3] = useState(false);

    useEffect(() => {
        return scrollY.onChange((latest) => {
            setnilaiScroll(latest)
            const triggerPoint = 1269;
            const triggerPoint2 = 1500;
            const triggerPoint3 = 1600;
            setIsPastTriggerPoint(latest > triggerPoint);
            setIsPastTriggerPoint2(latest > triggerPoint2);
            setIsPastTriggerPoint3(latest > triggerPoint3);
        });
    }, [scrollY]);

    const jempolorang = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: -200 },
    };
    const charter = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: 250 }
    };
    const kiri = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 }
    };
    const kanan = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: 250 }
    };

    return (
        <>
            <div className='bg-gradient-to-t from-[#FFFFFF00] to-[#F05423]  '>
                <motion.div
                    initial="hidden"
                    animate={isPastTriggerPoint ? "visible" : "hidden"}
                    variants={jempolorang}
                    transition={{ type: "tween" }}
                >
                    <h1 className='text-center text-[64px] text-white font-semibold ph:text-[32px] ph:mt-36 mt-28'>Our Service</h1>
                </motion.div>
                <div className='w-9/12 mx-auto mt-16 ph:w-11/12   '>
                    <motion.div
                        initial="hidden"
                        animate={isPastTriggerPoint2 ? "visible" : "hidden"}
                        variants={charter}
                        transition={{ type: "tween" }}
                    >
                        <h1 className='text-white text-[48px] font-semibold ph:text-[24px]'>Charter & Courier</h1>
                    </motion.div>
                    <div className='card-wrapper grid grid-cols-3 mt-16 ph:grid-cols-1 ph:space-y-7 ph:flex ph:flex-col items-center'>
                        <motion.div 
                            className='w-[341px] bg-white h-[468px] rounded-[20px]'
                            initial="hidden"
                            animate={isPastTriggerPoint3 ? "visible" : "hidden"}
                            variants={kiri}
                            transition={{ duration: 1 }}
                        >
                            <div className='flex justify-center '>
                                <img src={orangnaikmotor} />
                            </div>
                            <div className='mx-7 '>
                                <p className='text-[#F05423] font-semibold text-start text-[32px]'>Same day Services</p>
                                <p className='text-[#FE8A66] font-medium text-start text-[20px] mt-3'>Delivery on the same day or within 8 hours</p>
                            </div>
                        </motion.div>
                        <motion.div
                            className='w-[341px] bg-white h-[468px] rounded-[20px]'
                            initial="hidden"
                            animate={isPastTriggerPoint3 ? "visible" : "hidden"}
                            variants={jempolorang}
                            transition={{ duration: 1, delay: 0.2 }} // You can stagger the animations with delays
                        >
                            <div className='flex justify-center '>
                                <img src={sameday} />
                            </div>
                            <div className='mx-7 '>
                                <p className='text-[#F05423] font-semibold text-start text-[32px]'>Next day Services</p>
                                <p className='text-[#FE8A66] font-medium text-start text-[20px] mt-3'>Delivery arrives the next day or within 2 hours.</p>
                            </div>
                        </motion.div>
                        <motion.div
                            className='w-[341px] bg-white h-[468px] rounded-[20px]'
                            initial="hidden"
                            animate={isPastTriggerPoint3 ? "visible" : "hidden"}
                            variants={kanan}
                            transition={{ duration: 1, delay: 0.4 }}
                        >
                            <div className='flex justify-center '>
                                <img src={Regular} />
                            </div>
                            <div className='mx-7 '>
                                <p className='text-[#F05423] font-semibold text-start text-[32px]'>Regular Services</p>
                                <p className='text-[#FE8A66] font-medium text-start text-[20px] mt-3'>Standard Shipping within 1-3 days.</p>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div >
            <div
                className='w-9/12 mx-auto mt-16   '

            >
                <div className=' md:w-[1064px]   h-[385px] mt-40 '>
                    <motion.p
                        initial="hidden"
                        animate={nilaiScroll >= 2000 ? "visible" : "hidden"}
                        variants={{
                            visible: { opacity: 1, x: 0 },
                            hidden: { opacity: 0, x: -200 }
                        }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className='text-[#F05423] text-[36px] ph:text-[24px] font-semibold '>E-commerce Fulfillment</motion.p>
                    <div className=' grid grid-cols-2 mt-8 ph:grid-cols-1 '>
                        <motion.div
                            initial="hidden"
                            animate={nilaiScroll >= 2000 ? "visible" : "hidden"}
                            variants={{
                                visible: { opacity: 1, x: 0 },
                                hidden: { opacity: 0, x: -200 }
                            }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            <img className='ph:w-[280px] ph:h-[175px]' src={fulfilment} />
                        </motion.div>
                        <div className='items-center ph:text-start '>
                            <motion.p
                                initial="hidden"
                                animate={nilaiScroll >= 2000 ? "visible" : "hidden"}
                                variants={{
                                    visible: { opacity: 1, y: 0 },
                                    hidden: { opacity: 0, y: -200 }
                                }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className='mt-9 text-[20px] ph:text-[16px] text-[#F05423]'>Race serving all operational fulfillment activities, starting from the Inbound process, QC Checking,  Labeling, Storing, Packing, Outbound to Delivery</motion.p>
                            <motion.p
                                initial="hidden"
                                animate={nilaiScroll >= 2000 ? "visible" : "hidden"}
                                variants={{
                                    visible: { opacity: 1, x: 0 },
                                    hidden: { opacity: 0, x: 200 }
                                }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className='mt-12 text-[20px] ph:text-[16px] text-[#F05423]'>Freeing SMEs and business people from the burden  of fixed costs, Fulfillment Service as well as providing  opportunities to develop business in  strategic areas in Indonesia with minimal risk</motion.p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurService