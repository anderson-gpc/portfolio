import python from "../../assets/icons/python.png";
import js from "../../assets/icons/javascript.png";
import reac from "../../assets/icons/react.png";
import node from "../../assets/icons/node.png";
import git from "../../assets/icons/git.png";
import arduino from "../../assets/icons/arduino.png";
import ts from "../../assets/icons/typescript.png";

import styles from "./Lista.module.css";
import Text from "../Text";
import Imagem from "../Imagem";

type LinguagensLista = {
  img: string;
  name: string;
};

const Lista = () => {
  const linguagens: LinguagensLista[] = [
    { img: python, name: "Python" },
    { img: js, name: "JavaScript" },
    { img: ts, name: "TypeScript" },
    { img: reac, name: "React" },
    { img: node, name: "Node" },
    { img: git, name: "Git" },
    { img: arduino, name: "Arduino" },
  ];
  return (
    <ul className={styles.lista}>
      {linguagens.map((skill, key) => {
        return (
          <li key={key} className={styles.lista__item}>
            <Text variant="default">{skill.name}</Text>
            <Imagem variant="icons" src={skill.img} alt={skill.name} />
          </li>
        );
      })}
    </ul>
  );
};

export default Lista;
