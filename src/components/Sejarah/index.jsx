import React, { useEffect, useState } from "react";
import race_sip from "../../assets/race_sip.png";
import avatarrace from "../../assets/avatar-race2020 1.png";
import Background from "../../assets/backgroundMilenial.png";
import assetsss from "../../assets/Assetmilestone.png";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
function SejarahComponeent() {
  const { scrollY } = useScroll();
  const [isPastTriggerPoint, setIsPastTriggerPoint] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      const triggerPoint = 450;
      setIsPastTriggerPoint(latest > triggerPoint);
    });
  }, [scrollY]);

  const jempolorang = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -200 },
  };
  const jempolorangkanan = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 150 },
  };

  return (
    <div className=" grid md:grid-cols-2 grid-cols-1  mb-52  mt-20  ">
      <motion.div
        initial="hidden"
        animate={isPastTriggerPoint ? "visible" : "hidden"}
        variants={jempolorang}
        transition={{ type: "tween" }}
        className="md:w-12/12 flex flex-col items-center mx-auto"
      >
        <img className="w-[600px] h-[350px] " src={assetsss} />
        <p
          className="text-[40px] font-bold text-center mt-20  font-plus-jakarta"
          style={{
            background: "linear-gradient(50deg, #F05423, #A83CCE, #3D62B0)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Milestone of the Company
        </p>
        <p className="text-[24px]  mt-5 md:text-black ph:text-black text-center font-plus-jakarta">
          In 2017, Raja Cepat (RACE) was founded. Thanks to loyal customers for
          trusting RACE to help their business in expedition, RACE can now
          provide comprehensive services throughout the country. Not only that,
          RACE also prioritizes customer service in order to increase customer
          satisfaction in trusting RACE as a reliable expedition.
        </p>
      </motion.div>
      <motion.div
      className="ml-10"
        initial="hidden"
        animate={isPastTriggerPoint ? "visible" : "hidden"}
        variants={jempolorangkanan}
        transition={{ type: "tween" }}
      >
        <div className="text-[64px] font-plus-jakarta ph:text-[32px] ph:mt-6 text-[#F05423] font-bold">
          2022
        </div>
        <p className="text-[24px] font-plus-jakarta ph:text-[14px] ph:font-semibold ">
          RACE Operates in Jawa, Sulawesi, and Sumatera.
        </p>
        <div className="text-[64px] font-plus-jakarta ph:text-[32px] text-[#F05423] font-bold mt-10 ">
          2021
        </div>
        <p className="text-[24px] font-plus-jakarta  ph:text-[14px] ph:font-semibold ">
          RACE Operates in Denpasar, Bali.
        </p>
        <div className="text-[64px] font-plus-jakarta  ph:text-[32px] text-[#F05423] font-bold mt-10">
          2020
        </div>
        <p className="text-[24px] font-plus-jakarta  ph:text-[14px] ph:font-semibold ">
          RACE Operates in Bandung, Semarang, Yogyakarta, and Surabaya.
        </p>
        <div className="text-[64px] font-plus-jakarta  ph:text-[32px] text-[#F05423] font-bold mt-10">
          2019
        </div>
        <p className="text-[24px] font-plus-jakarta  ph:text-[14px] ph:font-semibold ">
          RACE Hub Start Operates.
        </p>
        <div className="text-[64px] font-plus-jakarta  ph:text-[32px] text-[#F05423] font-bold mt-10">
          2017
        </div>
        <p className="text-[24px] font-plus-jakarta  ph:text-[14px] ph:font-semibold  ">
          RACE Operates.
        </p>
      </motion.div>
    </div>
  );
}

export default SejarahComponeent;
