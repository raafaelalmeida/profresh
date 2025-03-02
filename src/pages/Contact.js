import { useState } from 'react';
import styles from './Contact.module.css';
import emailjs from 'emailjs-com';

function Contact() {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '', // ✅ Added phone number field
    message: ''
  });

  // State for success/error messages
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent page reload

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setMessage('⚠️ Please fill in all fields.');
      return;
    }

    // Phone number validation
    const phoneRegex = /^[0-9\s+()-]{7,15}$/;
    if (!phoneRegex.test(formData.phone)) {
      setMessage('⚠️ Please enter a valid phone number.');
      return;
    }

    setLoading(true);

    // Simulated submission (replace with EmailJS API call)
    setTimeout(() => {
      setMessage('✅ Message sent successfully! We will contact you soon.');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setLoading(false);
    }, 2000);

    
    // Uncomment below to integrate with EmailJS
    emailjs.send(
      'service_orbuyyn',  // Replace with your EmailJS Service ID
      'template_qzrmd4a', // Replace with your EmailJS Template ID
      {
        to_email: 'your-email@example.com',
        name: formData.name,
        email: formData.email,
        phone: formData.phone, // ✅ Include phone number
        message: formData.message
      },
      'mJuVDNvoRGZz76gOS' // Replace with your EmailJS User ID
    )
    .then(() => {
      setMessage('✅ Message sent successfully! We will contact you soon.');
      setFormData({ name: '', email: '', phone: '', message: '' });
    })
    .catch(() => {
      setMessage('❌ Error sending message. Please try again.');
    })
    .finally(() => setLoading(false));
  
  };

  return (
    <div className={styles.container}>
      <h2>Contact Us</h2>
      <p>Fill in the form below, and we'll get back to you as soon as possible.</p>

      {message && (
        <p className={`${styles.feedback} ${message.includes('success') ? styles.success : styles.error}`}>
          {message}
        </p>
      )}

      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className={styles.input}
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className={styles.input}
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone Number"
          className={styles.input}
          value={formData.phone}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="What service do you need?
Best day?
Best time?"
          className={styles.textarea}
          value={formData.message}
          onChange={handleChange}
        />
        <button className={styles.button} type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Send'}
        </button>
      </form>
    </div>
  );
}

export default Contact;
