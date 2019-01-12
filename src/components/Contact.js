import React from 'react';

const Contact = () => (
  <section id="contact">
    <div className="inner">
      <section>
        <header className="major">
          <h2>Kontakt</h2>
        </header>
        <p>
          Le Brande Jakub Pusiak
          <br />
          Tuchorza 65, 64-232 Tuchorza
        </p>
      </section>
      <section className="split">
        <section>
          <div className="contact-method">
            <span className="icon alt fa-envelope" />
            <h3>
              <a href="mailto:jakub@lebrande.pl">jakub@lebrande.pl</a>
            </h3>
          </div>
        </section>
        <section>
          <div className="contact-method">
            <span className="icon alt fa-phone" />
            <h3>+48 731 044 940</h3>
          </div>
        </section>
      </section>
    </div>
  </section>
);

export default Contact;
