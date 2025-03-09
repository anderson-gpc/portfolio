import styled from "styled-components";
import { motion } from "framer-motion";
import { Image } from "../Image";

import python from "../../assets/icons/python.png";
import js from "../../assets/icons/javascript.png";
import reac from "../../assets/icons/react.png";
import node from "../../assets/icons/node.png";
import git from "../../assets/icons/git.png";
import arduino from "../../assets/icons/arduino.png";
import ts from "../../assets/icons/typescript.png";

const ListaContainer = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 5rem;
  align-items: flex-start;
  padding-inline-start: 0;

  @media (max-width: 720px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const ListaItem = styled(motion.li)`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  cursor: pointer;
`;

const linguagens = [
  { img: python, name: "Python" },
  { img: js, name: "JavaScript" },
  { img: ts, name: "TypeScript" },
  { img: reac, name: "React" },
  { img: node, name: "Node" },
  { img: git, name: "Git" },
  { img: arduino, name: "Arduino" },
];

function Lista() {
  return (
    <ListaContainer>
      {linguagens.map((linguagem) => (
        <ListaItem
          key={linguagem.name}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.1 }}
        >
          {linguagem.name}{" "}
          <Image
            $alturaMobileMenor="1rem"
            $alturaMobile="2rem"
            $laguraMobile="2rem"
            $altura="2rem"
            $lagura="2rem"
            src={linguagem.img}
          />
        </ListaItem>
      ))}
    </ListaContainer>
  );
}

export default Lista;
