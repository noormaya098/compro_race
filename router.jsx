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
                <Route path='*' element={"Page Not Found"} />
            </Routes>
        </div>
    )
}

export default RouterPage