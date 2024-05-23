import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';


/**
 * WidgetBlock <widget-block header="Sample Widget">
 * Base example for a widget, used as a placeholder in design for unimplemented
 * widgets
 */
class TimerWidget extends LitElement {
  static properties = {
    header: { type: String },

  };

  static styles = css`
    :host {
        display: block;
        width: 250px;
        height: 250px;
        background: rgb(55, 57, 59);
        background: radial-gradient(circle, rgba(55, 57, 59, 1) 79%, rgba(98, 98, 98, 0.9071925754060325) 90%, rgba(255, 255, 255, 0.08120649651972156) 100%);
        border-radius: 20px;
        color: white;
    }

    input[type="number"]{
      width: 40px;
      margin-right: 5px;
    }

    
  `;

  constructor() {
    super();
    this.header = 'Timer Widget';
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
  }

  render() {
    return html`
      <style>
        #timer{
          margin-top: 10px;
          font-size: 18px;
        }
      </style>
        <h3>${this.header}</h3>
        <input type="number" id="hoursInput" placeholder="HH" @input="${this.updateHours}" min="0" max="99">
        <input type="number" id="minutesInput" placeholder="MM" @input="${this.updateMinutes}" min="0" max="99">
        <input type="number" id="secondsInput" placeholder="SS" @input="${this.updateSeconds}" min="0" max="59">
        <button @click = "${this.startTimer}">Start Timer</button>
        <div id ="timer"></div>
    `;
  }

  updateHours(e) {
    this.hours = parseInt(e.target.value);
  }

  updateMinutes(e) {
    this.minutes = parseInt(e.target.value);
  }

  updateSeconds(e) {
    this.seconds = parseInt(e.target.value);
  }

  formatTime(time) {
    return time < 10 ? '0' + time : time;
  }

  startTimer() {
    const totalSeconds = (this.hours * 3600) + (this.minutes * 60) + this.seconds;
    const timerElement = this.shadowRoot.getElementById('timer');
    timerElement.innerHTML = ''; //Clear previous if any

    let remainingTime = totalSeconds;

    const timerInterval = setInterval(() => {
      if (remainingTime >= 0) {
        const hours = Math.floor(remainingTime / 3600);
        const minutes = Math.floor((remainingTime % 3600) / 60);
        const seconds = remainingTime % 60;
        timerElement.innerHTML = `Time Remaining: ${this.formatTime(hours)}:${this.formatTime(minutes)}:${this.formatTime(seconds)}`;
        remainingTime--;
      } else {
        clearInterval(timerInterval);
        timerElement.innerHTML = 'Time\'s up!';
      }
    }, 1000);
  }
}

customElements.define('timer-widget', TimerWidget);
