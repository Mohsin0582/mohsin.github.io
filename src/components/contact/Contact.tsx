import React, { useContext, useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import Input from '../input/Input.tsx';
import Textarea from '../textarea/Textarea.tsx';
import Href from '../href/Href.tsx';
import Icon from '../icon/Icon.tsx';
import './Contact.css';
import { Toastify, showNotification } from '../toastify/Toastify.tsx';
import { ContactContext } from '../contextProviders/Contexts.tsx';

const Contact: React.FC = () => {
  const { handleContact } = useContext(ContactContext);
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    showNotification('Email sent!', 'success', 'top-right');
    return;
    emailjs
      .sendForm(
        import.meta.env.VITE_YOUR_SERVICE_ID,
        import.meta.env.VITE_YOUR_TEMPLATE_ID,
        form.current ?? '',
        import.meta.env.VITE_YOUR_PUBLIC_KEY,
      )
      .then(
        (result) => {
          console.log(result.text);
          showNotification('Email sent!', 'success');
        },
        (error) => {
          console.log(error.text);
          showNotification('Email not sent!', 'error');
        },
      );

    form.current ? form.current.reset() : ''; //reset form values
  };

  return (
    <>
      <div className="contact-wrapper">
        <div className="contact">
          <div className="close">
            <button className="closeBtn" onClick={handleContact}>
              <Icon iconName="cancel" />
            </button>
            <span className="qr-vcard">
              <img
                src="/qr/vcard-mohsin.svg"
                alt="qr vcard mohsin"
                height="60"
                width="60"
              />
            </span>
          </div>

          <div className="email-client">
            <Href iconLink="mail">
              <Icon iconName="mail" />
              <span>mohsin16993@gmail.com</span>
            </Href>
          </div>

          <form ref={form} onSubmit={sendEmail}>
            <div className="subject">
              <label htmlFor="name">Name</label>
              <Input
                id="name"
                type="text"
                name="user_name"
                placeholder="Your name"
                required={true}
              />
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <Input
                id="email"
                type="email"
                name="user_email"
                placeholder="your_email@gmail.com"
                required={true}
              />
            </div>

            <div className="message">
              <label htmlFor="body">Message</label>
              <Textarea
                id="body"
                name="user_message"
                rows={5}
                placeholder="Your Message..."
                required={true}
              />
            </div>
            <input type="submit" className="send-email" value="Send message" />
          </form>

          <Toastify />
        </div>
      </div>
    </>
  );
};

export default Contact;
