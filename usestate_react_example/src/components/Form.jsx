import { useState } from 'react';

const FormComponent = () => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser((prevName) => ({
      ...prevName,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', user);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type='text'
          name='firstName'
          value={user.firstName}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Last Name:
        <input
          type='text'
          name='lastName'
          value={user.lastName}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default FormComponent;
