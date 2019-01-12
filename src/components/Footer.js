import React from 'react';

const Footer = () => (
  <footer id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a
            href="https://www.facebook.com/chefmushrooms/"
            className="icon alt fa-facebook"
          >
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/chefmushrooms/"
            className="icon alt fa-instagram"
          >
            <span className="label">Instagram</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>&copy; Chef Mushrooms</li>
      </ul>
    </div>
  </footer>
);

export default Footer;
