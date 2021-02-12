import React, { useState } from 'react';

function Form() {
  const [state, setState] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handlePhoneInput = (value) => {
    const LENGTH = 10;
    const ZERO = 0;
    const TWO = 2;
    const SIX = 6;
    if (value.length === LENGTH) {
      const prefix = value.slice(ZERO, TWO);
      const numberFirstPart = value.slice(TWO, SIX);
      const numberSecondPart = value.slice(SIX, value.length);
      return `(${prefix}) ${numberFirstPart}-${numberSecondPart}`;
    }
    return value;
  };

  const handleInputEvent = ({ target: { name, value } }) => {
    value = (name === 'phone') ? handlePhoneInput(value) : value;
    setState({
      [name]: value,
    });
  };

  const handleSummit = (event) => {
    event.preventDefault();
  };

  const { name, phone, email, message } = state;

  return (
    <form onSubmit={ (event) => handleSummit(event) }>
      <label htmlFor="name">
        Nome:
        <input
          id="name"
          name="name"
          type="text"
          value={ name }
          onChange={ handleInputEvent }
          required
        />
      </label>
      <label htmlFor="phone">
        Telefone:
        <input
          id="phone"
          name="phone"
          type="phone"
          value={ phone }
          onChange={ handleInputEvent }
          required
        />
      </label>
      <label htmlFor="email">
        Email:
        <input
          id="email"
          name="email"
          type="email"
          value={ email }
          onChange={ handleInputEvent }
          required
        />
      </label>
      <label htmlFor="message">
        Mensagem:
        <input
          id="message"
          name="message"
          type="text"
          value={ message }
          onChange={ handleInputEvent }
        />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Form;
