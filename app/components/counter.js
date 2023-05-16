// Importing the LitElement, html, and css classes from the specified URL
import {
  LitElement,
  html,
  css,
} from "https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js";

// Defining a class called CounterComponent that extends LitElement
class CounterComponent extends LitElement {
  // Defining the properties of the component
  static get properties() {
    return {
      counter: { type: Number },
    };
  }

  // Defining the styles of the component
  static get styles() {
    return css`
      .counter {
        font-size: 3rem;
        margin-bottom: 1rem;
        margin-right: 1rem;
        display: inline-block;
      }

      button {
        font-size: 1.5rem;
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 0.25rem;
        background-color: #4caf50;
        color: #fff;
        cursor: pointer;
        margin-right: 0.5rem;
      }

      button:hover {
        background-color: #388e3c;
      }
    `;
  }

  // Defining the constructor of the component
  constructor() {
    super();
    // Initializing the counter property to an empty string
    this.counter = "";
  }

  // A method that increments the counter property
  incrementCounter() {
    if (this.counter < 10) {
      this.counter++;
      // Requesting an update to the component's state
      this.requestUpdate();
    }
  }

  // A method that decrements the counter property
  decrementCounter() {
    if (this.counter > -5) {
      this.counter--;
      // Requesting an update to the component's state
      this.requestUpdate();
    }
  }

  // A method that renders the component's template
  render() {
    return html`
      <div class="counter">${this.counter}</div>
      <button @click=${this.decrementCounter}>Subtract -</button>
      <button @click=${this.incrementCounter}>Add +</button>
    `;
  }
}

// Registering the custom element "counter-component" with the browser
customElements.define("counter-component", CounterComponent);
