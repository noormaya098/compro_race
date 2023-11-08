import React from 'react'
import RaceLogo from "../../assets/bgfooterrace.png"
import footerbg from "../../assets/BackgroundFooter.png"
import googleplay from "../../assets/image 11.png"
import BackgroundMobile from "../../assets/bgfootermobile.png"
import appstore from "../../assets/image 12.png"
function FooterComponents() {
    return (
        <>
            <div className='w-full ph:hidden bg-red-400 bottom-0 h-[253px] overflow-hidden ' style={{
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
                </div>
            </div>

            {/* mobile */}
            <div className='w-full hidden ph:block bottom-0 h-[612px] overflow-hidden ' style={{
                backgroundImage: `url(${BackgroundMobile})`, backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                <div className='w-9/12 mx-auto mt-10'>
                    <img className='w-[88px] h-[57px]' src={RaceLogo} />
                    <div className='text-white mt-4'>
                        <ul className='text-[16px]'>Perusahaan</ul>
                        <ul className='text-[13px]'>Profil perusahaan</ul>
                        <ul className='text-[13px]'>Hubungi Kami</ul>
                        <ul className='text-[13px]'>karir</ul>
                        <ul className='mt-5 text-[16px]'>Produk</ul>
                        <ul className='text-[13px]'>Delivery Service</ul>
                        <ul className='text-[13px]'>Fulfillment Service</ul>
                        <ul className='mt-5 text-[16px]'>Pengiriman</ul>
                        <ul className='text-[13px]'>Lacak Resi</ul>
                        <ul className='text-[13px]'>Cek Tarif</ul>
                        <ul className='text-[13px]'>Lokasi</ul>
                        <ul className='mt-5 text-[16px]'>Lainnya</ul>
                        <ul className='text-[13px]'>FAQ</ul>
                        <ul className='text-[13px]'>Kemitraan</ul>
                        <ul className='mt-5 text-[16px]'>Download Apps</ul>
                    </div>
                    <div className='grid grid-cols-2 mt-3 w-full '>
                        <div>
                            <img src={googleplay} />
                        </div>
                        <div>
                            <img src={appstore} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FooterComponents