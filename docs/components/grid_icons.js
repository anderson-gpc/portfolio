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
            <style>
                .img__icon {
                    filter: grayscale(100%);
                    width: 24px;
                    height: 24px;
                    margin-right: 8px;
                }
                .icon-wrapper {
                    display: flex;
                    align-items: center;
                    margin-bottom: 0.5rem;
                    color: var(--text-secondary-color, #999);
                }
                .icon-label {
                    margin: 0;
                    font-size: 0.9rem;
                }
            </style>

            <div class="icon-wrapper">
                <img src="${this.src}" alt="${this.label}" class="img__icon" />
                <p class="icon-label">${this.label}</p>
            </div>
        `;
    }
}
customElements.define("grid-icons", GridIcons);
