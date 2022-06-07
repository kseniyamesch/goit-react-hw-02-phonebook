import React, { Component } from 'react';
import { nanoid } from 'nanoid';

const INITIAL_STATE = {
    name: '',
}

const inputNameId = nanoid();

export default class ContactForm extends Component {
  state = {...INITIAL_STATE};

  handleCahnge = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
    // console.log(evt.currentTarget.value)
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit({...this.state})
    console.log(evt);
this.reset();
  };

  reset = () => {
    this.setState({name: '',})
}
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={inputNameId}>
          {' '}
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            id={inputNameId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onInput={this.handleCahnge}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
