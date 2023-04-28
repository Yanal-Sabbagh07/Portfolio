import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.scss";

const Contact = () => {
  const [msg, setMsg] = useState(false);

  function sendEmail(e) {
    e.preventDefault();
    setMsg(true);

    emailjs
      .sendForm(
        "service_g33tvdo",
        "template_44oxfbd",
        e.target,
        "user_oFLqVYymdRpOyAFu08MbI"
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
        <form onSubmit={sendEmail}>
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
