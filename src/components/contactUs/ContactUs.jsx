import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';
import './ContactUs.css'

/**
 * Represents a Contact Us component.
 *
 * @returns {*} the ContactUs Component.
 */
function ContactUs() {
  const [messageSent, setMessageSent] = useState(false)
  const [captchaStatus, setCaptchaStatus] = useState(false)
  const form = useRef()
  const captcha = useRef(null)

  const message = () => {
    setMessageSent(true)
    const timer = setTimeout(() => {
      clearTimeout(timer)
      setMessageSent(false)
    }, 1000)
  }

  const onChange = async () => {
    try {
      console.log(captcha.current.getValue())
      if (await captcha.current.getValue()) {
        setCaptchaStatus(true)
      }
    } catch (err) {
      console.log(err.message)
    }
  }
  const sendEmail = (e) => {
    try {
      e.preventDefault()
      if (captchaStatus) {
        emailjs.sendForm('service_74qoba4', 'template_8m4oiru', form.current, 'bZGq6YtA4Ir7WQ6da')
          .then((result) => {
            console.log(result.text)
            message()
          }, (error) => {
            console.log(error.text)
          });
        e.target.reset()
      } else {
        console.log('false')
      }
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <div className="contact-us-container">
      <form className="contact-us-form" ref={form} onSubmit={sendEmail}>
        <input type="text" className="contact-us-input" placeholder="Namn" name="user_name" />
        <input type="email" className="contact-us-input" placeholder="Emailadress" name="user_email" />
        <textarea className="contact-us-input" placeholder="Vad kan vi hjälpa dig med?" name="message" />
        <ReCAPTCHA
          ref={captcha}
          sitekey="6LfsteUfAAAAABqhUQVxTkxlurwB_kMvs8mNo8cT"
          onChange={onChange}
        />,
        {/*  <input type="submit" value="Skicka" /> */}
        {messageSent ? <button type="submit" className="contact-us-message-sent">Meddelandet skickat!</button> : <button type="submit" className="contact-us-message-sent">Skicka</button>}
      </form>
    </div>
  )
}

export default ContactUs
