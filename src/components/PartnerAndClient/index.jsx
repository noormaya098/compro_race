import React from 'react'
import erlangga from "../../assets/partner/image 1.png"
import imacro from "../../assets/partner/image 2.png"
import kitabeli from "../../assets/partner/image 3.png"
import cosmax from "../../assets/partner/image 7.png"
import superindo from "../../assets/partner/image 4.png"
import eubook from "../../assets/partner/EurekaBookhouse 1.png"
import jadnio from "../../assets/partner/image 10.png"
import jaja from "../../assets/partner/Jajaid 1.png"
import uni from "../../assets/partner/image 5.png"
import auriga from "../../assets/partner/image 6.png"
import rate from "../../assets/partner/image 8.png"
import chilibeli from "../../assets/partner/image 9.png"
function PartnerComponents() {
    return (
        <div className='w-9/12 mx-auto mt-56 mb-32'>
            <h1 className='text-center text-[48px] font-semibold'>Partner and Clients</h1>
            <div className='wrap-gambar grid grid-cols-4 mt-20 ph:space-x-5'>
                <div>
                    <img src={erlangga} />
                </div>
                <div>
                    <img src={imacro} />
                </div>
                <div>
                    <img src={kitabeli} />
                </div>
                <div>
                    <img src={cosmax} />
                </div>

                <div className='items-center mt-8'>
                    <img src={superindo} />
                </div>
                <div className='items-center flex mt-8' >
                    <img src={eubook} />
                </div>
                <div className='items-center flex mt-8' >
                    <img src={jadnio} />
                </div>
                <div className='items-center flex mt-8' >
                    <img src={jaja} />
                </div>
                <div className='items-center flex mt-5' >
                    <img src={uni} />
                </div>
                <div className='items-center flex mt-5' >
                    <img src={auriga} />
                </div>
                <div className='items-center flex mt-5' >
                    <img src={rate} />
                </div>
                <div className='items-center flex mt-5' >
                    <img src={chilibeli} />
                </div>

            </div>
            <div className='w-full'>
                <h1 className='text-[48px] text-center font-semibold mt-16 ph:text-[32px] ph:mt-[50px]'>Excited to collaborate with  RACE?</h1>
                <div className=' text-center justify-items-center flex justify-center w-full'>
                    <button className='bg-[#F05423] w-[150px] h-[60px] font-semibold text-white mt-6 text-[24px] mb-64 ph:rounded-xl ph:mt-12 rounded-md'>Contact us</button>
                </div>
            </div>
        </div>
    )
}

export default PartnerComponents