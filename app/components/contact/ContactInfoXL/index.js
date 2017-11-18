/**
*
* ContactInfo
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Image } from 'cloudinary-react';



function ContactInfo() {
  return (
    <div className="col-sm-6" style={{  }}>
      <div>
        <div style={{ textAlign: 'center', marginTop: '5%', color: '#7C4DFF', textTransform: 'uppercase', letterSpacing: '1px' }}>
          <h4 style={{ fontSize: '30px' }}>Aloha Brothers Surf Lessons</h4>
          <h5 style={{ marginTop: '2%', fontSize: '26px' }}>Venice, CA</h5>
        </div>
        <div style={{ fontSize: '20px', marginLeft: '10%'}}>
          <p><span className="glyphicon glyphicon-phone" style={{ fontSize: '18px', padding: '1%', paddingRight: '3%', marginTop: '1%' }}></span>(323) 316-8108</p>
          <p><span className="glyphicon glyphicon-envelope" style={{ fontSize: '18px', padding: '1%', paddingRight: '3%', marginTop: '1%' }}></span>nickfowler9@gmail.com</p>
          <p><span className="glyphicon glyphicon-time" style={{ fontSize: '18px', padding: '1%', paddingRight: '3%', marginTop: '1%' }}></span>Monday - Sunday: 7:00 AM to 5:00 PM</p>
        </div>
        <h4 style={{ textAlign: 'center', marginTop: '5%', marginBottom: '3%', color: '#7C4DFF', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '26px' }} >Surf Gear & Rentals</h4>
        <div style={{ fontSize: '20px', marginLeft: '10%'}}>
          <p><b>Rider Shack</b></p>
          <p>13211 W Washington Blvd <br /> Los Angeles, CA 90066</p>
        </div>
        <div style={{ fontSize: '20px', marginLeft: '10%', marginTop: '2%', marginBottom: '5%' }}>
          <p><b>Mollusk</b></p>
          <p>1600 Pacific Ave <br /> Venice, CA 90291</p>
        </div>
      </div>
    </div>
  );
}

ContactInfo.propTypes = {

};

export default ContactInfo;
