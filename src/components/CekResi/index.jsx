import React, { useState, useEffect } from 'react'
import Rectangle from "../../assets/Rectangle 37.png"
import FooterComponents from '../Footer'
import MapsGoogle from '../GoogleMap/GoogleMapsComponents'
import axios from 'axios'
import { notification, Table,Tag } from 'antd'
import GoogleMpasStore from '../../ZustandStore/GooglemapStore'
import { getCoordinates } from '../../funcs/GetLongLatGoogle'
function CekResiKomponents() {
    const [InputanNilai, setInputanNilai] = useState("")
    const { AlamatMuat, AlamatBongkar, AlamatMuatCoord, AlamatBongkarCoord, validasimaps } = GoogleMpasStore()
    const [LatLongMuat, setLatLongMuat] = useState("")
    const [LatLongBongkar, setLatLongBongkar] = useState("")

    const [DataHistory, setDataHistory] = useState([])
    const [dataDetailsemua, setdataDetailsemua] = useState([]);
    const AmbilDetailAwal = async () => {
        try {
            const data = await axios.get(`
        https://elogs.eurekalogistics.co.id/data_json/operasional/get_detail_sm?msm=${InputanNilai}`)
            if (data.data === null) {
                notification.error({
                    message: "Data Tidak Ditemukan"
                })
            } else {
                notification.success({
                    message: "Sukses Mendapatkan Data"
                })
                GoogleMpasStore.setState({
                    AlamatMuat: data?.data?.alamat_muat,
                    AlamatBongkar: data?.data?.alamat_bongkar
                })
                setdataDetailsemua([data.data]);
                GetLatLongMuatBongkar(data?.data?.alamat_muat, data?.data?.alamat_bongkar);
                historykendaraan(data?.data?.id_msm)


            }
        } catch (error) {
            notification.error({
                message: "Terjadi Error"
            })
        }
    }

    const historykendaraan = async (id_msm) => {
        try {
            const data = await axios.get(`https://api.eurekalogistics.co.id/sm/get-history-kendaraan?id_msm=${id_msm}`)
            console.log(data?.data);
            setDataHistory([data?.data])
        } catch (error) {

        }
    }
    console.log(DataHistory[0].data);
    const mapdata = DataHistory[0].data.map((i) =>
        i
    )
    console.log(mapdata);
    async function GetLatLongMuatBongkar(AlamatMuat, AlamatBongkar) {
        const muat = await getCoordinates(AlamatMuat); // Assuming getCoordinates is the correct function to call
        const bongkar = await getCoordinates(AlamatBongkar);
        setLatLongMuat(muat)
        setLatLongBongkar(bongkar)
    }
    useEffect(() => {
        if (LatLongMuat && LatLongBongkar) {
        }
    }, [LatLongMuat, LatLongBongkar]);



    const columns = [
        {
            title: 'Alamat Asal',
            dataIndex: 'alamat_muat',
            key: 'alamat_muat',
        },
        {
            title: 'Alamat Tujuan',
            dataIndex: 'alamat_bongkar',
            key: 'alamat_bongkar',
        },

    ];
    const columns2 = [
        {
            title: 'Customer',
            dataIndex: 'Customer',
            key: 'Customer',
        },
        {
            title: 'Jenis Kendaraan',
            dataIndex: 'jenisKendaraan',
            key: 'jenisKendaraan',
        },
        {
            title: 'Nopol',
            dataIndex: 'kodeKendaraan',
            key: 'kodeKendaraan',
        },
        {
            title: 'Nama Driver',
            dataIndex: 'driver',
            key: 'driver',
        },

    ];
    const columns3 = [
        {
            title: 'Waktu',
            dataIndex: 'pickupDate',
            key: 'pickupDate',
            render : (item)=>{
                <Tag>{item.pickupDate}</Tag>
            }
        },
        {
            title: 'keterangan',
            dataIndex: 'keterangan',
            key: 'keterangan',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
    ];
    return (
        <>
            <div className='mt-32 w-9/12 mx-auto  '>
                {/* ini HP */}
                <div className=' md:hidden mt-32 w-11/12 mx-auto  '>
                    <img className='' src={Rectangle} />
                    <p className=" text-center text-[32px] font-semibold font-['Plus_Jakarta_Sans'] bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(92deg, #F05423 11.5%, #A83CCE 46.87%, #3D62B0 85.41%)' }}>
                        Lacak Paket Anda
                    </p>

                    <div className='md:w-[1064px] md:h-[105px] ph:h-[130px] flex flex-col  mt-5 shadow rounded-lg'>
                        <input className='md:w-[874px] md:h-[60px] m-5  border rounded-md' onChange={(e) => setInputanNilai(e.target.value)} placeholder='Masukkan nomor resi pengiriman anda'></input>
                        <div className='flex justify-center'>
                            <button className='bg-[#F05423] ph:w-[260px]  p-3 rounded-md h-[45px] text-white font-semibold ' onClick={async () => {
                                await AmbilDetailAwal();
                                await GetLatLongMuatBongkar()
                            }}>Search</button>
                        </div>
                    </div>

                    <div className='text-start mt-8 text-[16px] text-[#F05423] font-semibold'>Detail pengiriman paket anda</div>
                    <div className='table border-2  w-full h-[404px] mb-10 rounded-xl mt-3 '>
                        <div className='m-5'>
                            <p>Nomor Resi</p>
                            <p>ASDKJ1329132101</p>
                            <p className='mt-3'>Tanggal Pengiriman</p>
                            <p>03 Oktober 2023</p>
                            <p className='mt-3'>Status</p>
                            <p>On Delivery</p>
                            <p className='mt-3'>Proses</p>
                            <p>Sedang Diantar</p>
                            <p className='mt-3'>Waktu Pengiriman</p>
                            <p>18:00 WIB</p>
                            <p className='mt-3'>Detail Status</p>
                            <p>Sedang Transit di DC Cakung (Jakarta Timur)</p>
                            <div className='flex justify-center'>
                                <button className='h-[37px] w-full rounded-lg mt-5 text-orange-600 bg-white border-2 border-orange-600'>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Ini PC */}
                <div className='ph:hidden'>
                    <p className=" text-start text-[32px] font-semibold font-['Plus_Jakarta_Sans'] bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(92deg, #F05423 11.5%, #A83CCE 46.87%, #3D62B0 85.41%)' }}>
                        Lacak Paket Anda
                    </p>

                    <div className='md:w-[1064px] md:h-[105px] ph:h-[130px] mt-5 shadow rounded-lg'>
                        <input onChange={(e) => setInputanNilai(e.target.value)} className='md:w-[874px] md:h-[60px] m-5  border rounded-md' placeholder='Masukkan nomor resi pengiriman anda'></input>
                        <button className='bg-[#F05423] ph:w-[260px]  p-3 rounded-md h-[45px] text-white font-semibold ' onClick={AmbilDetailAwal}>Search</button>
                    </div>
                </div>
                <div className='justify-center grid grid-cols-2 mx-auto mt-32 ph:hidden w-full space-x-3 '>
                    <div className=' p-5 border-2 shadow-xl rounded-md'>
                        <div className='font-bold text-center text-[23px]'>Tracking Kiriman</div>
                        <div className='mt-4'>
                            <p className='text-[27px] font-bold'>Detail Alamat</p>
                            <Table columns={columns} dataSource={dataDetailsemua} pagination={false} />
                            <Table className='mt-1' columns={columns2} dataSource={DataHistory} pagination={false} />
                            <p className='text-[27px] font-bold mt-3'>History Pengiriman</p>
                            <Table className='mt-1' columns={columns3} dataSource={mapdata} pagination={false}  />


                        </div>
                    </div>
                    <div className='flex flex-col p-5 shadow-xl rounded-md border-2'>
                        <div className=''>
                            <MapsGoogle LatLongMuat={LatLongMuat} LatLongBongkar={LatLongBongkar} />

                        </div>
                    </div>
                </div>
                {validasimaps === false && (
                    <div className='justify-center flex mt-32 ph:hidden'>
                        <img className='' src={Rectangle} />
                    </div>
                )}

                <div>
                </div>
                <p className='ph:hidden text-center mt-24 mb-24 text-black'>Ada kendala?<span className='text-[#F05423]'>Hubungi kami</span> </p>
            </div>
            <FooterComponents />
        </>
    )
}

export default CekResiKomponents