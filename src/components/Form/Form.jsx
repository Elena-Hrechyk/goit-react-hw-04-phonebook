import React, { Component } from 'react';
import { Form, Lable, Input, BtnAddContact } from './Form.styled';

export class FormContact extends Component {
  state = {
    name: '',
    number: '',
  };

  onInputChange = evt => {
    this.setState({ [evt.currentTarget.name]: evt.currentTarget.value });
  };

  handleSumnit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ id: '', name: '', number: '' });
  };

  render() {
    return (
      <Form onSubmit={this.handleSumnit}>
        <Lable>
          Name
          <Input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.onInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Adrian"
            autoFocus
            required
          />
        </Lable>
        <Lable>
          Number
          <Input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.onInputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="380671234567"
            required
          />
        </Lable>
        <BtnAddContact type="submit">Add contact</BtnAddContact>
      </Form>
    );
  }
}
