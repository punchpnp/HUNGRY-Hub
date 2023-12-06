import React from "react";

import "./Contact.css";
function Contact() {
  return (
    <>
      <div className="contact_container">
        <div className="contant">
          <h2># Contact us</h2>
          <div className="form">
            <form method="POST">
              <input
                type="text"
                name="Name"
                value=""
                placeholder="Enter Your Full Name"
                required
                autoComplete="off"
              />
              <input
                type="email"
                name="E-mail"
                value=""
                placeholder="Enter Your E-mail"
                required
                autoComplete="off"
              />
              <input
                type="subject"
                name="Subject"
                value=""
                placeholder="Enter Your Subject"
                required
                autoComplete="off"
              />
              <textarea
                name="Message"
                value=""
                placeholder="Your Message"
                autoComplete="off"
              ></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
