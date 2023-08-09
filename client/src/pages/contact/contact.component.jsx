import React from "react";
import { motion } from "framer-motion";
import ContactForm from "../../components/contact-form/contact-form.component";

import { ContactContainer } from "./contact.styles";

const ContactPage = () => (
  <ContactContainer>
    <motion.div
       initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
    >
      <ContactForm />
    </motion.div>
  </ContactContainer>
);

export default ContactPage;
