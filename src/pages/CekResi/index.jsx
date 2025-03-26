import React, { useEffect } from "react";
import StatusbarComponents from "../../components/statusbar";
import CekResiKomponents from "../../components/CekResi";
import SideBarComponents from "../../components/sidebar/SideBar";

function CekResi() {
  // Scroll to top ketika halaman dibuka
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="">
      {/* <SideBarComponents /> */}
      <StatusbarComponents />
      <CekResiKomponents />
    </div>
  );
}

export default CekResi;
