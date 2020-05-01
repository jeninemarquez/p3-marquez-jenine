/*App*/
import { header } from './modules/header.js';
import { footer } from './modules/footer.js';
import { lunch } from './modules/lunch-generator.js';
import './main.css';

/*renderTemplate()*/

class App {

    constructor() {
        this.renderTemplate();
    }

    renderTemplate() {
const template = `
    <h1>${header.title}</h1>
    <p> This is a test! </p>
    <p>${footer.footer}</p>
    ` ;

    document.footer.innerHTML = template;
    }
}

new App;