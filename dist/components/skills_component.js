import "./grid_icons.js";
class SkillsComponent extends HTMLElement {
    connectedCallback() {
        this.render();
        this.skills();
    }
    skills() {
        const containerSkills = this.querySelector("#container__skills");
        containerSkills.innerHTML = ''; // limpa antes de adicionar
        const iconsSkills = {
            "Linguagens": [
                "JavaScript,./icons/javascript.png",
                "TypeScript,./icons/typescript.png",
                "HTML,./icons/html.png",
                "CSS,./icons/css.png",
                "Sass,./icons/sass.png",
            ],
            "Frameworks e Bibliotecas": [
                "React,./icons/react.png",
                "Next.js,./icons/nextjs.png",
                "Vue,./icons/vue.png",
                "Express,./icons/express.png",
                "Node.js,./icons/node.png",
                "Tailwind,./icons/tail.png",
                "Bootstrap,./icons/boot.png"
            ],
            "Bancos de Dados": [
                "MySQL,./icons/mysql.png"
            ],
            "Ferramentas e Outros": [
                "Git,./icons/git.png",
                "Docker,./icons/docker.png",
            ]
        };
        Object.entries(iconsSkills).forEach(([category, icons]) => {
            // Cria container da categoria
            const categoryDiv = document.createElement('div');
            categoryDiv.classList.add('skills-category');
            // Adiciona título da categoria
            const categoryTitle = document.createElement('h3');
            categoryTitle.textContent = category;
            categoryDiv.appendChild(categoryTitle);
            // Adiciona cada grid-icons dentro da categoria
            icons.forEach(iconString => {
                const [label, src] = iconString.split(",");
                const gridIcon = document.createElement('grid-icons');
                gridIcon.setAttribute("titleGrid", category);
                gridIcon.setAttribute("src", src);
                gridIcon.setAttribute("label", label);
                categoryDiv.appendChild(gridIcon);
            });
            containerSkills.appendChild(categoryDiv);
        });
    }
    render() {
        this.innerHTML = `
            <style>
                #container__skills {
                    display: grid;
                    gap: 1.5rem;
                    background-color: var(--body-color);
                }

                @media (min-width: 768px) {
                    #container__skills {
                        grid-template-columns: repeat(3, 1fr);
                    }
                }

                @media (max-width: 767px) {
                    #container__skills {
                        grid-template-columns: 1fr;
                    }
                }

                .skills-category {
                    /* Só para dar uma margem e alinhamento */
                    padding: 1rem;
                }

                .skills-category > h3 {
                    margin-bottom: 1rem;
                    color: var(--text-primary-color, #ccc);
                }
            </style>

            <section id="container__skills">
            </section>
        `;
    }
}
customElements.define("skills-component", SkillsComponent);
