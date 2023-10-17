import { render, state } from './mock-react.js';
import App from './app.js';

console.log(state);
render(App(state));
