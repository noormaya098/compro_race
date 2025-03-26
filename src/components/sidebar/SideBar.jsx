import { useNavigate } from "react-router-dom";
import Race_New_Baru from "../../assets/Race_New_Baru.png";
import ClickSiteBarStore from "../../ZustandStore/ClickSiteBar";
function SideBarComponents() {
  const { setDiClickNih, DiClickNih } = ClickSiteBarStore();
  function ClickSitebarnihbang(e) {
    setDiClickNih(true);
  }
  // console.log(`DiClickNih`, DiClickNih);
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
  return (
    <div
      className={`${
        DiClickNih === false ? "hidden" : "block "
      } md:hidden  h-screen bg-white mb-64 w-1/2 fixed `}
    >
      <div className="flex justify-end m-3">
        <svg
          onClick={() => setDiClickNih(false)}
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
        <img src={Race_New_Baru} />
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
          <p className="mt-64 font-plus-jakarta">Contact Us</p>
          <button className="mt-4 w-[92px] font-semibold text-white h-[37px] bg-[#F05423] rounded-lg font-plus-jakarta">
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
}

export default SideBarComponents;
