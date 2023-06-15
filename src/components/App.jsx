import React, { Component } from 'react';
import { FormContact } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactList } from './Contacts/ContactList';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  // Вызывается сразу после монтирования компонента в DOM
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(contacts);
    if (parseContacts) {
      this.setState({ contacts: parseContacts });
    }
  }

  // Вызывается сразу после обновления компонента в DOM. Не вызывается при первоначальном рендере компонента
  componentDidUpdate(_, prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;
    if (nextContacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  }

  formSubmit = data => {
    data.id = nanoid(5); // уникальний id контакта

    const newContact = data.name.toLowerCase();
    const checkContact = this.state.contacts.some(
      item => item.name.toLowerCase() === newContact
    );

    if (checkContact) {
      return alert(`${data.name} is already in contacts`);
    }

    this.setState(({ contacts }) => ({
      contacts: [...contacts, data],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== contactId),
    }));
  };

  filterContact = evt => {
    this.setState({ [evt.currentTarget.name]: evt.currentTarget.value });
  };

  getFilterContact() {
    const { contacts, filter } = this.state;
    const filterNorm = filter.toLowerCase();
    return contacts.filter(item =>
      item.name.toLowerCase().includes(filterNorm)
    );
  }

  render() {
    const { filter, contacts } = this.state;
    const filterContacts = this.getFilterContact();

    return (
      <>
        <h2
          style={{
            marginTop: 30,
            marginLeft: 40,
          }}
        >
          Phonebook
        </h2>
        <FormContact onSubmit={this.formSubmit} />

        {!contacts.length ? (
          <h3
            style={{
              marginTop: 20,
              marginLeft: 40,
            }}
          >
            No saved contacts
          </h3>
        ) : (
          <>
            <h3 style={{ marginTop: 20, marginLeft: 40 }}>Contacts</h3>
            <Filter filter={filter} onSearchContact={this.filterContact} />
            <ContactList
              contacts={filterContacts}
              onDeleteContact={this.deleteContact}
            />
          </>
        )}
      </>
    );
  }
}
