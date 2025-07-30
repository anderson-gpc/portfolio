class GridIcons extends HTMLElement {
    static get observedAttributes(): string[] {
        return ['titleGrid', 'src', 'label'];
    }

    private titleGrid: string = "";
    private src: string = "";
    private label: string = "";

    constructor() {
        super();
    }

    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        if (oldValue !== newValue) {
            (this as any)[name] = newValue;
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
