import "./presentation_component.js";
class HeaderComponet extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `
            <section aria-label="Informações">
                <presentation-component titulo="Anderson"></presentation-component>
            </section>
        `;
    }
}
customElements.define("header-component", HeaderComponet);
