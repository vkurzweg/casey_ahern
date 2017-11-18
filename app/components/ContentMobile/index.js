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
      <div className="row" style={{ margin: '0 auto', width: '100%', marginTop: '10%', backgroundColor: '#DEED96' }}>
        <div style={{ padding: '2%' }}>
          <h2 style={{ fontFamily: 'Ubuntu', fontSize: '22px', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '5px' }}>coming soon</h2>
        </div>
      </div>
      <div style={{ backgroundColor: '#FAFAFA' }}>
        <Image style={{ display: 'block', margin: '0 auto', paddingTop: '5%', paddingBottom: '2%' }} cloudName="kurzweg" publicId="casey_wireframe" width="175" quality="auto" crop="scale" responsive />
      </div>
      <div className="row" style={{ margin: '0 auto', width: '100%', backgroundColor: '#DEED96', marginBottom: '5%' }}>
        <div className="col-xs-2" style={{ padding: '2%' }}>
          <Image style={{ display: 'block', margin: '0 auto', paddingTop: '4%' }} cloudName="kurzweg" publicId="casey_star" width="40" quality="auto" crop="scale" responsive />
        </div>
        <div className="col-xs-8">
          <h1 style={{ fontFamily: 'Ubuntu', fontSize: '18px', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '5px', paddingTop: '5px', paddingBottom: '10px' }}>caseyahern.com</h1>
        </div>
        <div className="col-xs-2" style={{ padding: '2%' }}>
          <Image style={{ display: 'block', margin: '0 auto', paddingTop: '4%' }} cloudName="kurzweg" publicId="casey_star" width="40" quality="auto" crop="scale" responsive />
        </div>
      </div>
      <h3 style={{ textAlign: 'center', fontFamily: 'Ubuntu', color: 'white', textTransform: 'uppercase', fontSize: '16px', paddingTop: '2%', paddingBottom: '5%', letterSpacing: '3px'}}>contact: casey@caseyahern.com</h3>
    </div>
  );
}

ContentDesktop.propTypes = {

};

export default ContentDesktop;
