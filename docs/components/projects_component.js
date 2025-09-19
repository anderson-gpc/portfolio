import "./card_component.js";
class ProjectsComponent extends HTMLElement {
    connectedCallback() {
        this.render();
        this.projects();
    }
    projects() {
        const containerProjects = document.querySelector("#container__projetos");
        const projetcts = [
            {
                title: "SigPonto",
                src: "./images/sigponto.jpg",
                description: "Aplicativo Android e Web responsivo para controle de ponto eletrônico de servidores, com autenticação via SIGAA e validação por geolocalização. O registro de ponto é permitido apenas dentro dos limites do campus. Fui Responsável pelo desenvolvimento do front-end com foco em responsividade e acessibilidade. Também foi criada uma versão web progressiva para uso direto no navegador, sem necessidade de instalação.",
                technologies: "Flutter,Django",
                platform: "Web, Android",
                linkVideo: "https://www.youtube.com/watch?v=uCP7hKKq_N8&list=PLGEU2ZlFybrZTMmiWrodrSSVjEzLtUwPO",
                deploy: "",
            },
            {
                title: "Biblioteca",
                src: "./images/biblioteca.png",
                description: "Desenvolvi uma aplicação web fullstack com backend e banco de dados que funciona como uma biblioteca digital. Usuários comuns podem visualizar os livros disponíveis, acompanhar seus empréstimos ativos e vencidos, e gerenciar esses empréstimos. O usuário administrador tem a função de gerenciar o acervo, incluindo adicionar e atualizar livros, além de realizar empréstimos e devoluções junto aos usuários, mantendo a base de dados atualizada. Um dos maiores desafios do projeto foi construir toda a aplicação usando web components, eliminando dependências de frameworks externos e garantindo um código modular e leve. O frontend foi pensado para minimizar requisições ao backend, realizando apenas uma chamada no login para carregar todos os dados necessários, que são armazenados em cache, otimizando assim a performance e a experiência do usuário.",
                technologies: "Node,TypeScript,MySQL",
                platform: "Web",
                linkVideo: "https://www.youtube.com/watch?v=_z2LQ9llPt4",
                deploy: "https://biblioteca-neon.vercel.app/",
            },
            {
                title: "Advice generator",
                src: "./images/advice.png",
                description: "Aplicativo Web responsivo que exibe conselhos aleatórios consumindo a Advice Slip API. Desenvolvido com HTML, CSS, JavaScript e TypeScript, o app permite a geração de novos conselhos por meio da interação com um ícone de dado. Desenvolvi todo o projeto com foco em garantir a robustez da aplicação: caso a API externa esteja indisponível, o sistema utiliza um arquivo JSON local como fallback. Também assegurei a responsividade da interface em diferentes tamanhos de tela, proporcionando uma experiência consistente em diversos dispositivos.",
                technologies: "TypeScript,SCSS",
                platform: "Web",
                linkVideo: "",
                deploy: "https://andersonstack.github.io/advice-generator-app/",
            },
        ];
        projetcts.forEach((project, index) => {
            const projectEl = document.createElement("card-component");
            if (index % 2 !== 0)
                projectEl.setAttribute("reverse", "");
            projectEl.setAttribute("image", project.src);
            projectEl.setAttribute("title", project.title);
            projectEl.setAttribute("platform", project.platform);
            projectEl.setAttribute("description", project.description);
            projectEl.setAttribute("technologies", project.technologies);
            projectEl.setAttribute("linkVideo", project.linkVideo);
            projectEl.setAttribute("deploy", project.deploy);
            containerProjects === null || containerProjects === void 0 ? void 0 : containerProjects.appendChild(projectEl);
        });
    }
    render() {
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
