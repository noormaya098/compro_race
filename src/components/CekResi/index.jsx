import React, { useState, useEffect } from "react";
import Rectangle from "../../assets/Rectangle 37.png";
import FooterComponents from "../Footer";
import MapsGoogle from "../GoogleMap/GoogleMapsComponents";
import axios from "axios";
import { notification, Table, Tag, Image, Card } from "antd";
import GoogleMpasStore from "../../ZustandStore/GooglemapStore";
import { getCoordinates } from "../../funcs/GetLongLatGoogle";
import { dbdatabase } from "../../firebase/config";
import { doc, onSnapshot } from "firebase/firestore";
import LogoRace from "../../assets/chat-floating.png";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ChatPage from "../../pages/ChatPage";
function CekResiKomponents() {
  const {
    AlamatMuat,
    AlamatBongkar,
    AlamatMuatCoord,
    AlamatBongkarCoord,
    validasimaps,
  } = GoogleMpasStore();
  const [Loading, setLoading] = useState(false);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const nosm = params.get("nosm");
  const [InputanNilai, setInputanNilai] = useState(nosm);
  const [LatLongMuat, setLatLongMuat] = useState("");
  const [LatLongBongkar, setLatLongBongkar] = useState("");
  const [LokasiDriverLongLat, setLokasiDriverLongLat] = useState(null);
  const [searchType, setSearchType] = useState("msm"); // Default search type
  const [showChat, setShowChat] = useState(false);

  const handleOpenChat = () => {
    setShowChat(true);
  };

  const firestore = dbdatabase;
  function copylink() {
    const url = `https://track.rajacepat.com/cekresi/result?nosm=${nosm}`;
    navigator.clipboard.writeText(url).then(
      () => {
        notification.success({
          message: "Link Berhasil di Copy",
        });
        console.log(`Link copied: ${url}`);
      },
      (err) => {
        console.error("Could not copy text: ", err);
      }
    );
  }
  // console.log(`firestore ini`, firestore);
  const unsub = onSnapshot(doc(firestore, "location", "123"), (doc) => {
    console.log("Current data: ", doc.data());
  });
  const [DataHistory, setDataHistory] = useState([]);
  const [dataDetailsemua, setdataDetailsemua] = useState([]);
  const [DriverKalauKosong, setDriverKalauKosong] = useState("");
  const [NopolKosongan, setNopolKosongan] = useState("");
  const [jenisKendaraanKosongan, setjenisKendaraanKosongan] = useState("");
  const navigate = useNavigate();
  function ubahnosm(e) {
    if (nosm === null) {
      return InputanNilai;
    } else {
      return InputanNilai;
    }
  }

  const AmbilDetailAwal = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://apirace.eurekalogistics.co.id/sp/get-sm-detail?msm=${InputanNilai}&searchType=${searchType}`
      );

      const detail = response?.data?.data?.[0];
      console.log(`Data Detail Search:`, detail);

      if (!detail) {
        notification.error({ message: "Data Tidak Ditemukan" });
        return;
      }

      setLatLongBongkar(detail.alamatBongkar);
      setLokasiDriverLongLat(detail.positionDriverNow);
      setDriverKalauKosong(detail.driver);
      setNopolKosongan(detail.nopol);
      setjenisKendaraanKosongan(detail.jenisKendaraan);

      notification.success({ message: "Sukses Mendapatkan Data" });

      GoogleMpasStore.setState({
        AlamatMuat: detail.muat,
        AlamatBongkar: detail.bongkar,
      });

      setdataDetailsemua([detail]);

      GetLatLongMuatBongkar(
        detail.alamatMuat?.alamat,
        detail.alamatBongkar?.alamat
      );

      // Pastikan id_msm ada sebelum memanggil historykendaraan()
      if (detail.idMsm) {
        historykendaraan(detail.idMsm);
      } else {
        console.warn("idMsm tidak ditemukan dalam response API!");
      }
    } catch (error) {
      notification.error({ message: "Terjadi Error saat mengambil detail" });
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (nosm != null) {
      AmbilDetailAwal();
    } else {
      // AmbilDetailAwal();
      GetLatLongMuatBongkar();
    }
  }, [nosm]);

  console.log(`LokasiDriverLongLat`, LokasiDriverLongLat);
  const historykendaraan = async (id_msm) => {
    try {
      const data = await axios.get(
        ` https://apirace.eurekalogistics.co.id/sp/get-history-kendaraan?id_msm=${id_msm}`
      );
      console.log(data?.data);
      setDataHistory([data?.data]);
    } catch (error) {}
  };

  console.log(`data DataHistory`, DataHistory);
  const mapdata = DataHistory[0]?.data.map((i) => i);
  console.log(mapdata);

  async function PindahHalaman(asw) {
    navigate(`/cekresi/result?nosm=${asw}`);
  }

  async function GetLatLongMuatBongkar(AlamatMuat, AlamatBongkar) {
    setLoading(true);
    console.log(`dari func`, AlamatMuat, AlamatBongkar);
    const muat = await getCoordinates(AlamatMuat); // Assuming getCoordinates is the correct function to call
    const bongkar = await getCoordinates(AlamatBongkar);
    setLatLongMuat(muat);
    // setLatLongBongkar(bongkar);
    setLoading(false);
  }
  useEffect(() => {
    if (LatLongMuat && LatLongBongkar) {
    }
  }, [LatLongMuat, LatLongBongkar, nosm]);

  const columns = [
    // {
    //   title: "Customer",
    //   dataIndex: "Customer",
    //   key: "Customer",
    //   render: () => {
    //     return dataDetailsemua[0].customer
    //   }
    // },
    {
      title: "Alamat Asal",
      dataIndex: ["alamatMuat", "alamat"], // Accessing nested property
      key: "alamatMuat",
      render: (e, w) => {
        console.log(e, w);
        return (
          <>
            {dataDetailsemua[0].customer}
            <br />
            <br />
            {e}
          </>
        );
      },
    },
    {
      title: "Alamat Tujuan",
      dataIndex: ["alamatBongkar", "alamat"], // Accessing nested property
      key: "alamatBongkar",
      render: (e, w) => {
        console.log(e, w);
        return (
          <>
            {dataDetailsemua[0].sekolahTujuan}
            <br />
            <br />
            {e}
          </>
        );
      },
    },
    {
      title: "Ikat/Koli/Qty/Berat",
      dataIndex: ["alamatBongkar", "alamat"], // Accessing nested property
      key: "alamatBongkar",
      render: (e, w) => {
        console.log(e, w);
        return (
          <>
            {dataDetailsemua[0].ikat}/{dataDetailsemua[0].koli}/
            {dataDetailsemua[0].qty}/{dataDetailsemua[0].berat}
          </>
        );
      },
    },
  ];
  const columns2 = [
    {
      title: "Nama Driver",
      dataIndex: "driver",
      key: "driver",
      render: (driver) => {
        if (driver === null) {
          return DriverKalauKosong;
        } else {
          return driver;
        }
      },
    },
    {
      title: "No Telp Driver",
      dataIndex: "telp",
      key: "telp",
      render: (telp) => {
        if (telp === "") {
          return dataDetailsemua[0].telp;
        } else {
          return dataDetailsemua[0].telp;
        }
      },
    },
    {
      title: "Jenis Kendaraan",
      dataIndex: "jenisKendaraan",
      key: "jenisKendaraan",
      render: (jenisKendaraan) => {
        if (jenisKendaraan === null) {
          return jenisKendaraanKosongan;
        } else {
          return jenisKendaraan;
        }
      },
    },
    {
      title: "Nopol",
      dataIndex: "Nopol",
      key: "Nopol",
      render: (Nopol) => {
        if (Nopol === null) {
          return NopolKosongan;
        } else {
          return Nopol;
        }
      },
    },
  ];
  console.log(`dataDetailsemua`, dataDetailsemua);
  const columns5 = [
    {
      title: "",
      dataIndex: "driver",
      key: "driver",
      render: (driver) => {
        return dataDetailsemua[0]?.positionDriverNow?.lastUpdate;
      },
    },
    {
      title: "",
      dataIndex: "driver",
      key: "driver",
      render: (driver) => {
        return dataDetailsemua[0]?.positionDriverNow?.address;
      },
    },
  ].flat();
  const columns3 = [
    {
      title: "Waktu",
      dataIndex: "updateDate",
      key: "updateDate",
      render: (updateDate) => {
        return updateDate;
      },
    },
    {
      title: "keterangan",
      dataIndex: "keterangan",
      key: "keterangan",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
  ];
  const columns4 = [
    {
      title: "Update Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "status",
      dataIndex: "keterangan",
      key: "keterangan",
    },

    {
      title: "memo",
      dataIndex: "memo",
      key: "memo",
    },
    {
      title: "foto",
      dataIndex: "foto",
      width: "80px",
      key: "foto",
      render: (foto) => {
        if (
          foto == "https://api.eurekalogistics.co.id/images/no-pictures.png"
        ) {
          return;
        } else {
          return <Image src={foto} />;
        }
      },
    },
  ];

  return (
    <>
      <div className="mt-32 w-11/12 mx-auto  ">
        {/* ini HP */}
        <div className=" md:hidden mt-32 w-11/12 mx-auto  ">
          <img className="" src={Rectangle} />
          <p
            className=" text-center text-[32px] font-bold font-['Plus_Jakarta_Sans'] bg-clip-text text-transparent "
            style={{
              background: "linear-gradient(50deg, #F05423, #A83CCE, #3D62B0)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {/* Lacak Paket Anda */}
            Delivery Tracking
          </p>

          <div className="md:w-[1064px] md:h-[105px] ph:h-[130px] flex flex-col  mt-5 shadow rounded-lg">
            <select
              className="border rounded-md p-2 md:w-[200px] md:h-[60px] font-plus-jakarta"
              onChange={(e) => setSearchType(e.target.value)}
              value={searchType}
            >
              <option value="msm">Resi Race</option>
              <option value="referensi">No Faktur</option>
              <option value="referensi_1">No Surat Jalan</option>
            </select>
            <input
              value={ubahnosm()}
              className="md:w-[874px] md:h-[60px] m-5  border rounded-md"
              onChange={(e) => setInputanNilai(e.target.value)}
              placeholder="Masukkan nomor resi pengiriman anda"
            ></input>
            <div className="flex justify-center flex-row">
              <button
                disabled={Loading}
                className="bg-[#F05423] ph:w-[260px]  p-3 rounded-md h-[45px] text-white font-semibold font-plus-jakarta text-center"
                onClick={async () => {
                  await AmbilDetailAwal();
                  await GetLatLongMuatBongkar();
                  await PindahHalaman();
                }}
              >
                {Loading ? "Loading..." : "Search"}
              </button>
              {DataHistory[0]?.data != null && (
                <button
                  onClick={copylink}
                  className="bg-[#30a953] ph:w-[260px]  p-3 rounded-md h-[45px] ml-5 text-white font-semibold font-plus-jakarta "
                >
                  CopyURL
                </button>
              )}
            </div>
          </div>
          {/* 
          <div className="text-start mt-8 text-[16px] text-[#F05423] font-semibold">
            Detail pengiriman paket anda
          </div> */}
        </div>
        {/* Ini PC */}

        <div className="ph:hidden">
          <p
            className=" text-start text-[32px] font-semibold font-['Plus_Jakarta_Sans'] bg-clip-text text-transparent font-plus-jakarta"
            style={{
              backgroundImage:
                "linear-gradient(92deg, #F05423 11.5%, #A83CCE 46.87%, #3D62B0 85.41%)",
            }}
          >
            {/* Lacak Paket Anda */}
            Delivery Tracking
          </p>

          <div className="md:w-full md:h-[105px] ph:h-[130px] mt-5 shadow rounded-lg">
            <Card
              style={{
                boxShadow: "5px 5px 5px 0 rgba(0, 0, 0, 0.1)", // Ubah nilai ini sesuai dengan bayangan yang Anda inginkan
              }}
            >
              <div className="flex items-center space-x-3 m-5">
                <select
                  className="border rounded-md p-2 md:w-[200px] md:h-[60px] font-plus-jakarta"
                  onChange={(e) => setSearchType(e.target.value)}
                  value={searchType}
                >
                  <option value="msm">Resi Race</option>
                  <option value="referensi">No Faktur</option>
                  <option value="referensi_1">No Surat Jalan</option>
                </select>
                <input
                  onChange={(e) => {
                    ubahnosm(e.target.value);
                    setInputanNilai(e.target.value);
                  }}
                  className="md:w-[874px] md:h-[60px] m-5  border rounded-md font-plus-jakarta "
                  style={{ paddingLeft: "20px" }} // Mengatur warna teks menjadi hitam
                  placeholder="Masukkan nomor resi pengiriman anda"
                  value={ubahnosm()}
                ></input>
                <button
                  disabled={Loading}
                  className="bg-[#F05423] ph:w-[260px]  p-3 rounded-md h-[45px] text-white font-semibold font-plus-jakarta text-center"
                  onClick={() => {
                    PindahHalaman(InputanNilai);
                    AmbilDetailAwal();
                  }}
                >
                  {Loading ? "Loading..." : "Search"}
                </button>
                {DataHistory[0]?.data != null && (
                  <button
                    onClick={copylink}
                    className="bg-[#30a953] ph:w-[260px]  p-3 rounded-md h-[45px] ml-5 text-white font-semibold font-plus-jakarta "
                  >
                    CopyURL
                  </button>
                )}
              </div>
            </Card>
          </div>
        </div>
        {DataHistory[0] && (
          <div className="justify-center grid grid-cols-2 mx-auto mt-32 ph:hidden w-full space-x-3  ">
            <div className=" p-5 border-2 shadow-xl rounded-md   ">
              <div className="font-bold text-start text-[36px]">
                {/* Tracking Kiriman */}
                Tracking Information
              </div>
              <hr />
              <div className="mt-4">
                <p className="text-[27px] font-bold font-plus-jakarta">
                  {/* Detail Alamat */}
                  Detail of delivery
                </p>
                <Table
                  columns={columns}
                  dataSource={dataDetailsemua}
                  pagination={false}
                />

                <p className="text-[27px] font-bold mt-3 font-plus-jakarta">
                  History Pengiriman
                </p>
                <Table
                  columns={columns4}
                  dataSource={dataDetailsemua?.[0]?.statusKendaraan}
                  pagination={false}
                />
                {/* <Table
                  className="mt-1"
                  columns={columns3}
                  dataSource={mapdata}
                  pagination={false}
                /> */}
              </div>
            </div>
            <div className="flex flex-col p-5 shadow-xl rounded-md border-2">
              <div className="">
                <MapsGoogle
                  LatLongMuat={LatLongMuat}
                  LatLongBongkar={LatLongBongkar}
                  LokasiDriverLongLat={LokasiDriverLongLat}
                />
                <Table
                  className="mt-1"
                  columns={columns2}
                  dataSource={DataHistory}
                  pagination={false}
                />
                <div style={{ fontWeight: "bold" }} className="mt-5">
                  Lokasi Driver Terkini
                </div>
                <Table
                  columns={columns5}
                  dataSource={dataDetailsemua}
                  pagination={false}
                />

                {/* </div> */}
                {/* <div className="mt-3  h-full  border-2 shadow-md rounded-md">
                
                {/* <img alt='Foto' /> */}
              </div>
            </div>
          </div>
        )}
        {/* INI Maps HP */}
        {DataHistory[0] && (
          <div className=" md:hidden ">
            <div className="table-responsive overflow-auto mx-auto flex justify-center">
              <div className="mt-4 w-full">
                <p className="text-[27px] font-bold font-plus-jakarta">
                  Detail Alamat
                </p>
                <Table
                  columns={columns}
                  dataSource={dataDetailsemua}
                  pagination={false}
                />
                <Table
                  className="mt-1"
                  columns={columns2}
                  dataSource={DataHistory}
                  pagination={false}
                />
                {/* <p className="text-[27px] font-bold mt-3 font-plus-jakarta">
                  History Pengiriman
                </p>
                <Table
                  className="mt-1"
                  columns={columns3}
                  dataSource={mapdata}
                  pagination={false}
                /> */}
              </div>
            </div>
            <div className="flex flex-col p-5 shadow-xl rounded-md border-2 mt-10 mb-10 font-plus-jakarta">
              <div className="">
                <MapsGoogle
                  LatLongMuat={LatLongMuat}
                  LatLongBongkar={LatLongBongkar}
                  LokasiDriverLongLat={LokasiDriverLongLat}
                />
              </div>
              <div className="mt-3  h-full  border-2 shadow-md rounded-md font-plus-jakarta">
                <Table
                  columns={columns4}
                  dataSource={dataDetailsemua?.[0]?.statusKendaraan}
                  pagination={false}
                />
                {/* <img alt='Foto' /> */}
              </div>
            </div>
          </div>
        )}
        {validasimaps === false && (
          <div className="justify-center flex mt-32 ph:hidden">
            <img className="" src={Rectangle} />
          </div>
        )}

        <div></div>
        <p className="ph:hidden text-center mt-24 mb-24 text-black font-plus-jakarta">
          Any Problems?
          <span className="text-[#F05423] font-plus-jakarta ml-2 cursor-pointer">
            Contact our Customer Service
          </span>{" "}
        </p>
      </div>

      <FooterComponents />
      {/* Floating Chat Icon with Logo */}
      <>
        {/* Chat button */}
        <div className="fixed bottom-5 right-5 z-50">
          <div
            onClick={handleOpenChat}
            className="cursor-pointer flex items-center justify-center"
          >
            <img
              src={LogoRace}
              alt="chat"
              className="w-[3rem] h-[3rem] object-contain"
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
    </>
  );
}

export default CekResiKomponents;
