import React, { useEffect, useState } from "react";
import race_sip from "../../assets/race_sip.png";
import avatarrace from "../../assets/avatar-race2020 1.png";
import Background from "../../assets/backgroundMilenial.png";
import assetsss from "../../assets/Assetmilestone.png";
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Mile1 from "../../assets/mile1.png";
import Mile2 from "../../assets/mile2.jpg";
import Mile3 from "../../assets/mile3.jpg";
import Mile4 from "../../assets/mile4.jpg";
import Mile5 from "../../assets/mile5.jpg";
import Mile6 from "../../assets/mile6.jpg";
import BG from "../../assets/bg.png";

// import Mile4 from "../../assets/mile4.jpg";

import { Carousel } from "antd";

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

  const carouselStyle = {
    backgroundImage: `url(${BG})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "auto", // Sesuaikan tinggi sesuai kebutuhan
  };

  return (
    <div>
      <div className=" h-screen mx-auto " style={carouselStyle}>
        <Carousel autoplay className="h-screen ph:h-[500px]">
          {/* Slide 1 */}
          <>
            <div className=" grid md:grid-cols-2  grid-cols-1 mb-40 ph:mb-0 ph:mt-0   ml-20 mt-20  ph:grid-cols-1 ph:flex-col ph:flex ph:ml-0">
              <div className="md:w-12/12 flex flex-col items-center mx-auto mr-10">
                <p
                  className="text-[50px] font-bold text-center w-9/12 font-plus-jakarta mt-10 ml-10 ph:text-lg ph:mt-20"
                  style={{
                    background:
                      "linear-gradient(50deg, #F05423, #A83CCE, #3D62B0)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Milestone of the Company
                </p>
                <p className="text-[24px]  mt-5 md:text-black ph:text-black text-center font-plus-jakarta ml-10 ph:text-xs">
                  In 2017, Raja Cepat (RACE) was founded. Thanks to loyal
                  customers for trusting RACE to help their business in
                  expedition, RACE can now provide comprehensive services
                  throughout the country. Not only that, RACE also prioritizes
                  customer service in order to increase customer satisfaction in
                  trusting RACE as a reliable expedition.
                </p>
              </div>

              <div >
                <img
                  className="w-[600px] h-[350px] mt-16 ml-10 ph:w-9/12 ph:h-2/3"
                  src={Mile1}
                />
              </div>
            </div>
          </>

          {/* Slide 2 */}
          <>
            <div>
              <div className=" grid md:grid-cols-2 grid-cols-1  mt-20 ml-12 ">
                
                <div className="md:w-12/12 flex flex-col items-center mx-auto">
                  <p
                    className="text-[80px] font-bold text-center w-9/12 font-plus-jakarta mt-20 ph:text-3xl ph:mt-0"
                    style={{
                      background:
                        "linear-gradient(50deg, #F05423, #A83CCE, #3D62B0)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    2017
                  </p>
                  <p className="text-[24px]  mt-5 md:text-[#F05423] ph:text-[#F05423] text-center font-plus-jakarta ph:text-lg">
                    Race start the first operations.
                  </p>
                </div>
                <img
                  className="w-[600px] h-[350px] mt-10  rounded-lg ph:w-11/12 ph:h-2/3 ph:mr-5"
                  src={Mile5}
                />
              </div>
            </div>
          </>

          {/* Slide 3 */}
          <>
            <div>
              <div className=" grid md:grid-cols-2 grid-cols-1  mt-20 ml-12 ">
                <div className="md:w-12/12 flex flex-col items-center mx-auto">
                  <p
                    className="text-[80px] font-bold text-center w-9/12 font-plus-jakarta mt-20 ph:text-3xl ph:mt-0"
                    style={{
                      background:
                        "linear-gradient(50deg, #F05423, #A83CCE, #3D62B0)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    2019
                  </p>
                  <p className="text-[24px]  mt-5 md:text-[#F05423] ph:text-[#F05423] text-center font-plus-jakarta ph:text-lg">
                  RACE Hub Start Operate.
                  </p>
                </div>
                <img
                  className="w-[600px] h-[350px] mt-10  rounded-lg ph:w-11/12 ph:h-2/3 ph:mr-5"
                  src={Mile3}
                />
              </div>
            </div>
          </>
          

          {/* Slide 4 */}
          <>
            <div>
              <div className=" grid md:grid-cols-2 grid-cols-1  mt-20 ml-12 ">
                <div className="md:w-12/12 flex flex-col items-center mx-auto">
                  <p
                    className="text-[80px] font-bold text-center w-9/12 font-plus-jakarta mt-20 ph:text-3xl ph:mt-0"
                    style={{
                      background:
                        "linear-gradient(50deg, #F05423, #A83CCE, #3D62B0)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    2020
                  </p>
                  <p className="text-[24px]  mt-5 md:text-[#F05423] ph:text-[#F05423] text-center font-plus-jakarta ph:text-lg">
                  RACE Operates in Bandung, Semarang, Yogyakarta, and
                    Surabaya.
                  </p>
                </div>
                <img
                  className="w-[600px] h-[350px] mt-10  rounded-lg ph:w-11/12 ph:h-2/3 ph:mr-5"
                  src={Mile2}
                />
              </div>
            </div>
          </>
          

          {/* Slide 5 */}
          <>
            <div>
              <div className=" grid md:grid-cols-2 grid-cols-1  mt-20 ml-12 ">
                <div className="md:w-12/12 flex flex-col items-center mx-auto">
                  <p
                    className="text-[80px] font-bold text-center w-9/12 font-plus-jakarta mt-20 ph:text-3xl ph:mt-0"
                    style={{
                      background:
                        "linear-gradient(50deg, #F05423, #A83CCE, #3D62B0)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                      2021
                  </p>
                  <p className="text-[24px]  mt-5 md:text-[#F05423] ph:text-[#F05423] text-center font-plus-jakarta ph:text-lg">
                  RACE Operates in Denpasar, Bali.
                  </p>
                </div>
                <img
                  className="w-[600px] h-[350px] mt-10  rounded-lg ph:w-11/12 ph:h-2/3 ph:mr-5"
                  src={Mile6}
                />
              </div>
            </div>
          </>
       

          {/* Slide 6 */}
          <>
            <div>
              <div className=" grid md:grid-cols-2 grid-cols-1  mt-20 ml-12 ">
                <div className="md:w-12/12 flex flex-col items-center mx-auto">
                  <p
                    className="text-[80px] font-bold text-center w-9/12 font-plus-jakarta mt-20 ph:text-3xl ph:mt-0"
                    style={{
                      background:
                        "linear-gradient(50deg, #F05423, #A83CCE, #3D62B0)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                     2022
                  </p>
                  <p className="text-[24px]  mt-5 md:text-[#F05423] ph:text-[#F05423] text-center font-plus-jakarta ph:text-lg">
                  RACE Operates in Jawa, Sulawesi, and Sumatera.
                  </p>
                </div>
                <img
                  className="w-[600px] h-[350px] mt-10  rounded-lg ph:w-11/12 ph:h-2/3 ph:mr-5"
                  src={Mile4}
                />
              </div>
            </div>
          </>
        
        </Carousel>
      </div>

      {/* <div className=" grid md:grid-cols-2 grid-cols-1  mb-52  mt-20  ">
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
            In 2017, Raja Cepat (RACE) was founded. Thanks to loyal customers
            for trusting RACE to help their business in expedition, RACE can now
            provide comprehensive services throughout the country. Not only
            that, RACE also prioritizes customer service in order to increase
            customer satisfaction in trusting RACE as a reliable expedition.
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
      </div> */}
    </div>
  );
}

export default SejarahComponeent;
