"use strict";
class NavBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        this.shadowRoot.innerHTML = `
        <nav>Portfólio</nav>
    `;
    }
}
customElements.define("navbar-component", NavBar);
