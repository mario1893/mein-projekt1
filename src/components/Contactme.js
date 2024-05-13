jsx
// Dateiname: src/components/Contactme.js

import React, { useState } from 'react';
import '../../App.css';

function ContactMe() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [submissionStatus, setSubmissionStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Grundlegende Validierung
    if (!formData.email || !formData.message) {
      setSubmissionStatus('Bitte füllen Sie die Felder E-Mail und Nachricht aus.');
      return;
    }

    console.log(formData);
    // Logik zur Übermittlung der formData an einen Server oder einen anderen Endpunkt hier einfügen

    // Formular zurücksetzen und Rückmeldung geben
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    });
    setSubmissionStatus('Vielen Dank für Ihre Nachricht! Wir werden uns bald bei Ihnen melden.');
  };

  return (
    <div className='contact-me'>
      <h1>Kontaktieren Sie mich</h1>
      <form className='contact-form' onSubmit={handleSubmit}>
        {/* Formularfelder bleiben unverändert */}
        <button type='submit'>Absenden</button>
      </form>
      {submissionStatus && <p>{submissionStatus}</p>}
    </div>
  );
}

export default ContactMe;