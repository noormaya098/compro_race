import React, { useEffect, useState } from "react";
import Race_New from "../../assets/Race_New_Baru.png";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, Dropdown, Button } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import Race_News from "../../assets/Race_New _Bg.png";
import ClickSiteBarStore from "../../ZustandStore/ClickSiteBar";
function StatusbarComponents({ children }) {
  const { scrollY } = useScroll();
  const router = useLocation();
  const [pathname, setPathname] = useState(router.pathname);
  const [NilaiScroll, setNilaiScroll] = useState(0);
  useMotionValueEvent(scrollY, "change", (latest) => {
    const Sebelumnya = scrollY.getPrevious();
    setNilaiScroll(latest);
    // console.log(`ini scroll nilai`, NilaiScroll);
    if (latest > Sebelumnya && latest > 50) {
      // sethide(true)
    } else {
      // sethide(false)
    }
  });
  useEffect(() => {
    setPathname(router.pathname);
  }, [router.pathname]);

  const pindahhalaman = useNavigate();
  function UbahHalaman(e) {
    if (e === "cekresi") {
      pindahhalaman("/cekresi");
    } else if (e === "/") {
      pindahhalaman("/");
    } else if (e === "cekongkir") {
      pindahhalaman("/cekongkir");
    } else if (e === "karir") {
      pindahhalaman("/karir");
    }
  }
  const DiClickNihstate = ClickSiteBarStore((state) => state.DiClickNih);
  const setDiClickNihstate = ClickSiteBarStore((state) => state.setDiClickNih);
  const [ClickBurger, setClickBurger] = useState(false);

  const toggleDropdown = () => {
    setClickBurger(!ClickBurger);
  };
  useEffect(() => {}, [DiClickNihstate]);
  console.log(`ini di statusbar`, DiClickNihstate);

  const menu = (
    <Menu className="w-36 text-center shadow-lg">
      <Menu.Item
        key="/"
        onClick={(e) => {
          toggleDropdown();
          UbahHalaman(e.key);
        }}
      >
        <div className="text-gray-400 font-plus-jakarta hover:text-red-400 hover:underline hover:border-b-2 border-transparent">
          About us
        </div>
      </Menu.Item>
      <Menu.Item
        key="cekongkir"
        onClick={(e) => {
          toggleDropdown();
          UbahHalaman(e.key);
        }}
      >
        <div className="hover:text-red-400 text-gray-400 font-plus-jakarta">
          Shipping
        </div>
      </Menu.Item>
      <Menu.Item
        key="cekresi"
        onClick={(e) => {
          toggleDropdown();
          UbahHalaman(e.key);
        }}
      >
        <div className="hover:text-red-400 text-gray-400 font-plus-jakarta">
          Tracking
        </div>
      </Menu.Item>
      <Menu.Item
        key="karir"
        onClick={(e) => {
          toggleDropdown();
          UbahHalaman(e.key);
        }}
      >
        <div className="hover:text-red-400 text-gray-400 font-plus-jakarta">
          Career
        </div>
      </Menu.Item>
    </Menu>
  );

  const getMenuIcon = () => {
    if (DiClickNihstate) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-align-justify"
        >
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      );
    } else {
      return "X";
    }
  };
  return (
    <div>
      <motion.div
        className={`ph:hidden  ${
          pathname === "/" ? "bg-white " : "bg-white shadow-md "
        } ${
          NilaiScroll > 50
            ? " top-0 fixed transition-all duration-1000  ease-in-out bg-white shadow-md z-50"
            : "top-0 fixed transition-all duration-1000  ease-in-out bg-white shadow-md z-50"
        }   `}
      >
        <div className="w-screen h-[150px] px-20 py-5 flex justify-between items-center">
          <div className="w-[197px] h-[100px] ">
            <img
              className="cursor-pointer h-[100px]"
              src={Race_New}
              alt="Race New Logo"
              key="/"
              onClick={(e) => {
                console.log(e);
                pindahhalaman("/");
              }}
            />
          </div>
          <div className="flex justify-start items-start gap-10 font-plus-jakarta ">
            <div
              id="/"
              onClick={(e) => UbahHalaman(e.target.id)}
              className={`${
                pathname === "/" ? " " : "text-[#F05423] "
              }  text-2xl ${
                NilaiScroll > 50
                  ? " text-[#FEBCA7]"
                  : NilaiScroll <= 3 && pathname === "/"
                  ? "text-[#f05423]"
                  : ""
              }  cursor-pointer hover:border-b-2 font-semibold text-[16px] hover:border-white`}
            >
              About us
            </div>
            <div
              id="cekongkir"
              onClick={(e) => UbahHalaman(e.target.id)}
              className={` text-2xl ${
                pathname === "/" ? " " : "text-[#F05423] font-plus-jakarta  "
              } ${
                NilaiScroll > 50
                  ? " text-[#FEBCA7]"
                  : NilaiScroll <= 3 && pathname === "/"
                  ? "text-[#f05423]"
                  : ""
              } cursor-pointer hover:border-b-2 font-semibold text-[16px] hover:border-white`}
            >
              Shipping
            </div>
            <div
              id="cekresi"
              onClick={(e) => UbahHalaman(e.target.id)}
              className={`${pathname === "/" ? " " : "text-[#F05423]  "}${
                NilaiScroll > 50
                  ? " text-[#FEBCA7]"
                  : NilaiScroll <= 3 && pathname === "/"
                  ? "text-[#f05423]"
                  : ""
              }  text-2xl  cursor-pointer hover:border-b-2 font-semibold text-[16px] hover:border-whitefont-plus-jakarta `}
            >
              Tracking
            </div>
            <div
              id="karir"
              onClick={(e) => UbahHalaman(e.target.id)}
              className={`${pathname === "/" ? " " : "text-[#F05423]  "}${
                NilaiScroll > 50
                  ? " text-[#FEBCA7]"
                  : NilaiScroll <= 3 && pathname === "/"
                  ? "text-[#f05423]"
                  : ""
              } text-2xl  cursor-pointer hover:border-b-2 font-semibold text-[16px] hover:border-white font-plus-jakarta`}
            >
              Career
            </div>
          </div>
        </div>
      </motion.div>

      <>
        <div className="grid grid-cols-2 h-20">
          <div className="flex justify-start mt-2 mb-2">
          <img src={Race_New}   className="w-24 ml-5"/>
        </div>
          <div>
            {" "}
            <div
              className={`md:hidden ${
                DiClickNihstate ? "ph:hidden" : "ph:opacity-100 "
              }  mt-7 h-7 flex items-center ph:flex ph:justify-end mx-auto w-11/12 relative `}
            >
              <Dropdown
                overlay={menu}
                trigger={["click"]}
                placement="bottomLeft"
                
              >
                <Button
                  className={`rounded-full bg-orange-500 mb-5 mt-5 ${
                    pathname === "/"
                      ? "bg-orange-600 bg-opacity-80"
                      : "bg-orange-600 bg-opacity-100"
                  } w-[50px] h-[50px] flex items-center justify-center`}
                  onClick={toggleDropdown}
                >
                  {DiClickNihstate ? (
                    "X"
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-align-justify"
                    >
                      <line x1="3" y1="6" x2="21" y2="6" />
                      <line x1="3" y1="12" x2="21" y2="12" />
                      <line x1="3" y1="18" x2="21" y2="18" />
                    </svg>
                  )}
                </Button>
              </Dropdown>

              {DiClickNihstate && (
                <div className="absolute top-0 right-0 mt-2 mr-2">
                  <button className="text-white" onClick={toggleDropdown}>
                    X
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </>
      <div
        className={`${
          DiClickNihstate === false ? "opacity-0" : "opacity-100 "
        } md:hidden  h-screen ph:hidden bg-white mb-64 w-1/2 fixed z-[1]`}
      >
        <div className="flex justify-end m-3">
          <svg
            onClick={(e) => {
              setDiClickNihstate(false);
              console.log(e);
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-align-right"
          >
            <line x1="21" x2="3" y1="6" y2="6" />
            <line x1="21" x2="9" y1="12" y2="12" />
            <line x1="21" x2="7" y1="18" y2="18" />
          </svg>
        </div>
        <div className="flex justify-center mt-10">
          <img src={Race_New} />
        </div>
        <div className="menu text-center mt-14 space-y-10 font-semibold">
          <ul
            id="/"
            onClick={(e) => UbahHalaman(e.target.id)}
            className="text-[16px] text-[#FEBCA7] font-plus-jakarta"
          >
            About us
          </ul>
          <ul
            id="cekongkir"
            onClick={(e) => UbahHalaman(e.target.id)}
            className="text-[16px] text-[#FEBCA7] font-plus-jakarta"
          >
            Shipping
          </ul>
          <ul
            id="cekresi"
            onClick={(e) => UbahHalaman(e.target.id)}
            className="text-[16px] text-[#FEBCA7] font-plus-jakarta"
          >
            Tracking
          </ul>
          <ul
            id="karir"
            onClick={(e) => UbahHalaman(e.target.id)}
            className="text-[16px] text-[#FEBCA7] font-plus-jakarta"
          >
            Career
          </ul>
          <div className=" text-center  ">
            <p className="mt-64">Contact Us</p>
            <button className="mt-4 w-[92px] font-semibold text-white h-[37px] bg-[#F05423] rounded-lg">
              Contact us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatusbarComponents;
