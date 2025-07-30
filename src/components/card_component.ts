class CardComponent extends HTMLElement {
  connectedCallback() {
    const image = this.getAttribute('image') || '';
    const title = this.getAttribute('title') || '';
    const platform = this.getAttribute('platform') || '';
    const description = this.getAttribute('description') || '';
    const tech = this.getAttribute('technologies') || '';
    const isReversed = this.hasAttribute('reverse');

    this.innerHTML = `
      <style>
        .card-wrapper {
          background-color: var(--body-color);
          color: #ffffff;
          padding: 1rem 0 1rem 0;
          display: flex;
          justify-content: center;
          margin-bottom: 1rem;
        }

        .content {
          display: flex;
          flex-direction: column;
          max-width: 1140px;
          width: 100%;
          position: relative;
        }

        .image-box {
          flex: 6;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .image-box img {
          width: 100%;
          object-fit: contain;
          border-radius: 1rem;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }

        .description-box {
          flex: 4;
          background-color: var(--card-color);
          border-radius: 10px;
          padding: 1.5rem;
          font-size: 0.95rem;
          margin-top: 0.5rem;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.4);
        }

        .platform {
          color: var(--highlighted-green);
          font-size: 0.85rem;
          margin-bottom: 0.5rem;
        }

        .title {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 0.25rem;
        }

        .tech-list {
          font-size: 0.85rem;
          margin-top: 1rem;
          color: #aaa;
        }

        .tech-list span {
          margin-right: 1rem;
        }

        /* Layout horizontal em telas médias+ */
        @media (min-width: 768px) {
          .content {
            flex-direction: row;
            align-items: center;
          }

          .content.reverse {
            flex-direction: row-reverse;
          }

          .description-box {
            margin-top: 0;
            position: relative;
            left: -10%;
            max-width: 500px;
            z-index: 2;
          }

          .content.reverse .description-box {
            left: 10%;
          }
        }
      </style>

      <div class="card-wrapper">
        <div class="content ${isReversed ? 'reverse' : ''}">
          <div class="image-box">
            <img src="${image}" alt="App preview" />
          </div>
          <div class="description-box">
            <div class="platform">${platform} platform</div>
            <div class="title">${title}</div>
            <div class="text">${description}</div>
            <div class="tech-list">
              ${tech.split(',').map(t => `<span>${t.trim()}</span>`).join('')}
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('card-component', CardComponent);
