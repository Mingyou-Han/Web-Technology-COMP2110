// pagefooter.js
import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class PageFooter extends LitElement {

    static styles = css`
    :host { 
      display: block;
      text-align: center; 
      padding: 20px; 
      background-color: #eee; 
      font-family: monospace; 
    }
  `;

    constructor() {
        super();
        // Initialize the year property to the current year.
        this.currentYear = new Date().getFullYear();
    }

    render() {
        return html`
      <footer>
        Copyright &copy; ${this.currentYear} Your Name
      </footer>
    `;
    }
}

customElements.define('page-footer', PageFooter);
