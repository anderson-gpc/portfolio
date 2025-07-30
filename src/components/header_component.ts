import "./presentation_component.js";
import "./about_component.js";
import "./icone_component.js";

class HeaderComponet extends HTMLElement {
    connectedCallback() {
        this.render();
        this.contatos();
    }

    private contatos() {
        const contatos = document.querySelector("#contatos");
        const icones = [
            {"src": "./icons/github.png", "href": "https://github.com/andersonstack"},
            {"src": "./icons/gmail.png", "href": "mailto:andersong.pereiracruz@gmail.com"},
            {"src": "./icons/instagram.png", "href": "https://www.instagram.com/andersongabriel_pc/"},
            {"src": "./icons/linkedin.png", "href": "https://www.linkedin.com/in/anderson-gabriel-pc"}
        ]
        icones.forEach((icon) => {
            const iconElement = document.createElement("icon-link");
            iconElement.setAttribute("src", icon.src);
            iconElement.setAttribute("href", icon.href);
            iconElement.setAttribute("aria-label", icon.href.replace("./icons", ""));
            contatos!.appendChild(iconElement);
        });

    }

    private render() {
        this.innerHTML = `
            <style>
                #container__header {
                    background-color: var(--header-color);
                }
            </style>

            <section id="container__header" class="vw-100 vh-100 d-flex align-items-center" aria-label="Informações">
                <div class="container">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-12 col-md-6 mb-5 mb-md-0 d-flex flex-column justify-content-center">
                            <presentation-component titulo="Anderson"></presentation-component>
                            <section id="contatos" class="pt-3" aria-label="Links de Redes Sociais"></section>
                        </div>

                        <div class="col-12 col-md-6 d-flex flex-column justify-content-center">
                            <about-component></about-component>
                        </div>
                    </div>
                </div>
            </section>

        `;
    }
}

customElements.define("header-component", HeaderComponet);
