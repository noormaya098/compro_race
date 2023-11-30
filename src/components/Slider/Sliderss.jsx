import React from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Card, Image } from "antd";
import image1 from "../../assets/img1.png";
import image2 from "../../assets/img2.png";
import image3 from "../../assets/img3.png";
import image4 from "../../assets/img4.png";
import image5 from "../../assets/img5.png";
import vector1 from "../../assets/Vector1.png";
import vector2 from "../../assets/Vector2.png";
import vector3 from "../../assets/Vector3.png";
import vector4 from "../../assets/Vector4.png";

const data = [
  {
    image: image1,
    title: "CDE Truck",
    capacity: "2.200kg",
    volume: "P 310 x L 170 x T 170",
  },
  {
    image: image2,
    title: "CDE Frozen Truck",
    capacity: "2.000kg",
    volume: "P 475 x L 170 x T 175",
  },
  {
    image: image3,
    title: "L300",
    capacity: "800kg",
    volume: "P 237 x L 163 x T 122",
  },
  {
    image: image5,
    title: "Grand Max",
    capacity: "600kg",
    volume: "P 220 x L 135 x T 130",
  },
  {
    image: image4,
    title: "Motor",
    capacity: "30kg",
    volume: "P 100 x L 50 x T 40",
  },
];

function Sliderss() {
  return (
    <div>
      <div className="mx-auto md:w-12/12">
        <motion.div>
          <h3 className="text-center text-[32px] text-[#3D62B0] font-semibold ph:text-[32px] ph:mt-36 mt-28 font-plus-jakarta">
            Meet our vehicles!
          </h3>
          <p className="text-center font-plus-jakarta">
            We provide a lot of vehicle to rescue your needs!
          </p>
        </motion.div>
      </div>


      {/* slide */}
      <div className="mx-auto w-9/12 grid grid-cols-5 mt-4 justify-center gap-x-4 gap-y-6">
        {data.map((item, index) => (
          <div key={index}>
            <Card className="border border-blue-700 shadow-xl">
              <Image src={item.image} />
              <p className="text-[#3D62B0] text-[16px] font-bold font-plus-jakarta">{item.title}</p>
              <p className="text-black mt-2 text-[14px] font-plus-jakarta">
                Capacity Max :  {item.capacity}
              </p>
              <p className="text-black mt-2 text-[14px] font-plus-jakarta">
                Vol (cm) : <br />
                {item.volume}
              </p>
              <p className="text-[#3D62B0] mt-2 text-[16px] font-bold font-plus-jakarta">What Include?</p>
              <span className="font-plus-jakarta">
                {" "}
                <Image
                  src={vector1}
                  style={{ width: "10px", height: "12px", marginRight: "5px" }}
                  className="mt-2 "
                />{" "}
                Driver
              </span>
              <p>
                {" "}
                <span className="font-plus-jakarta">
                  {" "}
                  <Image
                    src={vector2}
                    style={{
                      width: "10px",
                      height: "12px",
                      marginRight: "5px",
                    }}
                    className="mt-2"
                  />{" "}
                  Gas
                </span>
              </p>
              <p>
                <span className="font-plus-jakarta">
                  {" "}
                  <Image
                    src={vector3}
                    style={{
                      width: "10px",
                      height: "12px",
                      marginRight: "5px",
                    }}
                    className="mt-2"
                  />{" "}
                  Protect Asurance
                </span>
              </p>
              <p className="font-plus-jakarta">
                <span>
                  {" "}
                  <Image
                    src={vector4}
                    style={{
                      width: "10px",
                      height: "12px",
                      marginRight: "5px",
                    }}
                    className="mt-2"
                  />{" "}
                  CS 24/7
                </span>
              </p>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sliderss;
