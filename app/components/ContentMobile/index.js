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
      <div className="row" style={{ margin: '0 auto', width: '100%', marginTop: '15%', backgroundColor: '#DEED96' }}>
        <div style={{ padding: '2%' }}>
          <h1 style={{ fontFamily: 'Ubuntu', fontSize: '22px', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '5px' }}>coming soon</h1>
        </div>
      </div>
      <div style={{ backgroundColor: '#FAFAFA' }}>
        <Image style={{ display: 'block', margin: '0 auto', paddingTop: '10%', paddingBottom: '10%' }} cloudName="kurzweg" publicId="casey_wireframe" width="200" quality="auto" crop="scale" responsive />
      </div>
      <div className="row" style={{ margin: '0 auto', width: '100%', backgroundColor: '#DEED96', marginBottom: '35%' }}>
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
    </div>
  );
}

ContentDesktop.propTypes = {

};

export default ContentDesktop;
