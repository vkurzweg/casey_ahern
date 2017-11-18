/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import Helmet from 'react-helmet';
import MediaQuery from 'react-responsive';
import { Image } from 'cloudinary-react';
import ContentDesktop from 'components/ContentDesktop';
import ContentMobile from 'components/ContentMobile';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
    this.toggleColor = this.toggleColor.bind(this);
  }

  toggleColor() {
    this.setState((prevState) => {
      return { hover: !prevState.hover };
    });
  }

  render() {
    return (
      <div style={{ top: '0', backgroundColor: '#141213' }}>
        <Helmet
          title="Casey Ahern Music - Official Site"
          meta={[
            { name: "description", content: "Casey Ahern is a country music singer and musician from Southern California." },
          ]}
        />
        <MediaQuery maxWidth={767}>
          <ContentMobile />
        </MediaQuery>

        <MediaQuery minWidth={768}>
          <ContentDesktop />
        </MediaQuery>

      </div>
    );
  }
}


// <div style={{ height: '300px', backgroundImage: `url(${Office})`, backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center' }} />

