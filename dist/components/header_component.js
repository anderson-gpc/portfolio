import "./presentation_component.js";
import "./about_component.js";
class HeaderComponet extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `
            <section class="container" aria-label="Informações">
                <presentation-component class="col" titulo="Anderson"></presentation-component>
                <about-component></about-component>
            </section>
        `;
    }
}
customElements.define("header-component", HeaderComponet);
