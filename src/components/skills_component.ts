class SkillsComponent extends HTMLElement {
    connectedCallback() {
        this.render();
        this.skills();
    }

    private skills() {
        const containerSkills = document.querySelector("#skills");
        const iconsSkills = {
            "Linguagens": [
                "JavaScript,./icons/javascript.png",
                "TypeScript,./icons/typescript.png",
            ],
            "Ferramentas": [
                "Git,./icons/git.png"
            ]
        }
        const iconsEntries = Object.entries(iconsSkills);
        
        iconsEntries.forEach(([chave, valor]) => {
            valor.forEach(value => {
                const gridIcons = document.createElement("grid-icons");
                const informacoesIcon = value.split(",");
                gridIcons.setAttribute("titleGrid", chave);
                gridIcons.setAttribute("src", informacoesIcon[1]);
                gridIcons.setAttribute("label", informacoesIcon[0]);
                containerSkills!.appendChild(gridIcons);
            })
        });
    }

    private render() {
        this.innerHTML = `
            <section id="skills">
            <section>
        `;
    }
}

customElements.define("skills-component", SkillsComponent);
