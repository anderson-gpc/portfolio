"use strict";
class CardExperience extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        const localName = this.getAttribute("localName") || "";
        const localLink = this.getAttribute("localLink") || "";
        const localCargo = this.getAttribute("localCargo") || "";
        const localAcoes = this.getAttribute("localAcoes") || "";
        const date = this.getAttribute("date") || "";
        this.innerHTML = `
            <style>
                section.card-experience {
                    padding: 1.5rem;
                    border-radius: 12px;
                    box-shadow: 0 0 10px rgba(0,0,0,0.3);
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    color: white;
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                }

                section.card-experience:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 5px 15px rgba(0,0,0,0.5);
                }

                .experience-header a {
                    color: var(--highlighted-yellow);
                    font-weight: bold;
                    text-decoration: none;
                }

                .experience-header a:hover {
                    text-decoration: underline;
                }

                .experience-header p {
                    color: var(--highlighted-blue);
                    margin: 0;
                    font-size: 0.9rem;
                }

                h2 {
                    color: var(--highlighted-green);
                    margin: 0 0 0.5rem 0;
                    font-size: 1.2rem;
                }

                .actions span {
                    display: block;
                    margin-bottom: 0.3rem;
                    color: #ccc;
                    font-size: 0.95rem;
                }
            </style>

            <section class="card-experience" aria-label="Projeto desenvolvido em ${localName}">
                <div class="experience-header">
                    <a href="${localLink}" target="_blank" rel="noopener">@${localName}</a>
                    <p>${date}</p>
                </div>
                <div class="experience-body">
                    <h2>${localCargo}</h2>
                    <div class="actions">
                        ${localAcoes
            .split(",")
            .map(action => `<span>• ${action.trim()}</span>`)
            .join("")}
                    </div>
                </div>
            </section>
        `;
    }
}
customElements.define("card-experience", CardExperience);
