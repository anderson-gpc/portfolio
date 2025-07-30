class CardComponent extends HTMLElement {
  connectedCallback() {
    const image = this.getAttribute('image') || '';
    const title = this.getAttribute('title') || '';
    const platform = this.getAttribute('platform') || '';
    const description = this.getAttribute('description') || '';
    const tech = this.getAttribute('technologies') || '';

    this.innerHTML = `
      <style>
        .card-wrapper {
          background-color: var(--body-color);
          color: #ffffff;
          padding: 4rem 1rem;
          display: flex;
          justify-content: center;
        }

        .content {
          display: flex;
          flex-direction: column;
          max-width: 1140px;
          width: 100%;
          position: relative;
        }

        .image-box {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .image-box img {
          width: 100%;
          max-width: 100%;
          height: auto;
          border-radius: 1rem;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }

        .description-box {
          flex: 1;
          background-color: var(--card-color);
          border-radius: 10px;
          padding: 1.5rem;
          font-size: 0.95rem;
          margin-top: 2rem;
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

        @media (min-width: 768px) {
          .content {
            flex-direction: row;
            align-items: center;
          }

          .image-box {
            flex: 6;
            position: relative;
            z-index: 1;
          }

          .image-box img {
            width: 100%;
            max-width: none;
            object-fit: contain;
            border-radius: 1rem;
          }

          .description-box {
            flex: 4;
            position: relative;
            left: -10%;
            margin-top: 0;
            z-index: 2;
            max-width: 500px;
          }
        }
      </style>

      <div class="card-wrapper">
        <div class="content">
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
