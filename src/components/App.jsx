import React from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { ContactFilter } from './ContactFilter/ContactFilter';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
        background:
          'linear-gradient(180deg, rgb(238, 254, 183) 19.1%, rgb(169, 254, 222) 53.9%, rgb(90, 222, 255) 92%)',
      }}
    >
      <h1>Phonebook ☎</h1>
      <ContactForm />
      <ContactFilter />
      <ContactList />
    </div>
  );
};
