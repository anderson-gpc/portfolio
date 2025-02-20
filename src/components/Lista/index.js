import styled from "styled-components";
import { motion } from "framer-motion";
import { Image } from "../Image";

import python from "../../assets/icons/python.png";
import js from "../../assets/icons/js.png";
import reac from "../../assets/icons/react.png";
import node from "../../assets/icons/node-js.png";
import git from "../../assets/icons/git.png";
import arduino from "../../assets/icons/arduino.png";

const ListaContainer = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: flex-start;
  padding-inline-start: 0;
`;

const ListaItem = styled(motion.li)`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  cursor: pointer;
`;

function Lista() {
  return (
    <ListaContainer>
      <ListaItem
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.1 }}
      >
        Python <Image $altura="2rem" $lagura="2rem" src={python} />
      </ListaItem>
      <ListaItem
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.1 }}
      >
        JavaScript <Image $altura="2rem" $lagura="2rem" src={js} />
      </ListaItem>
      <ListaItem
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.1 }}
      >
        React <Image $altura="2rem" $lagura="2rem" src={reac} />
      </ListaItem>
      <ListaItem
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.1 }}
      >
        Node.js <Image $altura="2rem" $lagura="2rem" src={node} />
      </ListaItem>
      <ListaItem
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.1 }}
      >
        Git <Image $altura="2rem" $lagura="2rem" src={git} />
      </ListaItem>
      <ListaItem
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.1 }}
      >
        Arduino <Image $altura="2rem" $lagura="2rem" src={arduino} />
      </ListaItem>
    </ListaContainer>
  );
}

export default Lista;
