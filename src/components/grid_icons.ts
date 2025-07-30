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
