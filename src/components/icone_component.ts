class IconLink extends HTMLElement {
    static get observedAttributes(): string[] {
        return ['src', 'href'];
    }

    private src: string = '';
    private href: string = '#';

    constructor() {
        super();
    }

    connectedCallback(): void {
        this.render();
    }

    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
        if (oldValue === newValue) return;

        switch (name) {
            case 'src':
                this.src = newValue ?? '';
                break;
            case 'href':
                this.href = newValue ?? '#';
                break;
        }

        this.render();
    }

    private render(): void {
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
