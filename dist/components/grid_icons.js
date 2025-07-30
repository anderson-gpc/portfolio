"use strict";
class GridIcons extends HTMLElement {
    static get observedAttributes() {
        return ['titleGrid', 'src', 'label'];
    }
    constructor() {
        super();
        this.titleGrid = "";
        this.src = "";
        this.label = "";
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this[name] = newValue;
            this.render();
        }
    }
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `
            <section aria-label="Sessão de ${this.titleGrid}" class="mb-3">
                <div class="row row-cols-2 align-items-center text-center">
                    <div class="col">
                        <img src="${this.src}" alt="${this.label}" class="img-fluid grayscale-img" />
                    </div>
                    <div class="col">
                        <p class="text-secondary m-0">${this.label}</p>
                    </div>
                </div>
            </section>
        `;
    }
}
customElements.define("grid-icons", GridIcons);
