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
                            <p className='text-[24px] font-plus-jakarta'>Raja Cepat</p>
                            <p className='text-[16px] font-plus-jakarta'>Company Profile</p>
                            <p className='text-[16px] font-plus-jakarta'>Contact Us</p>
                            <p className='text-[16px] font-plus-jakarta'>Career</p>

                        </div>
                        <div className='mt-5 text-white'>
                            <p className='text-[24px] font-plus-jakarta'>Product</p>
                            <p className='text-[16px] font-plus-jakarta'>Delivery Service</p>
                            <p className='text-[16px] font-plus-jakarta'>Fulfillment Service</p>
                        </div>
                        <div className='mt-5 text-white'>
                            <p className='text-[24px] font-plus-jakarta'>Delivery</p>
                            <p className='text-[16px] font-plus-jakarta'>Tracking</p>
                            <p className='text-[16px] font-plus-jakarta'>Shipping Cost</p>
                            <p className='text-[16px] font-plus-jakarta'>Our Locations</p>
                        </div>
                        <div className='mt-5 text-white'>
                            <p className='text-[24px] font-plus-jakarta '>Others</p>
                            <p className='text-[16px] font-plus-jakarta'>FAQ</p>
                            <p className='text-[16px] font-plus-jakarta'>Partnership</p>
                        </div>
                        <div className='mt-5 text-white'>
                            <p className='text-[24px] font-plus-jakarta'>Download Apps</p>
                            <img className='mt-3 w-[150px] h-[48px]' src={googleplay} />
                            <img className="mt-3 w-[150px] h-[48px]" src={appstore} />
                        </div>
                    </div>
                </div>
            </div>

            {/* mobile */}
            <div className='w-full hidden ph:block bottom-0 h-[700px] overflow-hidden ' style={{
                backgroundImage: `url(${BackgroundMobile})`, backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                <div className='w-9/12 mx-auto mt-10 '>
                    <img className='w-[88px] h-[57px]' src={RaceLogo} />
                    <div className='text-white mt-4'>
                        <ul className='text-[16px] font-plus-jakarta font-bold ph:mb-2'>Raja Cepat</ul>
                        <ul className='text-[14px] ph:mb-2 font-plus-jakarta'>Company Profile</ul>
                        <ul className='text-[14px] ph:mb-2 font-plus-jakarta'>Contact Us</ul>
                        <ul className='text-[14px] ph:mb-2 font-plus-jakarta'>Career</ul>
                        <ul className='mt-5 text-[16px] font-plus-jakarta font-bold ph:mb-2'>Product</ul>
                        <ul className='text-[14px] ph:mb-2 font-plus-jakarta'>Delivery Service</ul>
                        <ul className='text-[14px] ph:mb-2 font-plus-jakarta'>Fulfillment Service</ul>
                        <ul className='mt-5 text-[16px] font-plus-jakarta ph:mb-2'>Delivery</ul>
                        <ul className='text-[14px] ph:mb-2 font-plus-jakarta'>Tracking</ul>
                        <ul className='text-[14px] ph:mb-2 font-plus-jakarta'>Shipping Cost</ul>
                        <ul className='text-[14px] ph:mb-2 font-plus-jakarta'>Locations</ul>
                        <ul className='mt-5 text-[16px] font-plus-jakarta ph:mb-2 font-bold'>Others</ul>
                        <ul className='text-[14px] ph:mb-2 font-plus-jakarta'>FAQ</ul>
                        <ul className='text-[14px] ph:mb-2 font-plus-jakarta'>Partnership</ul>
                        <ul className='mt-5 text-[16px] font-plus-jakarta'>Download Apps</ul>
                    </div>
                    <div className='grid grid-cols-2 mt-3 w-full '>
                        <div className='ph:mr-3'>
                            <img src={googleplay} />
                        </div>
                        <div className='ph:ml-3'>
                            <img src={appstore} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FooterComponents