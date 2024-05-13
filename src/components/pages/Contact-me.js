import React from 'react';
import '../../components/Contactme.css'; // Pfad entsprechend anpassen

function ContactMe() {
  // handleSubmit-Funktion, die das Absenden des Formulars behandelt
function handleSubmit(event) {
  event.preventDefault(); // Verhindert die Standard-Formularübermittlung
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries()); // Konvertiert FormData in ein einfaches Objekt

  // URL des Servers/Endpunkts, an den die Daten gesendet werden sollen
  const url = 'DEINE_SERVER_URL';

  // Verwende die Fetch-API, um die Daten zu senden
  fetch(url, {
    method: 'POST', // oder 'PUT', abhängig von deiner Serverkonfiguration
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // Konvertiere die Daten in einen JSON-String
  })
  .then(response => response.json()) // Konvertiere die Antwort in JSON
  .then(data => {
    console.log('Erfolg:', data);
    // Hier kannst du z.B. eine Erfolgsmeldung anzeigen oder das Formular zurücksetzen
  })
  .catch((error) => {
    console.error('Fehler:', error);
    // Hier kannst du z.B. eine Fehlermeldung anzeigen
  });
}

  return (
    <div className='contact-me'>
      <h1>Kontaktieren Sie mich</h1>
      <form className='contact-form' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='firstName'>Vorname:</label>
          <input type='text' id='firstName' name='firstName' required />
        </div>
        <div className='form-group'>
          <label htmlFor='lastName'>Nachname:</label>
          <input type='text' id='lastName' name='lastName' required />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>E-Mail:</label>
          <input type='email' id='email' name='email' required />
        </div>
        <div className='form-group'>
          <label htmlFor='phone'>Telefon:</label>
          <input type='tel' id='phone' name='phone' />
        </div>
        <div className='form-group'>
          <label htmlFor='message'>Nachricht:</label>
          <textarea id='message' name='message' required></textarea>
        </div>
        <button type='submit'>Absenden</button>
      </form>
    </div>
  );
}

export default ContactMe;