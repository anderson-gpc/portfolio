import "./presentation_component.js";
import "./about_component.js";
import "./icone_component.js";
class HeaderComponet extends HTMLElement {
    connectedCallback() {
        this.render();
        this.contatos();
    }
    contatos() {
        const contatos = document.querySelector("#contatos");
        const icones = [
            { "src": "./icons/github.png", "href": "https://github.com/andersonstack" },
            { "src": "./icons/gmail.png", "href": "mailto:andersong.pereiracruz@gmail.com" },
            { "src": "./icons/instagram.png", "href": "https://www.instagram.com/andersongabriel_pc/" },
            { "src": "./icons/linkedin.png", "href": "https://www.linkedin.com/in/anderson-gabriel-pc" }
        ];
        icones.forEach((icon) => {
            const iconElement = document.createElement("icon-link");
            iconElement.setAttribute("src", icon.src);
            iconElement.setAttribute("href", icon.href);
            iconElement.setAttribute("aria-label", icon.href.replace("./icons", ""));
            contatos.appendChild(iconElement);
        });
    }
    render() {
        this.innerHTML = `
            <style>
                #container__header {
                    background-color: var(--header-color);
                }
            </style>

            <section id="container__header" class="w-100" aria-label="Informações">
                <presentation-component class="col" titulo="Anderson"></presentation-component>
                <section id="contatos" class="container py-1" aria-label="Links de Redes Sociais"></section>
                <about-component></about-component>
            </section>
        `;
    }
}
customElements.define("header-component", HeaderComponet);
