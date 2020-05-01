/*App*/
import { header } from './modules/header.js';
import { footer } from './modules/footer.js';
import { lunch } from './modules/lunch-generator.js';
import './main.css';

/*renderTemplate()*/

class App {

    constructor() {
        this.renderTemplate();
        lunch.randomize();
        lunch.generate();
    }

    renderTemplate() {
const template = `
    <h1>${header.headerLogo}</h1>
    <p>${footer.footerText}</p>
    <header>
    <div class="header-logo">
        <div class="square"></div>
        <h1 class="header-logo">${header.headerLogo}</h1>
    </div>
      <h2 class="header-start">${header.headerStart}</h2>
  </header>

  <main class="lunch-box">
      <div class="handle">
      </div>

      <div id="upper-box">
        <h3>?</h3>
        <img id="image-placeholder">
      </div>

      <div id="lower-box" class="hide">
        <h2 id="name-placeholder">Testing</h2>
        <a id="link-placeholder">Find the recipe here</a>
      </div>

  </main>

<footer>
    <h2 class="footerMessage">${footer.footerMessage}</h2>
<p class="footerText">${footer.footerText}</p>
</footer>
    `;
    
    
    document.body.innerHTML = template;
    }
}

new App;