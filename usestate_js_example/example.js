// Create a button element
const button = document.createElement('button');
button.innerText = 'Click Me';
const p = document.createElement('p');
document.body.appendChild(button);
document.body.appendChild(p);

let state = 0;

function setState() {
  state = state + 1;
}

button.addEventListener('click', () => {
  setState();
  console.log('Counter:', state);
  p.innerHTML = state;
  render();
});

function render() {
  document.body.appendChild(button);
  document.body.appendChild(p);
}
