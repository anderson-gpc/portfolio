"use strict";
class PresentationComponent extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        const title = this.getAttribute('titulo') || '';
        this.innerHTML = `
            <style>
                .container__cumprimentacao {
                    padding: 1rem;
                }
                
                .sublinhado {
                    width: 20%;
                    height: 1rem;
                    background-color: var(--highlighted-yellow);
                }

                @media screen and (min-width: 768px) {
                    .container__cumprimentacao {
                        margin-top: 3rem;
                    }

                    .sublinhado {
                        width: 5%;
                    }
                }
            </style>

            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
                rel="stylesheet"
            />
            <section class="container__cumprimentacao" aria-label="Cumprimentação">

                <h2 class="display-1 d-block d-md-none">Olá!</h2>
                <h2 class="display-4 d-none d-md-block">Olá!</h2>

                <h2 class="display-1 d-block d-md-none">Eu sou
                    <strong>${title}.</strong>
                </h2>

                <h2 class="display-4 d-none d-md-block">Eu sou
                    <strong>${title}.</strong>
                </h2>

                <div class="sublinhado"></div>
            </section>
        `;
    }
}
customElements.define("presentation-component", PresentationComponent);
