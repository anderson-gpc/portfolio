class CardComponent extends HTMLElement {
  connectedCallback(): void {
    const image = this.getAttribute('image') || '';
    const title = this.getAttribute('title') || '';
    const platform = this.getAttribute('platform') || '';
    const description = this.getAttribute('description') || '';
    const tech = this.getAttribute('technologies') || '';
    const linkVideo = this.getAttribute('linkVideo');
    const deploy = this.getAttribute('deploy');
    const isReversed = this.hasAttribute('reverse');

    const hasVideo = !!linkVideo;
    const hasDeploy = !!deploy;

    this.innerHTML = `
      <style>
        .card-wrapper {
          background-color: var(--body-color);
          color: #ffffff;
          padding: 1rem 0;
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

        .buttons {
          margin-top: 1rem;
          display: flex;
          gap: 0.5rem;
        }

        .buttons button {
          background-color: var(--highlighted-green);
          color: black;
          font-weight: bold;
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .video-modal {
          position: fixed;
          top: 0; left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.8);
          display: none;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }

        .video-modal.active {
          display: flex;
        }

        .video-modal iframe {
          width: 80vw;
          height: 45vw;
          max-width: 960px;
          max-height: 540px;
          border: none;
          border-radius: 10px;
          box-shadow: 0 0 20px black;
        }

        .video-modal .close-btn {
          position: absolute;
          top: 2rem;
          right: 2rem;
          font-size: 2rem;
          color: white;
          cursor: pointer;
          background: none;
          border: none;
        }

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
            <div class="buttons">
              ${hasVideo ? `<button class="btn-video">Ver projeto em vídeo</button>` : ''}
              ${hasDeploy ? `<a href="${deploy}" target="_blank"><button class="btn-deploy">Visualizar Projeto</button></a>` : ''}
            </div>
          </div>
        </div>
      </div>

      <div class="video-modal" id="video-modal">
        <button class="close-btn" id="close-video">&times;</button>
        <iframe id="video-frame" allowfullscreen></iframe>
      </div>
    `;

    const modal = this.querySelector<HTMLDivElement>('#video-modal');
    const iframe = this.querySelector<HTMLIFrameElement>('#video-frame');
    const btnVideo = this.querySelector<HTMLButtonElement>('.btn-video');
    const btnClose = this.querySelector<HTMLButtonElement>('#close-video');

    if (btnVideo && modal && iframe && linkVideo) {
      btnVideo.addEventListener('click', () => {
        iframe.src = this.convertToEmbed(linkVideo);
        modal.classList.add('active');
      });
    }

    if (btnClose && modal && iframe) {
      btnClose.addEventListener('click', () => {
        modal.classList.remove('active');
        iframe.src = '';
      });
    }
  }

  private convertToEmbed(link: string): string {
    try {
      const url = new URL(link);
      const isYoutube = url.hostname.includes('youtube.com');
      const isShort = url.hostname === 'youtu.be';

      if (isYoutube && url.searchParams.has('v')) {
        const videoId = url.searchParams.get('v');
        return `https://www.youtube.com/embed/${videoId}?rel=0&autoplay=1`;
      }

      if (isShort) {
        const videoId = url.pathname.replace('/', '');
        return `https://www.youtube.com/embed/${videoId}?rel=0&autoplay=1`;
      }

      return link;
    } catch {
      return link;
    }
  }
}

customElements.define('card-component', CardComponent);
