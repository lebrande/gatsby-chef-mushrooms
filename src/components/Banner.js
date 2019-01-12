import React from 'react';

const Banner = ({ title, subtitle }) => (
  <section id="banner" className="major">
    <div className="inner">
      <header className="major">
        <h1>{title}</h1>
      </header>
      <div className="content">
        <p>{subtitle}</p>
        <ul className="actions">
          <li>
            <a href="#products" className="button next scrolly">
              Zobacz produkty
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default Banner;
