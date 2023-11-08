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
                </div>
                {/* Ini PC */}
                <div>
                    <p className=" text-start text-[32px] font-semibold font-['Plus_Jakarta_Sans'] bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(92deg, #F05423 11.5%, #A83CCE 46.87%, #3D62B0 85.41%)' }}>
                        Lacak Paket Anda
                    </p>
                    <div className='md:w-[1064px] md:h-[105px] ph:h-[130px] mt-5 shadow rounded-lg'>
                        <input className='md:w-[874px] md:h-[60px] m-5  border rounded-md' placeholder='Masukkan nomor resi pengiriman anda'></input>
                        <button className='bg-[#F05423] ph:w-[260px]  p-3 rounded-md h-[45px] text-white font-semibold '>Search</button>
                    </div>
                </div>
                <div className='justify-center flex mt-32'>
                    <img className='' src={Rectangle} />
                </div>
                <p className='text-center mt-24 mb-24 text-black'>Ada kendala?<span className='text-[#F05423]'>Hubungi kami</span> </p>
            </div>
            <FooterComponents />
        </>
    )
}

export default CekResiKomponents