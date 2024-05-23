import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class StarWars extends LitElement {

    static properties = {
        film: { type: String },
        _data: { state: true } //data from the API
    }
    static BASE_URL = "https://swapi.dev/api/films/";

    static styles = css`
    :host { 
        display: block; 
        background-color: lightgreen; 
        padding: 20px;
      }
    body{ background-color: green;}
    .episode{ text-align:center; color: blue;}
    .details{color: red;}
    `;

    constructor() {
        super();
        this.film = "1"; //init the value to 1
    }

    connectedCallback() {
        super.connectedCallback();
        this.fetchFilmData();
    }

    fetchFilmData() {
        const url = `${StarWars.BASE_URL}${this.film}/`; //DOM and callback
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this._data = data;
            });
    }

    render() { //this.updateFilm in @input calls fetchFilm again
        //@input is an event Listener for input text in text field and input change it calls the updateFIlm method
        return html`
          <input type="number" .value="${this.film}" @input="${this.updateFilm}" min="1"  placeholder="Enter film number">
          ${this._data ? html`
            <h2 class="episode">Episode ${this._data.episode_id}:
            <span style="font-family: cursive; color: green">${this._data.title}</span></h2>
            <p class="details">Directed by: ${this._data.director}</p>
          ` : html`<p>Loading...</p>`}
        `;
    }

    /* render() {
         console.log('render', this._data);
         if (this._data) {
             return html`<h2 class="episode">Episode ID${this._data.episode_id}:
             <span style = "font-family: cursive; color:green">${this._data.title}</span></h2>
             <p class = "details">Directed by: ${this._data.director}</p>
             `;
         }
         return html`<p>Loading...</p>`;
     } */

    updateFilm(e) { //event handler
        this.film = e.target.value;
        this.fetchFilmData();
    }
    /* Notes 
    
 'e' ===   it's the conventionally named parameter for the event object passed to event handlers.

Event Objects are a built-in part of handling events in JavaScript. They provide contextual information about the events they represent.

e.target allows access to the element that the event was dispatched on, which is particularly useful for getting the value of an input field when the event is a user's interaction with that field.*/

}

customElements.define('star-wars', StarWars);