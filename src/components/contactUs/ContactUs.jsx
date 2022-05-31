import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';
import './ContactUs.css'

/**
 * Represents a ContactUs component.
 *
 * @returns {JSX} returns the ContactUs Component.
 */
function ContactUs() {
  const [messageSent, setMessageSent] = useState(false)
  const [captchaStatus, setCaptchaStatus] = useState(false)
  const [captchaCheckbox, setCaptchaCheckbox] = useState(false)
  const form = useRef()
  const captcha = useRef(null)

  // Displays a message if the message was sent.
  const message = () => {
    setMessageSent(true)
    const timer = setTimeout(() => {
      clearTimeout(timer)
      setMessageSent(false)
    }, 2000)
  }

  // Listens for changes to recaptcha value.
  const onChange = async () => {
    try {
      if (await captcha.current.getValue()) {
        setCaptchaStatus(true)
        setCaptchaCheckbox(false)
      }
    } catch (err) {
      console.log(err.message)
    }
  }
  const sendEmail = async (e) => {
    try {
      e.preventDefault()
      if (captchaStatus) {
        const res = await emailjs.sendForm('service_74qoba4', 'template_8m4oiru', form.current, 'bZGq6YtA4Ir7WQ6da')
        if (res.status === 200) {
          message()
        }
        e.target.reset()
      } else {
        setCaptchaCheckbox(true)
      }
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <div className="contact-us-container">
      <form className="contact-us-form" ref={form} onSubmit={sendEmail}>
        <input type="text" className="contact-us-input" placeholder="Namn" name="user_name" required />
        <input type="email" className="contact-us-input" placeholder="Emailadress" name="user_email" required />
        <textarea className="contact-us-input" placeholder="Vad kan vi hjälpa dig med?" name="message" required />
        <ReCAPTCHA
          ref={captcha}
          sitekey="6LfV7AsgAAAAAPch9JbEElqMtwij9IfQiAG1_Egd"
          onChange={onChange}
        />
        {captchaCheckbox ? <p className="captcha-checkbox-text">Vänligen kryssa i rutan ovanför</p> : null }
        <div className="consent-input-wrapper">
          <input type="checkbox" id="consent" name="consent" required />Jag samtycker till att skicka mina uppgifter.
        </div>
        {messageSent ? <button type="submit" className="contact-us-message-sent">Meddelandet skickat!</button> : <button type="submit" className="contact-us-message-sent">Skicka</button>}
      </form>
    </div>
  )
}

export default ContactUs
