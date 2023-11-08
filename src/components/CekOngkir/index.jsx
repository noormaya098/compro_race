import React from 'react'
import orangnaikmotor from "../../assets/orangnaikmotor.png"
import sameday from "../../assets/sameday.png"
import Regular from "../../assets/Regular.png"
import FooterComponents from '../Footer'
function CekOngkirComponents() {
    return (
        <div>
            <div className='w-9/12  mt-56 mx-auto '>
                <div className=' mx-auto font-semibold text-[32px]'>Check Service Prices</div>
                <div className='flex justify-start '>
                    <div className='w-screen  h-[114px]  flex justify-start mt-10 border rounded-lg shadow-md'>
                        <div className='flex  m-5 space-x-28'>
                            <div>
                                <p className='text-[#F05423]'>From</p>
                                <input placeholder='Departure City' className='mt-6 border-b border-gray-300'></input>
                            </div>
                            <div className='ml-9'>
                                <p className='text-[#F05423]'>To</p>
                                <input className='mt-6 border-b border-gray-300' placeholder='Destination City'></input>
                            </div>
                            <div className='ml-9'>
                                <p className='text-[#F05423]'>Weight</p>
                                <div className='flex items-center mt-6 '>
                                    <input className=' w-[50px] border-b border-gray-300' placeholder='0' />
                                    <h1 className='text-black font-semibold'>Gram</h1>
                                </div>
                            </div>
                            <div className='ml-11'>
                                <p className='text-[#F05423]'>Asurance</p>
                                <div className='flex items-center mt-6 '>
                                    <select placeholder='Tidak' className='w-full'></select>
                                </div>
                            </div>
                            <div className='ml-9 flex items-center'>
                                <button className='w-[130px] h-[64px] bg-[#F05423] text-white rounded-lg'>
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-28'>
                    <p className='font-semibold text-[32px]'>Our Services</p>
                    <div className='grid grid-cols-3 space-x-20 mt-10'>
                        <div className='w-[258px] h-[325px] '>
                            <img src={orangnaikmotor} />
                            <p className='text-[#F05423] mt-5 text-[24px] font-semibold'>Same day Services</p>
                            <p className='text-[16px] text-[#FE8A66] font-medium'>Delivery on the same day or within 8 hours</p>
                        </div>
                        <div className='w-[258px] h-[325px] '>
                            <img src={sameday} />
                            <p className='text-[#F05423] mt-5 text-[24px] font-semibold'>Next day Services</p>
                            <p className='text-[16px] text-[#FE8A66] font-medium'>Delivery arrives the next day or within 2 hours.</p>
                        </div>
                        <div className='w-[258px] h-[325px] '>
                            <img src={Regular} />
                            <p className='text-[#F05423] mt-5 text-[24px] font-semibold'>Regular Services</p>
                            <p className='text-[16px] text-[#FE8A66] font-medium'>Standard Shipping within 1-3 days.</p>
                        </div>
                    </div>
                </div>
                <p className='text-center mt-36 text-black'>Ada kendala?<span className='text-[#F05423]'>Hubungi kami</span> </p>
            </div>
            <div className='mt-28'>
                <FooterComponents />
            </div>
        </div>
    )
}

export default CekOngkirComponents