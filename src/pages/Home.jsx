import React from 'react';
import Welcome from '../components/welcome';
import StatusbarComponents from '../components/statusbar';
import SejarahComponeent from '../components/Sejarah';
import OurService from '../components/Ourservice';

function Home() {
  return (
    <div className=' overflow-hidden'>
      <Welcome />

      <div className='w-9/12 mx-auto'>
      <SejarahComponeent />
      </div>
      <OurService/>
    </div>
  );
}

export default Home;
