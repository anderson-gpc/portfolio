"use strict";
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
          position: relative;
          max-width: 1140px;
          width: 100%;
          text-align: center;
        }

        .image-box {
          display: flex;
          justify-content: center;
        }

        .image-box img {
          max-width: 100%;
          max-height: 500px;
          border-radius: 1rem;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }

        .description-box {
          background-color: var(--card-color);
          border-radius: 10px;
          padding: 1.5rem;
          font-size: 0.95rem;
          position: relative;
          max-width: 700px;
          margin: -3rem auto 0;
          z-index: 2;
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

        @media (max-width: 768px) {
          .description-box {
            margin-top: 1rem;
            padding: 1rem;
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
