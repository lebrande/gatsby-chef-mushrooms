import React from 'react';

const SocialMedia = () => (
  <ul className="social-media">
    <li className="social-media__item">
      <a
        href="https://www.facebook.com/chefmushrooms/"
        className="social-media__icon social-media__icon--alt fa-facebook"
      >
        <span>Facebook</span>
      </a>
    </li>
    <li className="social-media__item">
      <a
        href="https://www.instagram.com/chefmushrooms/"
        className="social-media__icon social-media__icon--alt fa-instagram"
      >
        <span>Instagram</span>
      </a>
    </li>
  </ul>
);

export default SocialMedia;
