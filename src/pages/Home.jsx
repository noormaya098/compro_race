import React from 'react';
import Welcome from '../components/welcome';
import StatusbarComponents from '../components/statusbar';
import SejarahComponeent from '../components/Sejarah';
import OurService from '../components/Ourservice';
import PartnerComponents from '../components/PartnerAndClient';

function Home() {
  return (
    <div className=' overflow-hidden'>
      <Welcome />

      <div className='w-9/12 mx-auto'>
      <SejarahComponeent />
      </div>
      <OurService/>
      <PartnerComponents/>
    </div>
  );
}

export default Home;
