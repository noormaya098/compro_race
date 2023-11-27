import React, { useState, useEffect } from "react";
import Rectangle from "../../assets/Rectangle 37.png";
import FooterComponents from "../Footer";
import MapsGoogle from "../GoogleMap/GoogleMapsComponents";
import axios from "axios";
import { notification, Table, Tag, Image } from "antd";
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
  console.log(`nosm`, nosm);
  const [InputanNilai, setInputanNilai] = useState(nosm);
  const [LatLongMuat, setLatLongMuat] = useState("");
  const [LatLongBongkar, setLatLongBongkar] = useState("");
  const [LokasiDriverLongLat, setLokasiDriverLongLat] = useState(null);
  const firestore = dbdatabase;
  console.log(`firestore ini`, firestore);
  const unsub = onSnapshot(doc(firestore, "location", "123"), (doc) => {
    console.log("Current data: ", doc.data());
  });
  const [DataHistory, setDataHistory] = useState([]);
  const [dataDetailsemua, setdataDetailsemua] = useState([]);
  const navigate = useNavigate();

  const AmbilDetailAwal = async () => {
    setLoading(true);
    try {
      const data = await axios.get(`
            https://apirace.eurekalogistics.co.id/sp/get-sm-detail?msm=${InputanNilai}`);
      console.log(`data`, data?.data?.data[0]);
      setLokasiDriverLongLat(data?.data?.data?.[0]?.positionDriverNow);
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
          data?.data?.data[0]?.muat,
          data?.data?.data[0]?.bongkar
        );
        historykendaraan(data?.data?.data[0]?.idMsm);
      }
      setLoading(false);
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
    }
  }, []);

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

  console.log(DataHistory[0]?.data);
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
    setLatLongBongkar(bongkar);
    setLoading(false);
  }
  useEffect(() => {
    if (LatLongMuat && LatLongBongkar) {
    }
  }, [LatLongMuat, LatLongBongkar, nosm]);

  const columns = [
    {
      title: "Alamat Asal",
      dataIndex: "muat",
      key: "muat",
    },
    {
      title: "Alamat Tujuan",
      dataIndex: "bongkar",
      key: "bongkar",
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
        if (jenisKendaraan === "") {
          return "-";
        } else {
          return jenisKendaraan;
        }
      },
    },
    {
      title: "Nopol",
      dataIndex: "kodeKendaraan",
      key: "kodeKendaraan",
      render: (kodeKendaraan) => {
        if (kodeKendaraan === "") {
          return "-";
        } else {
          return kodeKendaraan;
        }
      },
    },
    {
      title: "Nama Driver",
      dataIndex: "driver",
      key: "driver",
      render: (driver) => {
        if (driver === "") {
          return "-";
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
    // {
    //     title: 'Update Date',
    //     dataIndex: 'updateDate',
    //     key: 'pickupDate',
    //     render: (pickupDate) => {
    //         return pickupDate
    //     }
    // },
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
            className=" text-center text-[32px] font-bold font-['Plus_Jakarta_Sans'] bg-clip-text text-transparent"
            style={{
              background: "linear-gradient(50deg, #F05423, #A83CCE, #3D62B0)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Lacak Paket Anda
          </p>

          <div className="md:w-[1064px] md:h-[105px] ph:h-[130px] flex flex-col  mt-5 shadow rounded-lg">
            <input
              className="md:w-[874px] md:h-[60px] m-5  border rounded-md"
              onChange={(e) => setInputanNilai(e.target.value)}
              placeholder="Masukkan nomor resi pengiriman anda"
            ></input>
            <div className="flex justify-center">
              <button
                disabled={Loading}
                className="bg-[#F05423] ph:w-[260px]  p-3 rounded-md h-[45px] text-white font-semibold "
                onClick={async () => {
                  await AmbilDetailAwal();
                  await GetLatLongMuatBongkar();
                  await PindahHalaman();
                }}
              >
                {Loading ? "Loading..." : "Search"}
              </button>
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
            className=" text-start text-[32px] font-semibold font-['Plus_Jakarta_Sans'] bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(92deg, #F05423 11.5%, #A83CCE 46.87%, #3D62B0 85.41%)",
            }}
          >
            Lacak Paket Anda
          </p>

          <div className="md:w-full md:h-[105px] ph:h-[130px] mt-5 shadow rounded-lg">
            <input
              onChange={(e) => setInputanNilai(e.target.value)}
              className="md:w-[874px] md:h-[60px] m-5  border rounded-md"
              placeholder="Masukkan nomor resi pengiriman anda"
              value={nosm}
            ></input>
            <button
              disabled={Loading}
              className="bg-[#F05423] ph:w-[260px]  p-3 rounded-md h-[45px] text-white font-semibold "
              onClick={() => {
                PindahHalaman(InputanNilai);
                AmbilDetailAwal();
              }}
            >
              {Loading ? "Loading..." : "Search"}
            </button>
            {dataDetailsemua == [] && (
              <button className="bg-[#30a953] ph:w-[260px]  p-3 rounded-md h-[45px] ml-5 text-white font-semibold ">
                CopyURL
              </button>
            )}
          </div>
        </div>
        {!LatLongMuat && (
          <div className="justify-center grid grid-cols-2 mx-auto mt-32 ph:hidden w-full space-x-3  ">
            <div className=" p-5 border-2 shadow-xl rounded-md   ">
              <div className="font-bold text-center text-[23px]">
                Tracking Kiriman
              </div>
              <div className="mt-4">
                <p className="text-[27px] font-bold">Detail Alamat</p>
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
                <p className="text-[27px] font-bold mt-3">History Pengiriman</p>
                <Table
                  className="mt-1"
                  columns={columns3}
                  dataSource={mapdata}
                  pagination={false}
                />
              </div>
            </div>
            <div className="flex flex-col p-5 shadow-xl rounded-md border-2">
              <div className="">
                <MapsGoogle
                  LatLongMuat={LatLongMuat}
                  LatLongBongkar={LatLongBongkar}
                  LokasiDriverLongLat={LokasiDriverLongLat}
                />
              </div>
              <div className="mt-3  h-full  border-2 shadow-md rounded-md">
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
        {/* INI Maps HP */}
        {LatLongMuat == null && (
          <div className=" md:hidden overflow-auto">
            <div className="mt-4 ">
              <p className="text-[27px] font-bold">Detail Alamat</p>
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
              <p className="text-[27px] font-bold mt-3">History Pengiriman</p>
              <Table
                className="mt-1"
                columns={columns3}
                dataSource={mapdata}
                pagination={false}
              />
            </div>
            <div className="flex flex-col p-5 shadow-xl rounded-md border-2 mt-10 mb-10">
              <div className="">
                <MapsGoogle
                  LatLongMuat={LatLongMuat}
                  LatLongBongkar={LatLongBongkar}
                  LokasiDriverLongLat={LokasiDriverLongLat}
                />
              </div>
              <div className="mt-3  h-full  border-2 shadow-md rounded-md">
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
        <p className="ph:hidden text-center mt-24 mb-24 text-black">
          Ada kendala?<span className="text-[#F05423]">Hubungi kami</span>{" "}
        </p>
      </div>
      <FooterComponents />
    </>
  );
}

export default CekResiKomponents;
