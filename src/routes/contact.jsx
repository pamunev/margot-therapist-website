import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import { Form } from "react-router-dom"

function Contact() {
    const form = useRef()
    const [isSubmitted, setIsSubmitted] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm("contact_service", "contact_form", form.current, {
                publicKey: "yw86Vd32mHsU-5WEs"
            })
            .then(
                () => {
                    console.log("SUCCESS!")
                    setIsSubmitted(true)
                    window.alert(
                        `Your message has been sent!`
                    )
                    form.current.reset()
                },
                (error) => {
                    console.log("FAILED...", error.text)
                }
            )
    }

    return (
        <div>
            <p>
                Here I think I want to have a contact form, with a text box where someone can write a message, and then send it, and it sends the message to Margot's email. I'll find out how to do that.
            </p>
            <p>
                To reach me, you can email me at <a href="mailto:margot.goralczyk@gmail.com">margot.goralczyk@gmail.com</a> or call me at 412-398-4241.
            </p>
            <p>
                You can also send me a message using this form:
            </p>
            <div className="cont-container-form">
                <div className="container-form">
                    <Form ref={form} onSubmit={sendEmail} action="" className="form">
                        <div className="form-group">
                            <label for="first_name" className="form-label">First name:</label>
                            <input type="text" className="form-control" id="first_name" name="first_name" placeholder="e.g. Margot" tabIndex="1" required />
                        </div>
                        <div className="form-group">
                            <label for="last_name" className="form-label">Last name:</label>
                            <input type="text" className="form-control" id="last_name" name="last_name" placeholder="e.g. Goralczyk" tabIndex="2" required />
                        </div>
                        <div className="form-group">
                            <label for="user_email" className="form-label">Email:</label>
                            <input type="email" className="form-control" id="email" name="email" placeholder="e.g. margot.goralczyk@gmail.com" tabIndex="3" required />
                        </div>
                        <div className="form-group">
                            <label for="message" className="form-label">Message:</label>
                            <textarea className="form-control" rows="5" cols="50" id="message" name="message" placeholder="Enter your message..." tabindex="4" />
                        </div>
                        <div>
                            <button type="submit" value="Send" className="button">Send Message</button>
                        </div>
                        
                    </Form>
                </div>
            </div>
        </div>
                
    )
}

export default Contact