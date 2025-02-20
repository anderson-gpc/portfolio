import styled from "styled-components";
import { motion } from "framer-motion";

// Componentes
import { Button } from "../Button";
import { Apresentacao } from "../Apresentacao";

const HeaderContainer = styled(motion.div)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 15rem;

  @media (max-width: 720px) {
    margin-left: 1rem;
    align-items: center;
  }
`;

const Header = ({ aboutRef, headerRef }) => {
  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <HeaderContainer ref={headerRef}>
      <Apresentacao>
        Olá, meu nome é <strong>Anderson</strong>
        <br />
        Eu sou desenvolvedor fullstack.
      </Apresentacao>
      <Button onClick={scrollToAbout}>
        <span>Saber mais</span>
      </Button>
    </HeaderContainer>
  );
};

export default Header;
