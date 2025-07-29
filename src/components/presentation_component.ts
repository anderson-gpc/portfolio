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
            </style>

            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
                rel="stylesheet"
            />
            <section class="container__cumprimentacao" aria-label="Cumprimentação">
                <h2 class="display-1">Olá!</h2>
                <h2 class="display-1">Eu sou
                    <strong>${title}.</strong>
                </h2>
                <div class="sublinhado"></div>
            </section>
        `;
    }
}

customElements.define("presentation-component", PresentationComponent);
