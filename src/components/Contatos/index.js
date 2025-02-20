import styled from "styled-components";
import { motion } from "framer-motion";

import logo from "../../assets/icons/logo.png";
import { Image } from "../Image";
import { Button } from "../Button";
import { Apresentacao } from "../Apresentacao";
import Formulario from "../Formulario";

const ContatoContainer = styled(motion.section)`
  height: auto;
  background-color: #02c1e3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`;

const Division = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

function Contato({ headerRef }) {
  const scrollToHeader = () => {
    if (headerRef.current) {
      headerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <ContatoContainer
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <Division>
        <Apresentacao $fontColor="white">Entre em contato</Apresentacao>
        <Image
          src={logo}
          $altura="12rem"
          $largura="12rem"
          $alturaMobile="12rem"
          $larguraMobile="12rem"
          $alturaMobileMenor="10rem"
          $larguraMobileMenor="10rem"
        />
      </Division>
      <Formulario />
      <Button
        onClick={scrollToHeader}
        $border_color_start="transparent"
        $border_color_end="transparent"
        $text_color="white"
        $bg_color_end="white"
        $bg_color_start="white"
        $hover_color="#02c1e3"
        $border="0.1rem solid"
        $form="none"
        $size="0.9rem"
      >
        <span>Topo</span>
      </Button>
    </ContatoContainer>
  );
}

export default Contato;
