import { state, useState } from './mock-react.js';
import Button from './components/Button.js';
import Result from './components/Result.js';

const App = () => {
  const [x, setX] = useState(1);
  setX(2);
  setX(3);
  function handleClick() {
    console.log(state);
    console.log(x);
    setX(state.x + 1);
  }
  const button = Button(handleClick);
  const result = Result(state.x);
  return [button, result];
};

export default App;
