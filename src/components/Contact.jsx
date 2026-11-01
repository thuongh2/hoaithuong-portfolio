import React from "react";

const RESUME =
  "https://drive.google.com/file/d/1k7fk0yExVC-8fDyTBiCE3j7SwBB3kpoB/view?usp=drive_link";

const Contact = () => {
  return (
    <section name="contact" id="contact" className="section contact">
      <div className="container contact__grid">
        <div className="contact__head">
          <h2>Contact</h2>
          <p className="lead">Open to backend and platform engineering roles.</p>
          <dl className="contact__list">
            <div>
              <dt>Email</dt>
              <dd>
                <a href="mailto:hoaithuong.data@gmail.com">hoaithuong.data@gmail.com</a>
              </dd>
            </div>
            <div>
              <dt>LinkedIn</dt>
              <dd>
                <a href="https://www.linkedin.com/in/thuongvh/" target="_blank" rel="noreferrer">
                  linkedin.com/in/thuongvh
                </a>
              </dd>
            </div>
            <div>
              <dt>GitHub</dt>
              <dd>
                <a href="https://github.com/thuongh2" target="_blank" rel="noreferrer">
                  github.com/thuongh2
                </a>
              </dd>
            </div>
            <div>
              <dt>Résumé</dt>
              <dd>
                <a href={RESUME} target="_blank" rel="noreferrer">
                  View on Google Drive
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <form
          method="POST"
          action="https://getform.io/f/6da10446-cc7b-4f59-a0e9-e788bbe426ce"
          className="contact__form cut"
        >
          <label htmlFor="cf-name">Name</label>
          <input id="cf-name" className="field" type="text" name="name" autoComplete="name" required />
          <label htmlFor="cf-email">Email</label>
          <input id="cf-email" className="field" type="email" name="email" autoComplete="email" required />
          <label htmlFor="cf-message">Message</label>
          <textarea id="cf-message" className="field" name="message" rows="6" required></textarea>
          <button type="submit" className="key key--primary">
            Send message
          </button>
        </form>
      </div>

      <footer className="footer container">
        <p className="footer__line">Vo Hoai Thuong, backend engineer.</p>
        <p className="footer__colophon">
          This site is deployed to k3s by GitHub Actions and Flux.
        </p>
      </footer>
    </section>
  );
};

export default Contact;
