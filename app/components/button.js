// Importing the LitElement class from the specified URL
import { LitElement } from "https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js";

// Defining a class called ButtonsComponent that extends LitElement
class ButtonsComponent extends LitElement {
  constructor() {
    super();
    // Attaching a click event listener to the component itself
    this.addEventListener("click", this.handleClick);
  }

  // A method that handles the click event
  handleClick(event) {
    const target = event.target;
    // Checking if the clicked element is a button
    if (target.tagName === "BUTTON") {
      // Getting the text content of the clicked button
      const action = target.textContent;
      // Checking if the clicked button is a decrement or increment button
      if (action === "-") {
        // Dispatching a CustomEvent called "decrement" to the parent element
        this.dispatchEvent(new CustomEvent("decrement"));
      } else if (action === "+") {
        // Dispatching a CustomEvent called "increment" to the parent element
        this.dispatchEvent(new CustomEvent("increment"));
      }
    }
  }
}

// Registering the custom element "button-component" with the browser
customElements.define("button-component", ButtonsComponent);
