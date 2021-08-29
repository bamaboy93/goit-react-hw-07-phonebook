import React from 'react';

import Contact from './Contact';

import styles from './ContactList.module.css';

const ContactsList = () => (
  <ul className={styles.list}>
    <Contact />
  </ul>
);

export default ContactsList;
