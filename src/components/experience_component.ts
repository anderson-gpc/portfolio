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
                localAcoes: "Interfaces responsivas modernas,Criação e uso de web components,Aprimoramento de usabilidade com frameworks atuais",
                date: "2025 – Presente"
            },
            {
                localName: "ByteSJR",
                localLink: "https://seridobyte.github.io/bytesjrpage/",
                localCargo: "Desenvolvedor Front‑End",
                localAcoes: "Desenvolvimento de layout responsivo,Implementação de seções interativas com JavaScript vanilla,Melhoria da performance,SEO e acessibilidade",
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
                    <p class="text-secondary">Experiências</p>
                    <h2>Onde já trabalhei</h2>
                </div>
                <div id="container__experiences__cards"></div>
            </section>
        `;
    }
}

customElements.define("experience-component", ExperienceComponent);
