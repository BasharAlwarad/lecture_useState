function Button(clickHandler) {
  const button = document.createElement('button');
  button.innerText = 'Click me';
  button.onclick = clickHandler;
  return button;
}

export default Button;
