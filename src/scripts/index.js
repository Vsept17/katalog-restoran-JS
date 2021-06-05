import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import '../scripts/api';
import App from './views/app';

const app = new App({
    button: document.querySelector('#hamburgerBtn'),
    drawer: document.querySelector('#listDrawer'),
    content: document.querySelector('#mainContent')
})
console.log('Hello Coders! :)');
