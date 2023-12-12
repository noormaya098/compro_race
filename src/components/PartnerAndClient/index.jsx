import React from "react";
import erlangga from "../../assets/partner/image 1.png";
import imacro from "../../assets/partner/image 2.png";
import kitabeli from "../../assets/partner/image 3.png";
import cosmax from "../../assets/partner/image 7.png";
import superindo from "../../assets/partner/image 4.png";
import eubook from "../../assets/partner/EurekaBookhouse 1.png";
import jadnio from "../../assets/partner/image 10.png";
import jaja from "../../assets/partner/Jajaid 1.png";
import uni from "../../assets/partner/image 5.png";
import auriga from "../../assets/partner/image 6.png";
import webuy from "../../assets/partner/webuy_logo.jpg";
import sinbad from "../../assets/partner/sinbad_logo.png";
import kitani from "../../assets/partner/kitani_logo.png";
import gokomodo_logo from "../../assets/partner/gokomodo_logo.png";
import rate from "../../assets/partner/image 8.png";
import chilibeli from "../../assets/partner/image 9.png";
function PartnerComponents() {
  const handleContactClick = () => {
    const url = `https://wa.me/6281281050420`;
    window.open(url, '_blank');
  };


  return (
    <div className="w-9/12 mx-auto mt-56 mb-32 ph:mt-52">
      <h1
        className="text-center text-[48px] ph:text-[24px] font-bold font-plus-jakarta"
        style={{
          background: "linear-gradient(50deg, #F05423, #A83CCE, #3D62B0)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Partner and Clients
      </h1>
      <div className="wrap-gambar grid grid-cols-4 mt-20 ph:space-x-5 ph:mt-10">
        <div className="items-center flex ">
          <img src={erlangga} />
        </div>
        <div className="items-center flex ">
          <img src={imacro} />
        </div>
        <div className="items-start mt flex ">
          <img width={100}  src={webuy} alt="webuy_logo"/>
        </div>
        <div className="items-center flex ">
          <img src={cosmax} />
        </div>

        <div className="items-center flex mt-16">
          <img src={superindo} />
        </div>
        <div className="items-center flex mt-16">
          <img src={eubook} />
        </div>
        <div className="items-center flex mt-16">
          <img src={gokomodo_logo} width={100} />
        </div>
        <div className="items-center flex mt-16">
          <img src={jaja} />
        </div>
        <div className="items-center flex mt-16">
          <img src={uni} />
        </div>
        <div className="items-center flex mt-16">
          <img src={auriga} />
        </div>
        <div className="items-center flex mt-16">
          <img src={sinbad} width={200} />
        </div>
        <div className="items-center flex mt-16">
          <img width={200} src={kitani} />
        </div>
      </div>
      <div className="w-full ph:mt-20 mt-40">
        <h1
          className="text-[48px] text-center font-bold mt-16 ph:text-[20px] ph:mt-[50px] font-plus-jakarta"
          style={{
            background: "linear-gradient(50deg, #F09023, #A83CCE, #3D62B0)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Excited to collaborate with RACE?
        </h1>
        <div className=" text-center justify-items-center flex justify-center w-full font-plus-jakarta">
          <button onClick={handleContactClick}  className="bg-[#F05423] ph:text-sm ph:h-10 ph:w-24 ph:mt-5  w-[150px] h-[60px] font-semibold text-white mt-6 text-[24px]  ph:rounded-xl  rounded-md">
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
}

export default PartnerComponents;
