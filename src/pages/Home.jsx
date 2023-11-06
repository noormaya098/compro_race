import React from 'react';
import Welcome from '../components/welcome';
import StatusbarComponents from '../components/statusbar';
import SejarahComponeent from '../components/Sejarah';

function Home() {
  return (
    <div className=' overflow-hidden'>
      <Welcome />
      <SejarahComponeent />
    </div>
  );
}

export default Home;
