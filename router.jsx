import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './src/pages/Home'

function RouterPage() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='*' element={"Page Not Found"} />
            </Routes>
        </div>
    )
}

export default RouterPage