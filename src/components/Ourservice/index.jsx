import React, { useEffect, useState } from "react";
import orangnaikmotor from "../../assets/orangnaikmotor.png";
import cargo_darat from "../../assets/cargo_darat.jpg";
import cargo_laut from "../../assets/cargo_laut.jpg";
import cargo_udara from "../../assets/cargo_udara.jpg";
import sameday from "../../assets/sameday.png";
import Regular from "../../assets/Regular.png";
import fulfilment from "../../assets/fulfilment 1.png";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Sliderss from "../Slider/Sliderss";
function OurService() {
  const { scrollY } = useScroll();
  const [nilaiScroll, setnilaiScroll] = useState();
  const [isPastTriggerPoint, setIsPastTriggerPoint] = useState(false);
  const [isPastTriggerPoint2, setIsPastTriggerPoint2] = useState(false);
  const [isPastTriggerPoint3, setIsPastTriggerPoint3] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setnilaiScroll(latest);
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
    hidden: { opacity: 0, x: 250 },
  };
  const kiri = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };
  const kanan = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 250 },
  };

  return (
    <>
      <div className="bg-gradient-to-t from-[#FFFFFF00] to-[#F05423] ph:mb-48 ">
        <motion.div
          initial="hidden"
          animate={isPastTriggerPoint ? "visible" : "hidden"}
          variants={jempolorang}
          transition={{ type: "tween" }}
        >
          <h1 className="text-center text-[64px] text-white font-semibold ph:text-[32px] ph:mt-36 mt-28 font-plus-jakarta ph:mt-10">
            Our Services
          </h1>
        </motion.div>
        <div className="w-10/12 mx-auto mt-16 ph:w-11/12 md:w-12/12 ">
          <motion.div
            initial="hidden"
            animate={isPastTriggerPoint2 ? "visible" : "hidden"}
            variants={charter}
            transition={{ type: "tween" }}
          >
            <h1 className="text-white text-center text-[40px] font-semibold ph:text-[24px] font-plus-jakarta">
              Charter & Courier
            </h1>
            <p className="text-white text-center text-[24px] font-plus-jakarta">
              We have a few product that can fit in you any situations, let take
              a look!
            </p>
          </motion.div>
          <div className="card-wrapper flex space-x-5 mt-16 ph:grid-cols-1 ph:space-y-7 ph:flex ph:flex-col items-center ">
            <motion.div
              className="w-[241px] bg-white h-[368px] rounded-[20px] font-plus-jakarta ph:h-[400px]"
              initial="hidden"
              animate={isPastTriggerPoint3 ? "visible" : "hidden"}
              variants={kiri}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-center ">
                <img src={orangnaikmotor} style={{ minHeight: 220 }} />
              </div>
              <div className="mx-7 ">
                <p className="text-[#F05423] font-semibold text-start text-[20px] font-plus-jakarta">
                  Same day Services
                </p>
                <p className="text-[#FE8A66] font-medium text-start text-[14px] mt-1 font-plus-jakarta">
                  Delivery on the same day or within 8 hours
                </p>
              </div>
            </motion.div>
            <motion.div
              className="w-[241px] bg-white h-[368px] rounded-[20px] font-plus-jakarta ph:h-[400px]"
              initial="hidden"
              animate={isPastTriggerPoint3 ? "visible" : "hidden"}
              variants={jempolorang}
              transition={{ duration: 0.5, delay: 0.2 }} // You can stagger the animations with delays
            >
              <div className="flex justify-center ">
                <img src={sameday} style={{ minHeight: 220 }} />
              </div>
              <div className="mx-7 ">
                <p className="text-[#F05423] font-semibold text-start text-[20px] font-plus-jakarta">
                  Next day Services
                </p>
                <p className="text-[#FE8A66] font-medium text-start text-[14px] mt-1 font-plus-jakarta">
                  Delivery arrives the next day or within 2 hours.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="w-[241px] bg-white h-[368px] rounded-[20px] font-plus-jakarta ph:h-[400px]"
              initial="hidden"
              animate={isPastTriggerPoint3 ? "visible" : "hidden"}
              variants={kanan}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex justify-center ">
                <img src={Regular} style={{ minHeight: 220 }} />
              </div>
              <div className="mx-7 ">
                <p className="text-[#F05423] font-semibold text-start text-[20px] font-plus-jakarta">
                  Regular Services
                </p>
                <p className="text-[#FE8A66] font-medium text-start text-[14px] mt-1 font-plus-jakarta">
                  Standard Shipping within 1-3 days.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="w-[241px] bg-white h-[368px] rounded-[20px] font-plus-jakarta ph:h-[400px]"
              initial="hidden"
              animate={isPastTriggerPoint3 ? "visible" : "hidden"}
              variants={kiri}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-center ">
                <img style={{ minHeight: 220 }} src={cargo_darat} />
              </div>
              <div className="mx-7 ">
                <p className="text-[#F05423] font-semibold text-start text-[20px] font-plus-jakarta">
                  Cargo Darat
                </p>
                <p className="text-[#FE8A66] font-medium text-start text-[14px] mt-1 font-plus-jakarta">
                  Delivery on the same day or within 8 hours
                </p>
              </div>
            </motion.div>
            <motion.div
              className="w-[241px] bg-white h-[368px] rounded-[20px] font-plus-jakarta ph:h-[400px]"
              initial="hidden"
              animate={isPastTriggerPoint3 ? "visible" : "hidden"}
              variants={kiri}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-center ">
                <img src={cargo_laut} style={{ minHeight: 220 }} />
              </div>
              <div className="mx-7 ">
                <p className="text-[#F05423] font-semibold text-start text-[20px] font-plus-jakarta">
                  Cargo Laut
                </p>
                <p className="text-[#FE8A66] font-medium text-start text-[14px] mt-1 font-plus-jakarta">
                  Delivery on the same day or within 8 hours
                </p>
              </div>
            </motion.div>
            <motion.div
              className="w-[241px] bg-white h-[368px] rounded-[20px] font-plus-jakarta ph:h-[400px]"
              initial="hidden"
              animate={isPastTriggerPoint3 ? "visible" : "hidden"}
              variants={kiri}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-center ">
                <img src={cargo_udara} style={{ minHeight: 220 }} />
              </div>
              <div className="mx-7 ">
                <p className="text-[#F05423] font-semibold text-start text-[20px] font-plus-jakarta">
                  Cargo Udara
                </p>
                <p className="text-[#FE8A66] font-medium text-start text-[14px] mt-1 font-plus-jakarta">
                  Delivery on the same day or within 8 hours
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Sliderss />
      <div className="w-9/12 mx-auto mt-16   ">
        <div className=" md:w-[1064px]   h-[385px] mt-40 ph:mt-20">
          <motion.p
            initial="hidden"
            animate={nilaiScroll >= 2000 ? "visible" : "hidden"}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -200 },
            }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-[#F05423] text-[36px] ph:text-[24px] font-bold font-plus-jakarta ph:text-center"
          >
            WareHouse
          </motion.p>
          <div className=" grid grid-cols-2 mt-8 ph:grid-cols-1 ">
            <motion.div
              initial="hidden"
              animate={nilaiScroll >= 2000 ? "visible" : "hidden"}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: -200 },
              }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <img className="ph:w-[280px] ph:h-[175px]" src={fulfilment} />
            </motion.div>
            <div className="items-center ph:text-start">
              <motion.p
                initial="hidden"
                animate={nilaiScroll >= 2000 ? "visible" : "hidden"}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: -200 },
                }}
                transition={{ duration: 1, delay: 0.2 }}
                className="mt-9 text-[20px] ph:text-[14px]  text-[#F05423] font-plus-jakarta"
              >
                A dynamic facility pivotal in the supply chain, catering to all
                operational fulfillment activities including the Inbound
                process, QC Checking, Labeling, Storing, Packing, Outbound, and
                Delivery.{" "}
              </motion.p>
              <motion.p
                initial="hidden"
                animate={nilaiScroll >= 2000 ? "visible" : "hidden"}
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: 200 },
                }}
                transition={{ duration: 1, delay: 0.2 }}
                className="mt-12 text-[20px] ph:text-[14px]  text-[#F05423] font-plus-jakarta"
              >
                It plays a key role in freeing SMEs and entrepreneurs from the
                burden of fixed costs by providing a fulfillment service that
                supports business expansion into strategic areas across
                Indonesia with minimal risk. The warehouse serves as a crucial
                partner to its clients, fostering business
                growth and efficiency.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurService;
