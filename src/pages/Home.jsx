import React from 'react';
import Welcome from '../components/welcome';
import StatusbarComponents from '../components/statusbar';
import SejarahComponeent from '../components/Sejarah';
import OurService from '../components/Ourservice';
import PartnerComponents from '../components/PartnerAndClient';
import FooterComponents from '../components/Footer';
import SideBarComponents from '../components/sidebar/SideBar';

function Home() {
  return (
    <div className=' overflow-hidden'>
      {/* <SideBarComponents/> */}
      <Welcome />
      <div className='w-9/12 mx-auto'>
        <SejarahComponeent />
      </div>
      <OurService />
      <PartnerComponents />
      <FooterComponents />
    </div>
  );
}

export default Home;
