import "./card_component.js";

class ProjectsComponent extends HTMLElement {
    connectedCallback() {
        this.render();
        this.projects();
    }

    private projects() {
        const containerProjects = document.querySelector("#container__projetos");
        const projetcts = [
            {   'title': "SigPonto",
                "src": "./images/sigponto.jpg",
                "description": "Aplicativo Android e Web responsivo para controle de ponto eletrônico de servidores, com autenticação via SIGAA e validação por geolocalização. O registro de ponto é permitido apenas dentro dos limites do campus. Fui Responsável pelo desenvolvimento do front-end com foco em responsividade e acessibilidade. Também foi criada uma versão web progressiva para uso direto no navegador, sem necessidade de instalação.",
                "technologies": "Flutter,Django",
                "platform": "Web, Android",
            },
            {   'title': "Advice generator",
                "src": "./images/advice.png",
                "description": "Aplicativo Web responsivo que exibe conselhos aleatórios consumindo a Advice Slip API. Desenvolvido com HTML, CSS, JavaScript e TypeScript, o app permite a geração de novos conselhos por meio da interação com um ícone de dado. Desenvolvi todo o projeto com foco em garantir a robustez da aplicação: caso a API externa esteja indisponível, o sistema utiliza um arquivo JSON local como fallback. Também assegurei a responsividade da interface em diferentes tamanhos de tela, proporcionando uma experiência consistente em diversos dispositivos.",
                "technologies": "TypeScript,SCSS",
                "platform": "Web",
            },

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
