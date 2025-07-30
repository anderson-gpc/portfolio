import "./contatos_component.js";

class FooterComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    private render() {
        this.innerHTML = `
            <style>
                footer {
                    background-color: var(--body-color);
                }

                .text-footer {
                    font-size: clamp(1rem, 1.5vw + 0.5rem, 1.5rem);
                }
            </style>
            <footer class="container-fluid w-100 p-5 text-center d-flex flex-column gap-3">
                <p class="text-secondary text-footer">Contato</p>
                <h2 class="text-footer">Entre em contato</h2>
                <contatos-component></contatos-component>
                <p class="text-info text-footer">Feito com <strong>web-components</strong> utilizando <strong>TypeScript</strong></p>
            </footer>
        `;
    }
}

customElements.define("footer-component", FooterComponent);