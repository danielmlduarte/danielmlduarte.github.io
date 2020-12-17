import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class Form extends Component {
  constructor() {
    super()
  
    this.state = {
       name: '',
       phone: '',
       email: '',
       message: '',
    };
    this.handleInputEvent = this.handleInputEvent.bind(this);
    this.handleSummit = this.handleSummit.bind(this);
  }

  handleInputEvent({ target: { name, value } }) {
    value = (name === 'phone') ? this.handlePhoneInput(value) : value;
    this.setState({
      [name]: value,
    });
  }

  handlePhoneInput(value) {
    if (value.length === 10) {
      const prefix = value.slice(0,2);
      const numberFirstPart = value.slice(2,6);
      const numberSecondPart = value.slice(6,value.length);
      return `(${prefix}) ${numberFirstPart}-${numberSecondPart}`
    }
    return value;
  }

  handleSummit(event) {
    event.preventDefault();
  }
  
  static propTypes = {
    prop: PropTypes
  }

  render() {
    const { handleInputEvent, handleSummit} = this;
    const { name, phone, email, message } = this.state;
    return (
      <form onSubmit={(event) => handleSummit(event)}>
        <label htmlFor="name">
          Nome:
          <input
            id="name"
            name="name"
            type="text"
            value={name}
            onChange={handleInputEvent}
            required
          />
        </label>
        <label htmlFor="phone">
          Telefone:
          <input
            id="phone"
            name="phone"
            type="phone"
            value={phone}
            onChange={handleInputEvent}
            required
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={handleInputEvent}
            required
          />
        </label>
        <label htmlFor="message">
          Mensagem:
          <input
            id="message"
            name="message"
            type="text"
            value={message}
            onChange={handleInputEvent}
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)
