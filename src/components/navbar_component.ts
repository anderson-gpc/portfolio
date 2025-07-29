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
    this.shadowRoot!.innerHTML = `
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
      </style>

      <nav>
        <img class="logo" src="./icons/logo.png" />
        <img class="options animate__animated" src="./icons/menu.png" />
      </nav>
    `;
  }

  setup() {
    const option = this.shadowRoot!.querySelector(".options") as HTMLImageElement;

    let toggled = false;
    let isAnimating = false;

    option.addEventListener("click", () => {
      if (isAnimating) return;

      isAnimating = true;


      option.classList.remove("animate__rotateIn");
      option.classList.add("animate__rotateOut");

      option.addEventListener(
        "animationend",
        () => {
    
          if (toggled) {
            option.setAttribute("src", "./icons/menu.png");
          } else {
            option.setAttribute("src", "./icons/close.png");
          }

    
          option.classList.remove("animate__rotateOut");
          option.classList.add("animate__rotateIn");

    
          option.addEventListener(
            "animationend",
            () => {
              isAnimating = false;
            },
            { once: true }
          );

          toggled = !toggled;
        },
        { once: true }
      );
    });
  }
}

customElements.define("navbar-component", NavBar);
