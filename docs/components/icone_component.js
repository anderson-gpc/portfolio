"use strict";
class IconLink extends HTMLElement {
    static get observedAttributes() {
        return ['src', 'href'];
    }
    constructor() {
        super();
        this.src = '';
        this.href = '#';
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue === newValue)
            return;
        switch (name) {
            case 'src':
                this.src = newValue !== null && newValue !== void 0 ? newValue : '';
                break;
            case 'href':
                this.href = newValue !== null && newValue !== void 0 ? newValue : '#';
                break;
        }
        this.render();
    }
    render() {
        this.innerHTML = `
            <a href="${this.href}" target="_blank" rel="noopener noreferrer"
                class="btn btn-outline-secondary rounded-circle d-inline-flex align-items-center justify-content-center p-2"
                style="width: 48px; height: 48px;"
            >
                <img src="${this.src}" alt="Ícone" style="width: 24px; height: 24px;">
            </a>
        `;
    }
}
customElements.define('icon-link', IconLink);
