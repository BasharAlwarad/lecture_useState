import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import DB from './db/DB';

const App = () => {
  const [x, setX] = useState(false);

  const checkIfExists = (firstName, lastName, array) => {
    for (const obj of array) {
      if ('firstName' in obj && 'lastName' in obj) {
        if (obj.firstName === firstName && obj.lastName === lastName) {
          setX(true);
        }
      }
    }
  };

  if (x === false) {
    checkIfExists('John', 'Doe', DB());
  }

  return (
    <>
      {x === true ? (
        <>
          <h1>Hello</h1>
          <Form />
        </>
      ) : (
        <h1>Not authorized!</h1>
      )}
    </>
  );
};

export default App;
