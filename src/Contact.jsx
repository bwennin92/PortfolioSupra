import './Contact.css';
import { useRef, useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [tooFast, setTooFast] = useState(false);
  const formRef = useRef();
  const startTime = useRef(Date.now());

  function handleSubmit(e) {
    // Honeypot check
    if (formRef.current['website'].value) {
      e.preventDefault();
      return;
    }
    // Time check (at least 3 seconds)
    if (Date.now() - startTime.current < 3000) {
      e.preventDefault();
      setTooFast(true);
      return;
    }
    setSubmitted(true);
  }

  return (
    <section className="contact-section">
      <h2>Contact</h2>
      <form
        className="contact-form"
        action="https://formspree.io/f/xovwoewd"
        method="POST"
        ref={formRef}
        onSubmit={handleSubmit}
      >
        <label style={{ display: 'none' }}>
          Website:
          <input type="text" name="website" autoComplete="off" tabIndex="-1" />
        </label>
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Message:
          <textarea name="message" required></textarea>
        </label>
        <button type="submit" disabled={submitted}>
          {submitted ? 'Sent!' : 'Send'}
        </button>
        {tooFast && (
          <div style={{ color: 'red', marginTop: 8 }}>
            Please wait a few seconds before submitting.
          </div>
        )}
      </form>
    </section>
  );
}
