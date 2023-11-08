import React from 'react'
import RaceLogo from "../../assets/bgfooterrace.png"
import footerbg from "../../assets/BackgroundFooter.png"
import googleplay from "../../assets/image 11.png"
import appstore from "../../assets/image 12.png"
function FooterComponents() {
    return (
        <div className='w-full bg-red-400 bottom-0 h-[253px] overflow-hidden ' style={{
            backgroundImage: `url(${footerbg})`, backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <div className='w-11/12 mx-auto'>
                <div className=' grid grid-cols-6  '>
                    <div className='mt-5'>
                        <img className='w-[88px] h-[57px]' src={RaceLogo} />
                    </div>
                    <div className='mt-5 text-white'>
                        <p className='text-[24px]'>Perusahaan</p>
                        <p className='text-[16px]'>Profil Perusahaan</p>
                        <p className='text-[16px]'>Hubungan Kami</p>
                        <p className='text-[16px]'>Karir</p>

                    </div>
                    <div className='mt-5 text-white'>
                        <p className='text-[24px]'>Produk</p>
                        <p className='text-[16px]'>Delivery Service</p>
                        <p className='text-[16px]'>Fulfillment Service</p>
                    </div>
                    <div className='mt-5 text-white'>
                        <p className='text-[24px]'>Pengiriman</p>
                        <p className='text-[16px]'>Lacak Resi</p>
                        <p className='text-[16px]'>Cek Tarif</p>
                        <p className='text-[16px]'>Lokasi</p>
                    </div>
                    <div className='mt-5 text-white'>
                        <p className='text-[24px] '>Lainnya</p>
                        <p className='text-[16px]'>FAQ</p>
                        <p className='text-[16px]'>Kemitraan</p>
                    </div>
                    <div className='mt-5 text-white'>
                        <p className='text-[24px]'>Download Apps</p>
                        <img className='mt-3 w-[150px] h-[48px]' src={googleplay} />
                        <img className="mt-3 w-[150px] h-[48px]" src={appstore} />
                    </div>
                </div>
                {/* <p className='text-center mt-16 text-white font-semibold text-[12px]'>this website was powered by EurekaDev</p> */}
            </div>
        </div>
    )
}

export default FooterComponents