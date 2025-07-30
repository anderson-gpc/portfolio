"use strict";
class NavBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.render();
        this.setup();
    }
    render() {
        this.shadowRoot.innerHTML = `
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
      <style>
        nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 1rem 1rem 0;
          background-color: #323647;
          position: relative;
        }

        .logo {
          width: 6rem;
        }

        .options {
          width: 3rem;
          cursor: pointer;
        }

        .animate__animated {
          --animate-duration: 0.3s;
        }

        .container__navegacao {
          position: fixed;
          top: 0;
          left: 0;
          height: 100vh;
          width: 100vw;
          background-color: #1a1a1a;
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          z-index: 100;
        }

        .container__lista {
          display: flex;
          flex-direction: column;
          align-items: end;
          list-style: none;
          padding: 0;
          margin: 0 1rem 0 0;
          padding: 0 1rem 0 0;
          width: 100%;
        }

        .container__lista li {
          opacity: 0.5;
          transition: opacity 0.3s ease;
          position: relative;
        }

        .container__lista li.ativo {
          opacity: 1;
        }

        .container__lista .sublinhado {
          height: 0.4rem;
          width: 100%;
          background-color: transparent;
          border-radius: 100%;
          transition: background-color 0.3s ease;
          margin-top: 0.4rem;
        }

        .container__lista li.ativo .sublinhado {
          background-color: #323647;
        }

        .container__navegacao ul li {
          margin: 1.5rem 0;
          cursor: pointer;
        }

        .container__navegacao ul li h2 {
          font-family: "Chiron Hei HK", sans-serif;
          font-weight: normal;
          color: white;
          font-size: 2rem;
          margin: 0;
        }

        .close-btn {
          position: absolute;
          top: 1rem;
          right: 1rem;
        }

        @media screen and (min-width: 768px) {
          nav {
            overflow: hidden;
          }

          .container__navegacao {
            position: static;
            display: flex;
            flex-direction: row;
            right: 0;
            height: auto;
            width: 100%;
            background-color: transparent;
            justify-content: end;
            align-items: end;
          }

          .container__navegacao ul li h2 {
            font-size: 1.2rem;
          }

          .container__lista {
            flex-direction: row;
            gap: 2rem;
            align-items: start;
            padding: 0 1rem 0 0;
            width: auto;
          }

          .container__lista li.ativo .sublinhado {
            background-color: #A1C4F1;
            opacity: 0.5;
          }

          .options {
            display: none;
          }

        }
      </style>

      <nav>
        <img class="logo" src="./icons/logo.png" />
        <img class="open-btn options animate__animated" src="./icons/menu.png" />

        <section class="container__navegacao animate__animated" aria-label="Opções de navegação">
          <img class="close-btn options animate__animated" src="./icons/close.png" />
  
          <ul class="container__lista" aria-label="Lista de opção">
            <li class="ativo" ><h2>Sobre</h2><div class="sublinhado"></div></li>
            <li><h2>Projetos</h2><div class="sublinhado"></div></li>
            <li><h2>Experiências</h2><div class="sublinhado"></div></li>
            <li><h2>Conhecimentos</h2><div class="sublinhado"></div></li>
          </ul>
        </section>
      </nav>

    `;
    }
    setup() {
        const openBtn = this.shadowRoot.querySelector(".open-btn");
        const closeBtn = this.shadowRoot.querySelector(".close-btn");
        const menu = this.shadowRoot.querySelector(".container__navegacao");
        const items = this.shadowRoot.querySelectorAll(".container__lista li");
        items.forEach((item) => {
            item.addEventListener("click", () => {
                items.forEach((el) => el.classList.remove("ativo"));
                item.classList.add("ativo");
            });
        });
        // Abrir menu
        openBtn.addEventListener("click", () => {
            openBtn.classList.remove("animate__rotateIn");
            openBtn.classList.add("animate__rotateOut");
            openBtn.addEventListener("animationend", () => {
                menu.style.display = "flex";
                menu.classList.remove("animate__slideOutRight");
                menu.classList.add("animate__slideInRight");
            }, { once: true });
        });
        // Fechar menu
        closeBtn.addEventListener("click", () => {
            menu.classList.remove("animate__slideInRight");
            menu.classList.add("animate__slideOutRight");
            menu.addEventListener("animationend", () => {
                menu.style.display = "none";
                openBtn.classList.remove("animate__rotateOut");
                openBtn.classList.add("animate__rotateIn");
            }, { once: true });
        });
    }
}
customElements.define("navbar-component", NavBar);
