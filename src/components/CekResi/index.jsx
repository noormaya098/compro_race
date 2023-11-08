import React from 'react'
import Rectangle from "../../assets/Rectangle 37.png"
import FooterComponents from '../Footer'
function CekResiKomponents() {
    return (
        <div className=''>
        <div className='w-9/12 mx-auto mt-40 '>
            <p className="text-[32px] font-semibold font-['Plus_Jakarta_Sans'] bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(92deg, #F05423 11.5%, #A83CCE 46.87%, #3D62B0 85.41%)' }}>
                Lacak Paket Anda
            </p>
            <div className='w-[1064px] h-[105px]flex items-center  mt-5 shadow rounded-lg'>
                <input className='w-[874px] h-[60px] m-5 border rounded-lg' placeholder='Masukkan nomor resi pengiriman anda'></input>
                <button className='bg-[#F05423] p-3 rounded-md w-[130px] h-[45px] text-white font-semibold '>Search</button>
            </div>
            <div className='mt-16 justify-center flex'>
                <img src={Rectangle} />
            </div>
            <p className='text-center mt-24 text-[#A6A6A6]'>Ada kendala?<span className='text-[#F05423]'>Hubungi kami</span> </p>
        </div>
        <div className='mt-28'>
        <FooterComponents/>
        </div>
        </div>
    )
}

export default CekResiKomponents