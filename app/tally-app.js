import {
  html,
  LitElement,
  css,
} from "https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js";

// Importing the CounterComponent and ButtonComponent classes from separate files
import "./components/counter.js";
import "./components/button.js";

class TallyApp extends LitElement {
  // Defining properties for the TallyApp class
  static properties = {
    counter: { type: Number },
  };

  static get styles() {
    // Defining CSS styles for the TallyApp class
    return css`
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 60vh;
        padding: 3rem;
        background-color: #f1f1f1;
      }

      h1 {
        font-size: 4rem;
        margin: 0;
        text-align: left;
      }
    `;
  }

  constructor() {
    super();
    // Initializing the counter property with an empty string
    this.counter = "";
  }

  // Handler function for incrementing the counter property
  incrementCounter() {
    if (this.counter < 10) {
      this.counter++;
      this.requestUpdate();
    }
  }

  // Handler function for decrementing the counter property
  decrementCounter() {
    if (this.counter > 0) {
      this.counter--;
      this.requestUpdate();
    }
  }

  render() {
    return html`
      <div>
        <h1>Counter: ${this.counter}</h1>
        <!-- Using the CounterComponent class and passing the counter property as a parameter -->
        <counter-component .counter=${this.counter}></counter-component>
        <!-- Using the ButtonComponent class and binding the handler functions to the events -->
        <button-component
          @decrement=${this.decrementCounter.bind(this)}
          @increment=${this.incrementCounter.bind(this)}
        ></button-component>
      </div>
    `;
  }
}

// Registering the TallyApp class as a custom element
customElements.define("tally-app", TallyApp);
