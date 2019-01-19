import React from 'react';

const Contact = () => (
  <section className="contact">
    <div className="contact__container">
      <div className="contact__content">
        <h2 className="contact__title">Kontakt</h2>
        <p className="contact__text">
          Le Brande Jakub Pusiak
          <br />
          Tuchorza 65, 64-232 Tuchorza
        </p>
      </div>
      <div className="contact__data">
        <div className="contact__data-item">
          <div className="contact__method">
            <span className="contact__method-icon contact__method-icon--alt fa-envelope" />
            <h3 className="contact__method-content">
              <a href="mailto:jakub@lebrande.pl">jakub@lebrande.pl</a>
            </h3>
          </div>
        </div>
        <div className="contact__data-item">
          <div className="contact__method">
            <span className="contact__method-icon contact__method-icon--alt fa-phone" />
            <h3 className="contact__method-content">+48 731 044 940</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
