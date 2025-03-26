import React, { useState, useEffect, useRef } from "react";
import Welcome from "../components/welcome";
import StatusbarComponents from "../components/statusbar";
import SejarahComponeent from "../components/Sejarah";
import OurService from "../components/Ourservice";
import PartnerComponents from "../components/PartnerAndClient";
import FooterComponents from "../components/Footer";
import SideBarComponents from "../components/sidebar/SideBar";
import { app, dbdatabase } from "../firebase/config";
import { doc, onSnapshot } from "firebase/firestore";
import LogoRace from "../assets/chat-floating.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ChatPage from "./ChatPage";

function Home() {
  const [showChat, setShowChat] = useState(false);

  const handleOpenChat = () => {
    setShowChat(true);
  };

  // Scroll to top ketika halaman dibuka
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className=" overflow-hidden">
      {/* <SideBarComponents/> */}
      <Welcome />
      <div className="w-12/12 mx-auto">
        <SejarahComponeent />
      </div>
      <OurService />
      <PartnerComponents />
      <FooterComponents />

      {/* Floating Chat Icon with Logo */}
      <>
        {/* Chat button */}
        <div className="fixed bottom-5 right-5 z-50">
          <div
            onClick={handleOpenChat}
            className="cursor-pointer   flex items-center justify-center"
          >
            <img
              src={LogoRace}
              alt="chat"
              className="w-[3rem] h-[3rem] object-contain "
            />
          </div>
        </div>

        {/* Chat Box */}
        {showChat && (
          <div className="fixed bottom-24 right-5 z-50 bg-white p-4 rounded-xl shadow-xl w-96">
            <button
              onClick={() => setShowChat(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl font-bold"
            >
              &times;
            </button>{" "}
            {/* Lebar dikurangi ke w-80 */}
            <ChatPage />
          </div>
        )}
      </>
    </div>
  );
}

export default Home;
