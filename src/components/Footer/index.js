import React from 'react';

import SocialMedia from '../SocialMedia';
import Copyright from '../Copyright';

const Footer = () => (
  <footer className="footer">
    <div className="footer__container">
      <div className="footer__wrapper">
        <SocialMedia />
        <Copyright />      
      </div>
    </div>
  </footer>
);

export default Footer;
