import "./card_component.js";

class ProjectsComponent extends HTMLElement {
    connectedCallback() {
        this.render();
        this.projects();
    }

    private projects() {
        const containerProjects = document.querySelector("#container__projetos");
        const projetcts = [
            {   'title': "Advice generator",
                "src": "./images/advice.png",
                "description": "Aplicação que gera conselhos para os usuários dinâmicamente",
            "technologies": "TypeScript,SCSS",
                "platform": "Web",
            },
            {   'title': "Advice generator",
                "src": "./images/advice.png",
                "description": "Aplicação que gera conselhos para os usuários dinâmicamente",
            "technologies": "TypeScript,SCSS",
                "platform": "Web",
            }
        ]
        projetcts.forEach((project, index) => {
            const projectEl = document.createElement("card-component");
            if (index % 2 !== 0) projectEl.setAttribute("reverse", "");
            projectEl.setAttribute("image", project.src);
            projectEl.setAttribute("title", project.title);
            projectEl.setAttribute("platform", project.platform);
            projectEl.setAttribute("description", project.description);
            projectEl.setAttribute("technologies", project.technologies);
            containerProjects?.appendChild(projectEl);
        })
    }

    private render() {
        this.innerHTML = `
            <style>
                #container__projetos {
                    background-color: var(--body-color);
                    padding: 1rem;
                }
            </style>
            <section id="container__projetos" class="container-fluid" aria-label="Container de Projetos"></section>
        `;
    }
}

customElements.define("projects-component", ProjectsComponent);
