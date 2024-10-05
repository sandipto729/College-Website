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

      <div className={styles.contactDetails}>

        <p>Department of Computer Science and Engineering</p>
        <p>NIT Durgapur</p>
        <p>Mahatma Gandhi Avenue</p>
        <p>Durgapur - 713209</p>
        <p>West Bengal , India.</p>
        <p>Office Phone no.: <a href="tel:+913432547379">+91 (343) 2547379 (O)</a></p>
        <p>Email ID: <a href="mailto:hod.cse@nitdgp.ac.in">hod.cse@nitdgp.ac.in</a></p>

      </div>

      <div className={styles.contactForm}>
        <form ref={form} onSubmit={sendEmail} >
          {/* <label className={styles.formLabel}>Name</label> */}
          <input type="text" name="from_name" className={styles.formInput} required={true} placeholder='Name'/>

          {/* <label className={styles.formLabel}>Email</label> */}
          <input type="email" name="from_email" className={styles.formInput} required={true} placeholder='Email' />

          {/* <label className={styles.formLabel}>Message</label> */}
          <textarea name="message" className={styles.formTextarea} required={true} placeholder='Message'></textarea>

          <input type="submit" value="Send" className={styles.formButton} />
        </form>
      </div>


    </div>
  );
};

export default ContactUs;
