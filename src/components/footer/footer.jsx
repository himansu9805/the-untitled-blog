import React from 'react';

import './footer.css';
import TransparentLogo from '../../assets/logos/logo_transparent.png';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer__container">
        <div className="footer__brand">
          <img width="125px" src={TransparentLogo} alt="logo" />
          <span className="footer__brand__text">© The Untitled Blog, {new Date().getFullYear()}</span>
          <span className="love__text">Made with ❤️ in India!</span>
        </div>
        <div className="footer__content">
          <span className="footer__text">About</span>
          <span className="footer__text">Team</span>
          <span className="footer__text">Owner Profile</span>
          <span className="footer__text">Services</span>
        </div>
        <div className="footer__content">
          <span className="footer__text">Contact Us</span>
          <span className="footer__address">House No. 1479A, Sector 47B</span>
          <span className="footer__address">Chandigarh, India</span>
          <span className="footer__address">Mobile No. +91 63515 94043</span>
        </div>
        <div className="footer__content">
          <span className="footer__text">Sign Up for updates</span>
          <input className="footer__input" type="text" placeholder="Email" />
          <button className="footer__button">SUBSCRIBE</button>
        </div>
      </div>
    );
  }
}

export default Footer;