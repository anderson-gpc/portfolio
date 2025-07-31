import "./presentation_component.js";
import "./about_component.js";
import "./icone_component.js";
import "./contatos_component.js";

class HeaderComponet extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    private render() {
        this.innerHTML = `
            <style>
                #container__header {
                    background-color: var(--header-color);
                }
            </style>

            <section id="container__header" class="vw-100 vh-100 d-flex align-items-center" aria-label="Informações">
                <div class="container">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-12 col-md-6 mb-5 mb-md-0 d-flex flex-column justify-content-center">
                            <presentation-component titulo="Anderson"></presentation-component>
                            <contatos-component></contatos-component>
                        </div>

                        <div class="col-12 col-md-6 d-flex flex-column justify-content-center">
                            <about-component></about-component>
                        </div>
                    </div>
                </div>
            </section>

        `;
    }
}

customElements.define("header-component", HeaderComponet);
