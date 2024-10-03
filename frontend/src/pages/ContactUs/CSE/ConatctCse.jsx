import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import styles from './ContactCse.module.css';
const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success('Email sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error(error.text);
        },
      );
  };

  return (
    <div className={styles.formContainer}>
      <form ref={form} onSubmit={sendEmail}>
        <label className={styles.formLabel}>Name</label>
        <input type="text" name="from_name" className={styles.formInput} />
        
        <label className={styles.formLabel}>Email</label>
        <input type="email" name="from_email" className={styles.formInput} />
        
        <label className={styles.formLabel}>Message</label>
        <textarea name="message" className={styles.formTextarea}></textarea>
        
        <input type="submit" value="Send" className={styles.formButton} />
      </form>
    </div>
  );
};

export default ContactUs;
