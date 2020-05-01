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
    <h1>${header.headerLogo}</h1>
    <p>${footer.footerText}</p>
    `;
    
    
    document.body.innerHTML = template;
    }
}

new App;