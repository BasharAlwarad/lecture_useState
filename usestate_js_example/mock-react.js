export let state = {};

export function useState(initialValue) {
  function setState(newValue) {
    state.x = newValue;
  }
  if (state.x === undefined) {
    state.x = initialValue;
  }
  return [state.x, setState];
}
export function render(children) {
  const container = document.getElementById('root');
  children.map((child) => container.appendChild(child));
  return container.outerHTML;
}
