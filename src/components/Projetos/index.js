import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import styled from "styled-components";

import { projetos } from "./projetos";
import { Image } from "../Image";
import { Button } from "../Button";
import { SubTitulo } from "../SubTitulos";
import { Apresentacao } from "../Apresentacao";

const ProjetosContainer = styled.div`
  height: 100vh;
  background-color: white;
  position: relative;
  overflow-x: hidden;
`;

const Forma = styled.div`
  background-color: #02c1e3;
  height: 50vh;
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
  z-index: 0;
`;

const ProjetosLista = styled.ul`
  width: 100%;
  height: 30vh;
  position: absolute;
  top: 10vh;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 720px) {
    margin-block-end: 0;
    margin-block-start: 0;
    padding-inline-start: 0;
  }
`;

const ProjetoItem = styled(motion.li)`
  cursor: pointer;
  position: relative;
  top: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #f9f9f9;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: filter 0.3s ease;

  @media (max-width: 720px) {
    border-radius: 1rem;
    box-shadow: none;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Botoes = styled.div`
  display: flex;
  gap: 1rem;
`;

function Projetos({ projectRef }) {
  // Variáveis para mudança de estados
  const [visiveis, setVisiveis] = useState([]);
  // Elementos do projeto
  const elementosRef = useRef([]);

  useEffect(() => {
    // Garantir que os elementos carregados do projeto tenham o mesmo tamanho dos projetos
    elementosRef.current = elementosRef.current.slice(0, projetos.length);

    // Observador
    const observer = new IntersectionObserver( // Vigia, retorna se o projeto esta > 60% visivel
      (lista) => {
        const novosVisiveis = [...visiveis]; // Copia dos visiveis
        lista.forEach((elemento) => {
          const index = elementosRef.current.indexOf(elemento.target);
          novosVisiveis[index] = elemento.isIntersecting;
        });
        setVisiveis(novosVisiveis);
      },
      { threshold: 0.6 }
    );

    elementosRef.current.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  });

  return (
    <ProjetosContainer ref={projectRef}>
      <Forma />
      <ProjetosLista>
        {projetos.map((projeto, index) => (
          <ProjetoItem
            key={index}
            ref={(el) => (elementosRef.current[index] = el)}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
            }}
            style={{ filter: visiveis[index] ? "none" : "blur(2px)" }}
          >
            <Image
              src={projeto.imagem.frases}
              $altura="30rem"
              $alturaMobile="20rem"
              $alturaMobileMenor="10rem"
            />
            <SubTitulo $fontColor="#025ce3">{projeto.name}</SubTitulo>
            <Apresentacao
              $fontSize="1rem"
              $fontSizeMobile="0.8rem"
              $fontColor="black"
              $fontPeso="500"
              $maxWidthMobile="100%"
            >
              {projeto.descricao || "Projeto sem descrição disponível."}
            </Apresentacao>
            <Botoes>
              <Button
                href={projeto.pages}
                $form="none"
                $size="1rem"
                $padd="0 1rem"
                $border="0.1rem solid transparent"
              >
                <span>Ver projeto</span>
              </Button>
              <Button
                href={projeto.repositório}
                $form="none"
                $size="1rem"
                $padd="0 1rem"
                $border="none"
              >
                <span>Repositório</span>
              </Button>
            </Botoes>
          </ProjetoItem>
        ))}
      </ProjetosLista>
    </ProjetosContainer>
  );
}

export default Projetos;
