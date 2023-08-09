import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { ContactFormContainer, ContactFormTitle } from './contact-form.styles';

const ContactForm = () => {
  const [messageContent, setMessageContent] = useState({
    name: '',
    email: '',
    message: '',
  });

  const { name, email, message } = messageContent;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setMessageContent({ ...messageContent, [name]: value });
  };

  return (
    <ContactFormContainer>
      <img
        src="https://res.cloudinary.com/dgdnpkfun/image/upload/v1657057747/arrangements/massive-metropolitan_jyj0ht.png" style={{ display: 'flex', flexDirection: 'column', width: '35em', position: 'absolute', left: '8em', top: '5em'}}
        alt="massive metropolitan"
      />
      <ContactFormTitle>Contact Me</ContactFormTitle>
      <span>Planning an event? Get in touch</span>
      <form
        className="contact-form"
        onSubmit={() => document.email('glowing-flowers@gmail.com')}
      >
        <FormInput
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          label="Name (first, last)"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="textarea"
          name="message"
          value={message}
          onChange={handleChange}
          label="Message"
          required
        />

        <CustomButton type="submit">Send Message</CustomButton>
      </form>
    </ContactFormContainer>
  );
};

export default connect()(ContactForm);
