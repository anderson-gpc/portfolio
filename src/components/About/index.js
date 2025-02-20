import { motion } from "framer-motion";
import styled from "styled-components";
import perfil from "../../assets/images/Perfil.png";
import { Button } from "../Button";
import { Apresentacao } from "../Apresentacao";
import { SubTitulo } from "../SubTitulos";
import { Image } from "../Image";
import Lista from "../Lista";

const AboutMain = styled(motion.div)`
  height: 100vh;
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;

  @media (max-width: 720px) {
    height: auto;
    padding-bottom: 1rem;
  }
`;

const AboutContainer = styled(motion.div)`
  top: 0;
  width: 100%;
  margin: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 1rem;
  background-image: linear-gradient(120deg, #025ce3 0%, #02c1e3 100%);
  padding: 2rem;
  border-top: 0;
  border-right: 50px solid white;
  border-end-end-radius: 40%;
  border-bottom: 50px solid white;
  transform: rotateX(10deg);

  @media (max-width: 720px) {
    width: 100%;
    flex-direction: column;
    margin: 0 0.5rem;
    padding: 1.5rem;
    gap: 0.5rem;
    border-right: none;
    border-bottom: none;
    border-end-end-radius: 0;
  }
`;

const AboutDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  text-align: center;
  font-weight: 400;

  @media (max-width: 720px) {
    width: 50%;
    align-items: center;
    text-align: center;
  }
`;

const AboutLanguagens = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media (max-width: 720px) {
    gap: 1rem;
  }
`;

function About({ aboutRef, projectRef }) {
  const scrollToProject = () => {
    if (projectRef.current) {
      projectRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AboutMain
      ref={aboutRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <AboutContainer
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Image
          $altura="20rem"
          $largura="auto"
          src={perfil}
          alt="Foto de Anderson Gabriel"
        />
        <AboutDescription>
          <SubTitulo>Sobre mim</SubTitulo>
          <Apresentacao $fontSize="1rem" $fontColor="white" $fontPeso="400">
            Me chamo Anderson Gabriel, sou desenvolvedor fullstack <br />
            Tenho 22 anos e faço Sistemas de Informações pela UFRN.
          </Apresentacao>
          <Button
            $border_color_start="white"
            $border_color_end="white"
            $text_color="white"
            $form="normal"
            $bg_color_start="white"
            $bg_color_end="white"
            $hover_color="#02c1e3"
            href="https://drive.google.com/uc?export=download&id=1QH55-scF4Vh3wIsl1iqqpM7uJS02kr4-"
          >
            <span>Resumo</span>
          </Button>
        </AboutDescription>
      </AboutContainer>

      <AboutLanguagens>
        <SubTitulo $fontColor="#02c1e3">Linguagens e Tecnologias</SubTitulo>
        <Lista />
        <Button onClick={scrollToProject}>
          <span>Projetos</span>
        </Button>
      </AboutLanguagens>
    </AboutMain>
  );
}

export default About;
