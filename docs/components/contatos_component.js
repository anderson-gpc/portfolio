import "./icone_component.js";
class ContatosComponent extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        const icones = [
            { "src": "./icons/github.png", "href": "https://github.com/anderson-gpc" },
            { "src": "./icons/gmail.png", "href": "mailto:andersong.pereiracruz@gmail.com" },
            { "src": "./icons/instagram.png", "href": "https://www.instagram.com/anderson_gpc/" },
            { "src": "./icons/linkedin.png", "href": "https://www.linkedin.com/in/anderson-gpc" }
        ];
        this.innerHTML = '';
        icones.forEach((icon) => {
            const iconElement = document.createElement("icon-link");
            iconElement.setAttribute("src", icon.src);
            iconElement.setAttribute("href", icon.href);
            iconElement.setAttribute("aria-label", icon.href.replace("./icons", ""));
            this.appendChild(iconElement);
        });
    }
}
customElements.define("contatos-component", ContatosComponent);
