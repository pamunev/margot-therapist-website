import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Form } from "react-router-dom";

function Contact() {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focused, setFocused] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("contact_service", "contact_form", form.current, {
        publicKey: "yw86Vd32mHsU-5WEs",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setIsSubmitted(true);
          window.alert(`Your message has been sent!`);
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  return (
    <div className="contact-page">
      <div className="contact-title">Contact</div>
      <hr className="hr-title" />
      <div className="cont-container-form">
        <div className="contact-text">
          <div className="contact-category">Email:</div>
          <div className="contact-info">
            <a href="mailto:margot.goralczyk@gmail.com">
              margot.goralczyk@gmail.com
            </a>
          </div>
          <div className="contact-category">Phone:</div>
          <div className="contact-info">412-398-4241</div>
        </div>
        <div className="container-form">
          <Form ref={form} onSubmit={sendEmail} action="" className="form">
            <p className="form-header">
              You can also <strong>request a consultation</strong> or send me a
              message using this form:
            </p>
            <div className={`form-group ${focused ? "focused" : ""}`}>
              <label htmlFor="first_name" className="form-label">
                First name:
              </label>
              <input
                type="text"
                className="form-control"
                id="first_name"
                name="first_name"
                placeholder="First name"
                tabIndex="1"
                required
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>
            <div className="form-group">
              <label htmlFor="last_name" className="form-label">
                Last name:
              </label>
              <input
                type="text"
                className="form-control"
                id="last_name"
                name="last_name"
                placeholder="Last name"
                tabIndex="2"
                required
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>
            <div className="form-group">
              <label htmlFor="user_email" className="form-label">
                Email:
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Email"
                tabIndex="3"
                required
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message:
              </label>
              <textarea
                className="form-control"
                rows="5"
                cols="50"
                id="message"
                name="message"
                placeholder="Enter your message/why you’re seeking services..."
                tabIndex="4"
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>
            <div>
              <button type="submit" value="Send" className="button">
                Send Message
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
