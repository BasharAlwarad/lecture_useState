// Create a button element
const button = document.createElement('button');
button.innerText = 'Click Me';
const p = document.createElement('p');
document.body.appendChild(button);
document.body.appendChild(p);

let state = 0;
function setState(newValue) {
  state = newValue;
}

function useState(initialValue) {
  return [initialValue, setState(initialValue)];
}

const [x, setX] = useState(1);

button.addEventListener('click', () => {
  setState(state + 1);
  console.log('Counter:', state);
  p.innerHTML = state;
  render();
});

function render() {
  document.body.appendChild(button);
  document.body.appendChild(p);
}
