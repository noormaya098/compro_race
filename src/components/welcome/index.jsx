// Welcome.js
import React from 'react';
import Background from "../../assets/Background.png";
import Race_New_Bg from "../../assets/Race_New _Bg.png";
import StatusbarComponents from '../statusbar';
import SejarahComponeent from '../Sejarah';

function Welcome() {
    return (
        <>
        <div className='h-screen overflow-hidden' style={{ backgroundImage: `url(${Background})` }}>
            <StatusbarComponents />
            <div className='text-white  mt-32 '>
                <p className='text-[48px] text-center'>Welcome to Raja Cepat</p>
                <p className='text-center text-[24px] mx-auto  w-9/12 mt-8'>In this site, you can get information about the company profile, service programs provided, <br />check your delivery receipt and careers.<br />
                    Let’s scroll through this website to get to know more about Raja Cepat!</p>
            </div>
            <div className='flex justify-center mt-10'>
                <img src={Race_New_Bg} />
            </div>
        </div>
        </>
    );
}

export default Welcome;
