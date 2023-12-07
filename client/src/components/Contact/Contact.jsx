import React, { useState } from "react";

import "./Contact.css";
import { useAuth0 } from "@auth0/auth0-react";
function Contact() {
  //
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  const [users, setUser] = useState({
    Name: "",
    Email: "",
    Subject: "",
    Message: "",
  });

  //
  let name, value;
  const data = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...users, [name]: value });
  };

  // senddata to firsbase
  const senddata = async (e) => {
    const { Name, Email, Subject, Message } = users;
    e.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Name,
        Email,
        Subject,
        Message,
      }),
    };
    try {
      const res = await fetch(
        "https://e-commerce-contact-d0a4d-default-rtdb.firebaseio.com/Message.json",
        options
      );

      if (res.ok) {
        alert("Your Message sent");
      } else {
        alert("An Error occurred");
      }
    } catch (error) {
      console.error("Error sending data:", error);
      alert("An unexpected error occurred");
    }

    return false;
  };
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
                value={users.Name}
                placeholder="Enter Your Full Name"
                required
                autoComplete="off"
                onChange={data}
              />
              <input
                type="email"
                name="Email"
                value={users.Email}
                placeholder="Enter Your E-mail"
                required
                autoComplete="off"
                onChange={data}
              />
              <input
                type="subject"
                name="Subject"
                value={users.Subject}
                placeholder="Enter Your Subject"
                required
                autoComplete="off"
                onChange={data}
              />
              <textarea
                name="Message"
                value={users.Message}
                placeholder="Your Message"
                autoComplete="off"
                onChange={data}
              ></textarea>
              {isAuthenticated ? (
                <button type="submit" onClick={senddata}>
                  Send
                </button>
              ) : (
                <button type="submit" onClick={() => loginWithRedirect()}>
                  Login
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

// review check
