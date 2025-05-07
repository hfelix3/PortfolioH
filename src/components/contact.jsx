import { useState } from 'react';
import emailValidator from 'email-validator';

function ContactH() {
  const [NameValue, SetName] = useState('');

  const [EmailValue, SetEmail] = useState('');
  const [IsValid, SetIsValid] = useState(true);

  const [MessageValue, SetMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (emailValidator.validate(EmailValue)) {
      SetIsValid(true);
    } else {
      SetIsValid(false);
    }
  };

  return (
    <div>
      <h2 className="title">Contact Me</h2>
      <section className='links'>
        <a href="https://github.com/hfelix3">
          <button id="clickable" type="button">
            Github
          </button>
        </a>
        <a href="https://www.linkedin.com/in/hector-felix-del-valle-174451167">
        <button id="clickable" type="button">
          LinkedIn
        </button>
        </a>
        <a href = 'https://stackoverflow.com/'>
        <button id="clickable" type="button">
          Stackoverflow
        </button>
        </a>
      </section>
      <form className="contactForm" onSubmit={handleSubmit}>
        <input
          name="Name"
          value={NameValue}
          onChange={(e) => SetName(e.target.value)}
          onBlur={((e) => SetName(e.target.value))}
          placeholder="Your Name"
          required
        />

        <input
          name="Email"
          value={EmailValue}
          onChange={((e) => SetEmail(e.target.value))}
          onBlur={(e) => SetEmail(e.target.value)}
          placeholder="Your E-mail"
          required
        />

        <textarea
          id="textedTyped"
          placeholder="Your message here"
          rows="5"
          cols="33"
          name="Message"
          value={MessageValue}
          onChange={(e) => SetMessage(e.target.value)}
          onBlur={((e) => SetMessage(e.target.value))}
          required
        ></textarea>

        <button id='clickable' type="submit">Submit</button>
        {!IsValid && <p>Please enter a valid email address.</p>}
      </form>
    </div>
  );
}

export default ContactH;