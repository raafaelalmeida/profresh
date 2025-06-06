import { useState } from 'react';
import styles from './Contact.module.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    request: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSMSRedirect = () => {
    const { name, request } = formData;

    if (!name || !request) {
      alert('Please fill in both fields.');
      return;
    }

    // Cria o corpo do SMS com encode para caracteres especiais
    const smsBody = encodeURIComponent(`Hi, my name is ${name} and I'm looking for: ${request}`);
    
    // Número de destino
    const phoneNumber = '+61431361230'; // Substitua pelo seu número

    // Redireciona para o app de SMS
    window.location.href = `sms:${phoneNumber}?body=${smsBody}`;
  };

  return (
    <div className={styles.container}>
      <h2>Quick Contact</h2>
      <p>Send us a quick message and we’ll get back to you.</p>

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        className={styles.input}
      />

      <textarea
        name="request"
        placeholder="What do you need? (e.g. carpet/couch cleaning, mattress cleaning quote)"
        value={formData.request}
        onChange={handleChange}
        className={styles.textarea}
      />

      <button onClick={handleSMSRedirect} className={styles.button}>
        Get a Quote
      </button>
    </div>
  );
}

export default Contact;
