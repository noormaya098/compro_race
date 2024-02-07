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
import { useLocation, useNavigate, useParams } from "react-router-dom";
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
  const [DriverKalauKosong, setDriverKalauKosong] = useState("")
  const [NopolKosongan, setNopolKosongan] = useState("")
  const [jenisKendaraanKosongan, setjenisKendaraanKosongan] = useState("")
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
      const data = await axios.get(`
            https://apirace.eurekalogistics.co.id/sp/get-sm-detail?msm=${InputanNilai}`);
      console.log(
        `data detail search`,
        data?.data?.data?.[0]?.positionDriverNow
      );
      setLatLongBongkar(data?.data?.data?.[0]?.alamatBongkar)
      setLokasiDriverLongLat(data?.data?.data?.[0]?.positionDriverNow);
      setDriverKalauKosong(data?.data?.data?.[0]?.driver)
      setNopolKosongan(data?.data?.data?.[0]?.nopol)
      setjenisKendaraanKosongan(data?.data?.data?.[0]?.jenisKendaraan)
      if (data?.data === null) {
        notification.error({
          message: "Data Tidak Ditemukan",
        });
      } else {
        notification.success({
          message: "Sukses Mendapatkan Data",
        });
        GoogleMpasStore.setState({
          AlamatMuat: data?.data?.data[0]?.muat,
          AlamatBongkar: data?.data?.data[0]?.bongkar,
        });
        setdataDetailsemua([data?.data?.data[0]]);
        GetLatLongMuatBongkar(
          data?.data?.data[0]?.alamatMuat?.alamat,
          data?.data?.data[0]?.alamatBongkar?.alamat
        );

        historykendaraan(data?.data?.data[0]?.idMsm);
      }
      setLoading(false);
      console.log(
        `data?.data?.data[0]?.data?.alamatMuat?.alamat,`,
        data?.data?.data[0]?.alamatMuat
      );
    } catch (error) {
      setLoading(false);
      notification.error({
        message: "Terjadi Error",
      });
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
    } catch (error) { }
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
    {
      title: "Alamat Asal",
      dataIndex: ["alamatMuat", "alamat"], // Accessing nested property
      key: "alamatMuat",
    },
    {
      title: "Alamat Tujuan",
      dataIndex: ["alamatBongkar", "alamat"], // Accessing nested property
      key: "alamatBongkar",
    },
    {
      title: "No Telp Driver",
      dataIndex: "telp",
      key: "telp",
      render: (telp) => {
        if (telp === "") {
          return "-";
        } else {
          return telp;
        }
      },
    },
  ];
  const columns2 = [
    {
      title: "Customer",
      dataIndex: "Customer",
      key: "Customer",
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
  ];
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
      title: 'Update Date',
      dataIndex: 'updateDate',
      key: 'pickupDate',
      render: (pickupDate) => {
        return pickupDate
      }
    },
    {
      title: "status",
      dataIndex: "keterangan",
      key: "keterangan",
    },
    {
      title: "foto",
      dataIndex: "foto",
      width: "80px",
      key: "foto",
      render: (foto) => {
        return <Image src={foto} />;
      },
    },
  ];
  return (
    <>
      <div className="mt-32 w-9/12 mx-auto  ">
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
                  dataSource={DataHistory[0]?.data}
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
            <div className="flex flex-col p-5 shadow-xl h-[40rem] rounded-md border-2">
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
                <p className="text-[27px] font-bold mt-3 font-plus-jakarta">
                  History Pengiriman
                </p>
                <Table
                  className="mt-1"
                  columns={columns3}
                  dataSource={mapdata}
                  pagination={false}
                />
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
                  dataSource={DataHistory[0]?.data}
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
    </>
  );
}

export default CekResiKomponents;
