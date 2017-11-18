/**
*
* ContentDesktop
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Image } from 'cloudinary-react';


function ContentDesktop() {
  return (
    <div className="container" style={{ width: '100%', padding: '0', backgroundColor: '#141213', zIndex: '5' }}>
      <div className="row" style={{ margin: '0 auto', width: '100%', marginTop: '5%', backgroundColor: '#DEED96' }}>
        <div className="col-sm-5" style={{ padding: '2%' }}>
          <h1 style={{ fontFamily: 'Ubuntu', fontSize: '42px', textAlign: 'right', textTransform: 'uppercase', letterSpacing: '5px' }}>coming soon</h1>
        </div>
        <div className="col-sm-2" style={{ padding: '1%' }}>
          <Image style={{ display: 'block', margin: '0 auto' }} cloudName="kurzweg" publicId="casey_star" width="100" quality="auto" crop="scale" responsive />
        </div>
        <div className="col-sm-5" style={{ padding: '2%' }}>
          <h2 style={{ fontFamily: 'Ubuntu', fontSize: '42px', textTransform: 'uppercase', letterSpacing: '5px' }}>coming soon</h2>
        </div>
      </div>
      <div style={{ backgroundColor: '#FAFAFA' }}>
        <Image style={{ display: 'block', margin: '0 auto', paddingTop: '2%', paddingBottom: '2%' }} cloudName="kurzweg" publicId="casey_wireframe_desktop" width="600" quality="auto" crop="scale" responsive />
      </div>
      <div className="row" style={{ margin: '0 auto', width: '100%', backgroundColor: '#DEED96' }}>
        <div style={{ padding: '2%' }}>
          <h1 style={{ fontFamily: 'Ubuntu', fontSize: '42px', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '5px' }}>caseyahern.com</h1>
        </div>
      </div>
      <h3 style={{ textAlign: 'center', fontFamily: 'Ubuntu', color: 'white', textTransform: 'uppercase', fontSize: '24px', paddingTop: '2%', paddingBottom: '10%', letterSpacing: '3px'}}>contact: casey@caseyahern.com</h3>
    </div>
  );
}

ContentDesktop.propTypes = {

};

export default ContentDesktop;
