import React, { useEffect } from "react";
import StatusbarComponents from "../../components/statusbar";
import CekOngkirComponents from "../../components/CekOngkir";
import SideBarComponents from "../../components/sidebar/SideBar";

function CekOngkirPages() {
  // Scroll to top ketika halaman dibuka
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="">
      {/* <SideBarComponents/> */}
      <StatusbarComponents />
      <CekOngkirComponents />
    </div>
  );
}

export default CekOngkirPages;
