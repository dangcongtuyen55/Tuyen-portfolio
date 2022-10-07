import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import "./Contact.css";
export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || message === "") {
      alert("Please enter a name");
    } else {
      emailjs.sendForm(
        "service_55rs02i",
        "template_3k6aytc",
        form.current,
        "pLBlzdS51IHbkurmC"
      );
      alert("bạn đã gửi mail thành công");
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title"> Get in touch</h2>
      <span className="section__subtitle">Contact me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>
          <div className="contact__info">
            <div className="contact__card">
              <i class="bx bx-envelope"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">tuyendev55@gmail.com</span>
              <Link className="contact__button" to={""}>
                Write me
                <i class="bx bx-right-arrow-alt contact__button-icon"></i>
              </Link>
            </div>
            <div className="contact__card">
              <i class="bx bx-phone"></i>
              <h3 className="contact__card-title">Phone</h3>
              <span className="contact__card-data">0815312150</span>
              <Link className="contact__button" to={""}>
                Write me
                <i class="bx bx-right-arrow-alt contact__button-icon"></i>
              </Link>
            </div>
            <div className="contact__card">
              <i class="bx bxl-messenger"></i>
              <h3 className="contact__card-title">Message</h3>
              <span className="contact__card-data">Công Tuyến</span>
              <Link className="contact__button" to={""}>
                Write me
                <i class="bx bx-right-arrow-alt contact__button-icon"></i>
              </Link>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Write me your project</h3>

          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div">
              <label htmlFor="" className="contact__form-tag">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="contact__form-input"
                placeholder="Enter your name"
              />
            </div>

            <div className="contact__form-div">
              <label htmlFor="" className="contact__form-tag">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="contact__form-input"
                placeholder="Enter your email"
              />
            </div>
            <div className="contact__form-div contact__form-area">
              <label htmlFor="" className="contact__form-tag">
                Message
              </label>
              <textarea
                name="messages"
                cols="10"
                rows="10"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="contact__form-input"
                placeholder="Enter your message"
              ></textarea>
            </div>
            {/* <Link to={""} className="button button-contact">
              Send <i class="bx bx-send"></i>
            </Link> */}
            <button type="submit" className="button button-contact">
              Send <i class="bx bx-send"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
