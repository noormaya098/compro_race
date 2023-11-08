import React from 'react'
import RaceLogo from "../../assets/bgfooterrace.png"
import footerbg from "../../assets/BackgroundFooter.png"
import googleplay from "../../assets/image 11.png"
import appstore from "../../assets/image 12.png"
function FooterComponents() {
    return (
        <div className='w-screen bg-red-400 bottom-0 h-[404px] ' style={{
            backgroundImage: `url(${footerbg})`, backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <div className='w-11/12 mx-auto'>
                <div className=' grid grid-cols-5  '>
                    <div className='mt-16'>
                        <img src={RaceLogo} />
                    </div>
                    <div className='mt-16 text-white'>
                        <p className='text-[28px]'>Perusahaan</p>
                        <p>Profil Perusahaan</p>
                        <p>Hubungan Kami</p>
                        <p>Karir</p>
                        <p className='text-[28px] mt-8'>Lainnya</p>
                        <p>FAQ</p>
                        <p>Kemitraan</p>
                    </div>
                    <div className='mt-16 text-white'>
                        <p className='text-[28px]'>Produk</p>
                        <p>Delivery Service</p>
                        <p>Fulfillment Service</p>
                    </div>
                    <div className='mt-16 text-white'>
                        <p className='text-[28px]'>Pengiriman</p>
                        <p>Lacak Resi</p>
                        <p>Cek Tarif</p>
                        <p>Lokasi</p>
                    </div>
                    <div className='mt-16 text-white'>
                        <p className='text-[28px]'>Download Apps</p>
                        <img className='mt-3' src={googleplay} />
                        <img className="mt-3" src={appstore} />
                    </div>
                </div>
                <p className='text-center mt-16 text-white font-semibold text-[12px]'>this website was powered by EurekaDev</p>
            </div>
        </div>
    )
}

export default FooterComponents