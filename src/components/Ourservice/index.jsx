import React from 'react'
import orangnaikmotor from "../../assets/orangnaikmotor.png"
import sameday from "../../assets/sameday.png"
import Regular from "../../assets/Regular.png"
import fulfilment from "../../assets/fulfilment 1.png"
function OurService() {
    return (
        <>
            <div className='bg-gradient-to-t from-[#FFFFFF00] to-[#F05423]  '>
                <div>
                    <h1 className='text-center text-[64px] text-white font-semibold  mt-28'>Our Service</h1>
                </div>
                <div className='w-9/12 mx-auto mt-16  '>
                    <h1 className='text-white text-[48px] font-semibold'>Charter & Courier</h1>
                    <div className='card-wrapper grid grid-cols-3 mt-16 '>
                        <div className='w-[341px] bg-white h-[468px] rounded-[20px]'>
                            <div className='flex justify-center '>
                                <img src={orangnaikmotor} />
                            </div>
                            <div className='mx-7 '>
                                <p className='text-[#F05423] font-semibold text-start text-[32px]'>Same day Services</p>
                                <p className='text-[#FE8A66] font-medium text-start text-[20px] mt-3'>Delivery on the same day or within 8 hours</p>
                            </div>
                        </div>
                        <div className='w-[341px] bg-white h-[468px] rounded-[20px]'>
                            <div className='flex justify-center '>
                                <img src={sameday} />
                            </div>
                            <div className='mx-7 '>
                                <p className='text-[#F05423] font-semibold text-start text-[32px]'>Next day Services</p>
                                <p className='text-[#FE8A66] font-medium text-start text-[20px] mt-3'>Delivery arrives the next day or within 2 hours.</p>
                            </div>
                        </div>
                        <div className='w-[341px] bg-white h-[468px] rounded-[20px]'>
                            <div className='flex justify-center '>
                                <img src={Regular} />
                            </div>
                            <div className='mx-7 '>
                                <p className='text-[#F05423] font-semibold text-start text-[32px]'>Regular Services</p>
                                <p className='text-[#FE8A66] font-medium text-start text-[20px] mt-3'>Standard Shipping within 1-3 days.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='w-9/12 mx-auto mt-16'>
                <div className=' w-[1064px] h-[385px] '>
                    <p className='text-[#F05423] text-[36px] font-semibold '>E-commerce Fulfillment</p>
                    <div className=' grid grid-cols-2 mt-8'>
                        <div>
                            <img src={fulfilment} />
                        </div>
                        <div className='items-center '>
                            <p className='mt-9 text-[20px] text-[#F05423]'>Race serving all operational fulfillment activities, starting from the Inbound process, QC Checking, Labeling, Storing, Packing, Outbound to Delivery</p>
                            <p className='mt-12 text-[20px] text-[#F05423]'>Freeing SMEs and business people from the burden of fixed costs, Fulfillment Service as well as providing opportunities to develop business in strategic areas in Indonesia with minimal risk</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurService