import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './src/pages/Home'
import CekResi from './src/pages/CekResi'

function RouterPage() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cekresi' element={<CekResi />} />
                <Route path='/cekongkir' element={<CekResi />} />
                <Route path='/karir' element={<CekResi />} />
                <Route path='*' element={<div className=''>
                    <div className='h-screen flex justify-center items-center text-[90px] w-screen  font-bold'>Halaman Tidak Ditemukan</div>
                </div>} />
            </Routes>
        </div>
    )
}

export default RouterPage