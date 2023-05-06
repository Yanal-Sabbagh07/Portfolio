import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import "./Contact.scss";

const Contact = () => {
  const [msg, setMsg] = useState(false);
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();
    setMsg(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_API_SERVICE_ID,
        process.env.REACT_APP_API_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_API_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div className="contact" id="contact">
      <div className="left"></div>
      <div className="right">
        <h2>Hire me</h2>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Name" name="name" />
          <input type="email" placeholder="Email" name="email" />
          <textarea placeholder="Message" name="message"></textarea>
          <button type="submit">Send</button>
          {msg && (
            <span>
              Thank You, <b />
              I'll reply ASAP :)
            </span>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
