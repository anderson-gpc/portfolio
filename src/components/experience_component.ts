import "./card_experience.js";

class ExperienceComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
        this.experiences();
    }

    private experiences() {
        const containerExperiences = this.querySelector("#container__experiences__cards");
        const myExperiences = [
            {
                localName: "BaoBah",
                localLink: "https://baobah.ceres.ufrn.br/",
                localCargo: "Desenvolvedor Front‑End",
                localAcoes: "Desenvolvo o website Banco de Objetos de Aprendizagem em História (BaoBah), uma plataforma que organiza e disponibiliza materiais digitais voltados ao ensino de História. Sou responsável pela interface do sistema utilizando Vue.js com Vite, empregando TypeScript para a lógica da aplicação, HTML5 para a estruturação das páginas e CSS3 para a estilização. Crio componentes reutilizáveis, funções utilitárias e estruturas de UI que tornam o sistema estável, escalável e fácil de usar. Aplico práticas modernas de desenvolvimento web e contribuo para melhorar o desempenho, a organização visual e a experiência do usuário. Participo também do fluxo de trabalho da equipe utilizando Kanban, garantindo alinhamento, priorização e entregas contínuas ao longo do desenvolvimento da plataforma.",
                date: "2025 – Presente"
            },
            {
                localName: "ByteSJR",
                localLink: "https://seridobyte.github.io/bytesjrpage/",
                localCargo: "Desenvolvedor de Software",
                localAcoes: "Atuei como desenvolvedor de software na empresa júnior Byte Seridó Jr., criando soluções tecnológicas para negócios locais e projetos acadêmicos. Contribuí no desenvolvimento de sistemas web focados em melhorar processos internos, ampliar a presença digital e automatizar tarefas, sempre priorizando usabilidade, confiabilidade e impacto para o cliente. No back-end, desenvolvi APIs e regras de negócio utilizando Python. No front-end, trabalhei com Vue.js e Vite para entregar interfaces rápidas e reativas, utilizando TypeScript, HTML5 e CSS3 como base para criar componentes reutilizáveis, layouts responsivos e funcionalidades interativas. Também apoiei o processo ágil das entregas, garantindo colaboração contínua e evolução dos projetos.",
                date: "2024 – 2025",
            }
        ];

        myExperiences.forEach(experience => {
            const cardExperience = document.createElement("card-experience");
            cardExperience.setAttribute("localName", experience.localName);
            cardExperience.setAttribute("localLink", experience.localLink);
            cardExperience.setAttribute("localCargo", experience.localCargo);
            cardExperience.setAttribute("localAcoes", experience.localAcoes);
            cardExperience.setAttribute("date", experience.date);
            containerExperiences!.appendChild(cardExperience);
        });
    }

    private render() {
        this.innerHTML = `
            <style>
                #container__experiences {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 2rem;
                    padding: 2rem 1rem;
                    background-color: var(--header-color);
                    color: white;
                }

                @media (min-width: 768px) {
                    #container__experiences {
                        flex-direction: row;
                        justify-content: center;
                        align-items: flex-start;
                        padding: 4rem;
                    }
                }

                .experience__title {
                    max-width: 300px;
                    text-align: center;
                }

                .experience__title p {
                    color: var(--highlighted-blue);
                    margin: 0;
                    font-size: clamp(1rem, 1.5vw, 1.2rem);
                }

                .experience__title h2 {
                    margin-top: 0.5rem;
                    font-size: clamp(1.5rem, 2.5vw, 2rem);
                    color: var(--highlighted-green);
                }

                #container__experiences__cards {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                    width: 100%;
                    max-width: 600px;
                }

                @media (min-width: 768px) {
                    .experience__title {
                        text-align: right;
                        padding-right: 2rem;
                    }
                }
            </style>

            <section id="container__experiences">
                <div class="experience__title">
                    <h2>Experiências</h2>
                </div>
                <div id="container__experiences__cards"></div>
            </section>
        `;
    }
}

customElements.define("experience-component", ExperienceComponent);
