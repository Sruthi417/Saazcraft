"use client";

import "./Contact.scss";

export default function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-wrapper">

        {/* LEFT CONTENT */}
        <div className="contact-content">
          <h2 className="contact-title">
            Works Seamlessly With Your
            
            Favorite Tools
          </h2>

          <p className="contact-description">
            SaaZCraft Integrates With The Platforms You Already Use,
            Making It Easy To Bring Everything Together In One Place.
          </p>
        </div>

        {/* RIGHT FORM */}
        <div className="contact-form-card">
          <form className="contact-form">

            <div className="form-field">
              <label htmlFor="name">Name</label>

              <input
                id="name"
                type="text"
                placeholder="Jane Smith"
              />
            </div>

            <div className="form-field">
              <label htmlFor="email">Email</label>

              <input
                id="email"
                type="email"
                placeholder="jane@framer.com"
              />
            </div>

            <div className="form-field">
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                placeholder="Write your message"
              />
            </div>

            <button type="submit" className="contact-submit">
              Submit
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}