import { useRef } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projetos from "./components/Projetos";
import Contato from "./components/Contatos";

function App() {
  const aboutRef = useRef(null); // Criação da ref
  const projectRef = useRef(null);
  const headerRef = useRef(null);

  return (
    <div>
      <Header aboutRef={aboutRef} headerRef={headerRef} />
      {/* Passando a ref corretamente para About */}
      <About aboutRef={aboutRef} projectRef={projectRef} />
      <Projetos projectRef={projectRef} />
      <Contato headerRef={headerRef} />
    </div>
  );
}

export default App;
