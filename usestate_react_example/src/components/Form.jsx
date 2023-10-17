import { useState } from 'react';

const FormComponent = () => {
  const [name, setName] = useState({
    firstName: '',
    lastName: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setName((prevName) => ({
      ...prevName,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type='text'
          name='firstName'
          value={name.firstName}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Last Name:
        <input
          type='text'
          name='lastName'
          value={name.lastName}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default FormComponent;
