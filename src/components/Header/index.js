import React, { Fragment } from 'react';

const Header = ({ title, description }) => (
  <Fragment>
    <h1>
      {title}
    </h1>
    <p>{description}</p>
  </Fragment>
);

export default Header;
