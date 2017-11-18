/*
 *
 * ContactPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import MediaQuery from 'react-responsive';
import Nav from 'components/common/Nav';
import NavXL from 'components/common/NavXL';
import NavMobile from 'components/common/NavMobile';
import ContactInfo from 'components/contact/ContactInfo';
import ContactInfoXL from 'components/contact/ContactInfoXL';
import SuccessModal from 'components/contact/SuccessModal';
import { selectContact, selectForm } from './selectors';
import { createMessage, openModal, closeModal } from './actions';
import ContactFormContainer from './ContactFormContainer';
import ContactFormContainerXL from './ContactFormContainerXL';
import Footer from 'components/common/Footer';
import { Image } from 'cloudinary-react';


export class ContactPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      isButtonShowing: true,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((prevState) => {
      return { isButtonShowing: !prevState.isButtonShowing };
    });
    this.props.createMessage();
  }

  render() {
    return (
      <div style={{ backgroundColor: '#ECECEC' }}>
        <Helmet
          title="Aloha Brothers Surf Lessons - Venice & O'ahu - Contact Us"
          meta={[
            { name: "description", content: "All levels, ages, and sizes welcome! Fill out our contact form or send us an email to book a surf lesson in Southern California or O'ahu, Hawaii." },
          ]}
        />
        <MediaQuery minWidth={1824}>
          <NavXL />
          <div className="container" style={{ width: '90%' }}>
            <div className="row" style={{ paddingTop: '5%' }}>
              <div className="col-sm-4">
                <Image className="item" cloudName="kurzweg" publicId="portugal1" width="400" alt="Aloha Brothers on Canadian television" style={{ width: '100%', paddingTop: '6%', marginLeft: '5%', marginTop: '2%', paddingBottom: '1%', display: 'block', margin: '0 auto' }} />
              </div>
              <div className="col-sm-4">
                <Image className="item" cloudName="kurzweg" publicId="portugal2" width="400" alt="Aloha Brothers on Dutch television" style={{ width: '100%', paddingTop: '6%', marginLeft: '5%', marginTop: '5%', paddingBottom: '1%', display: 'block', margin: '0 auto' }} />
              </div>
              <div className="col-sm-4">
                <Image className="item" cloudName="kurzweg" publicId="portugal3" width="400" alt="Aloha Brothers on Dutch television" style={{ width: '100%', paddingTop: '6%', marginLeft: '5%', marginTop: '5%', paddingBottom: '1%', display: 'block', margin: '0 auto' }} />
              </div>
            </div>
            <div className="row">
              <ContactFormContainerXL
                handleSubmit={this.handleSubmit}
                modalIsOpen={this.props.modalIsOpen}
                openModal={this.props.openModal}
                closeModal={this.props.closeModal}
                isCreateFailed={this.props.isCreateFailed}
                isButtonShowing={this.state.isButtonShowing}
              />
              <ContactInfoXL />
              <SuccessModal
                isOpen={this.props.modalIsOpen}
                closeModal={this.props.closeModal}
              />
            </div>
          </div>
        </MediaQuery>
        <MediaQuery minWidth={768} maxWidth={1823}>
          <Nav />
        </MediaQuery>
        <MediaQuery maxWidth={767}>
          <NavMobile />
          <div style={{ height: '3em' }}></div>
        </MediaQuery>
        <MediaQuery maxWidth={1823}>
          <div className="container">
            <div className="row">
              <ContactFormContainer
                handleSubmit={this.handleSubmit}
                modalIsOpen={this.props.modalIsOpen}
                openModal={this.props.openModal}
                closeModal={this.props.closeModal}
                isCreateFailed={this.props.isCreateFailed}
                isButtonShowing={this.state.isButtonShowing}
              />
              <ContactInfo />
              <SuccessModal
                isOpen={this.props.modalIsOpen}
                closeModal={this.props.closeModal}
              />
            </div>
          </div>
        </MediaQuery>
        <Footer />
      </div>
    );
  }
}

ContactPage.propTypes = {
};

function mapStateToProps(state) {
  const contactState = selectContact(state);
  const isCreateFailed = contactState.get('isCreateFailed');
  const modalIsOpen = contactState.get('modalIsOpen');
  return {
    isCreateFailed,
    modalIsOpen,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createMessage: () => dispatch(createMessage()),
    openModal: () => dispatch(openModal()),
    closeModal: () => dispatch(closeModal()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);

