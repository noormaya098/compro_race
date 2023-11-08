import React from 'react'
import Rectangle from "../../assets/Rectangle 37.png"
import FooterComponents from '../Footer'
function CekResiKomponents() {
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
                        <input className='md:w-[874px] md:h-[60px] m-5  border rounded-md' placeholder='Masukkan nomor resi pengiriman anda'></input>
                        <div className='flex justify-center'>
                            <button className='bg-[#F05423] ph:w-[260px]  p-3 rounded-md h-[45px] text-white font-semibold '>Search</button>
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
                        <input className='md:w-[874px] md:h-[60px] m-5  border rounded-md' placeholder='Masukkan nomor resi pengiriman anda'></input>
                        <button className='bg-[#F05423] ph:w-[260px]  p-3 rounded-md h-[45px] text-white font-semibold '>Search</button>
                    </div>
                </div>
                <div className='justify-center flex mt-32 ph:hidden'>
                    <img className='' src={Rectangle} />
                </div>
                <p className='ph:hidden text-center mt-24 mb-24 text-black'>Ada kendala?<span className='text-[#F05423]'>Hubungi kami</span> </p>
            </div>
            <FooterComponents />
        </>
    )
}

export default CekResiKomponents