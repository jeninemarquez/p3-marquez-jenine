/*App*/
import { header } from './modules/header.js';
import { footer } from './modules/footer.js';

/*renderTemplate()*/

class App {

    constructor() {
        this.renderTemplate();
    }

    renderTemplate() {
const template = `
    <h1>${header.title}</h1>
    <p>${footer.footer}</p>
    ` ;

    document.footer.innerHTML = template;
    }
}

new App;