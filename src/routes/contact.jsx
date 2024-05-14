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
            <Form ref={form} onSubmit={sendEmail}>
                <div>
                    <label>First name:</label>
                </div>
                <div>
                    <input type="text" name="first_name" />
                </div>
                <div>
                    <label>Last name:</label>
                </div>
                <div>
                    <input type="text" name="last_name" />
                </div>
                <div>
                    <label>Email:</label>
                </div>
                <div>
                    <input type="email" name="user_email" />
                </div>
                <div>
                    <label>Message:</label>
                </div>
                <div>
                    <textarea name="message" />
                </div>
                <div>
                    <button type="submit" value="Send" className="button">Send</button>
                </div>
            </Form>
        </div>
                
    )
}

export default Contact