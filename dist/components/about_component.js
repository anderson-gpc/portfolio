"use strict";
class AboutComponent extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        const dataAtual = new Date();
        const anoAtual = dataAtual.getFullYear();
        const anosExperiencia = anoAtual - 2023;
        this.innerHTML = `
            <style>
                .projetos {
                    color: var(--highlighted-yellow);
                    text-decoration: none;
                }
            </style>

            <section class="container py-5" aria-label="Sobre">
                <div class="row justify-content-start text-start">
                    <div class="col-lg-8">
                        <div class="mb-4">
                            <span class="text-muted">Sobre</span>
                            <h2 class="display-5 fw-bold">Desenvolvedor Full Stack</h2>
                        </div>
                        <p class="lead text-secondary">
                            Possuo <strong>${anosExperiencia}</strong> ano${anosExperiencia > 1 ? 's' : ''} de experiência em desenvolvimento web, atuando tanto no backend quanto no frontend. Crio soluções modernas e responsivas utilizando Web Components, React, Next.js, Nest.js, Node.js e Express.
                        </p>
                        <a href="#projetos" class="projetos fw-bold">
                            Ver meus trabalhos
                        </a>
                    </div>
                </div>
            </section>
        `;
    }
}
customElements.define("about-component", AboutComponent);
