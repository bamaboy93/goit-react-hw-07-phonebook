import React from 'react';
import operations from '../../redux/operations';
import { useSelector, useDispatch } from 'react-redux';
import styles from './ContactList.module.css';
import { getFilteredContacts } from '../../redux/selectors';

const Contact = () => {
  const onDeleteContact = id => dispatch(operations.deleteContact(id));
  const filteredContacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  return filteredContacts.map(({ id, name, number }) => {
    return (
      <li key={id} className={styles.listItem}>
        {name}: {number}
        <button
          className={styles.contactsBtn}
          onClick={() => onDeleteContact(id)}
          type="button"
        >
          Delete
        </button>
      </li>
    );
  });
};

export default Contact;
