import React from 'react'
import orangnaikmotor from "../../assets/orangnaikmotor.png"
import sameday from "../../assets/sameday.png"
import Regular from "../../assets/Regular.png"
import FooterComponents from '../Footer'
import SideBarComponents from '../sidebar/SideBar'
import ClickSiteBarStore from '../../ZustandStore/ClickSiteBar'
import { Select } from 'antd'
import "./Carausel.css"
function CekOngkirComponents() {
    const DiClickNihstate = ClickSiteBarStore(state => state.DiClickNih)
    console.log(`ini di cekongkir`, DiClickNihstate);

    return (
        <div>
            <div className=''>

                {/* <SideBarComponents/> */}
                <div className={`${DiClickNihstate == false ? "" : ""} ph:hidden`}></div>
                <div className={`mobile w-9-12 bg-red-300 ${DiClickNihstate === true ? "" : "mt-10"} ph:hidden`}>
                    <div className='mt-'>

                        <div className=' mx-auto font-semibold text-[32px] '>Check Service Prices</div>
                    </div>
                </div>
                <div>
                    <div className='w-9/12 ph:hidden mt-56 mx-auto '>
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
                    <div className='mt-28 ph:hidden'>
                        <FooterComponents />
                    </div>
                </div>
                <div className='md:hidden'>
                <div>
                    <p className='text-center text-[24px] mt-6 font-semibold
                    '>Check Service Prices</p>
                </div>
                <div className='flex justify-center'>
                    <div className='h-[329px] w-[280px] border-2 border-orange-400 rounded-lg mt-6 shadow-md'>
                        <div className='m-3'>
                            <div className=''>
                                <p>From</p>
                                <Select placeholder="Departure City" style={{ width: "100%", marginTop: 2 }}></Select>
                                <p className='mt-5'>To</p>
                                <Select placeholder="Destination City" style={{ width: "100%", marginTop: 2 }}></Select>
                            </div>
                            <div className='grid grid-cols-2  mt-5'>
                                <div>
                                    <p>Weight</p>
                                    <div className='mt-3 grid grid-cols-2'>
                                        <input placeholder='0' className='border-b-2'></input>
                                        <div className='font-bold ml-3'>Kg</div>
                                    </div>
                                </div>
                                <div>
                                    <p>Asurance</p>
                                    <Select placeholder="None" style={{ width: "100%", marginTop: 5 }}></Select>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center mt-9'>
                            <button className='bg-[#F05423] w-[240px] h-[40px] text-white font-semibold rounded-lg'>Search</button>
                        </div>
                    </div>
                </div>
                <div className='h-[350px]  mx-auto mt-16'>
                    <div className='container mx-auto overflow-hidden relative'>
                        <div id="carousel" className='flex animate-slide h-[350px] w-screen  space-x-5 '>
                            <div className='w-[403px] h-[280px]  shadow-lg rounded-lg'>
                                <img src={orangnaikmotor} alt="Service 1" />
                                <div className=' m-2 '>
                                    <p>Same day Services</p>
                                    <p className='mt-2'>Delivery on the same day or within 8 hours</p>
                                </div>
                            </div>
                            <div className='w-[403px] h-[280px] shadow-lg rounded-lg'>
                                <img src={sameday} alt="Service 2" />
                                <div className='  m-2'>

                                    <p>Next day Services</p>
                                    <p className='mt-2'>Delivery arrives the next day or within 2 hours.</p>
                                </div>
                            </div>
                            <div className='w-[403px] h-[280px] shadow-lg rounded-lg'>
                                <img src={Regular} alt="Service 3" />
                                <div className='  m-2'>

                                    <p>Regular Services</p>
                                    <p className='mt-2'>Standard Shipping within 1-3 days.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-24'>
                    <FooterComponents />
                </div>
                </div>
            </div>
        </div>

    )
}

export default CekOngkirComponents