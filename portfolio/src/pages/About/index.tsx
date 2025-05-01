import styles from "./About.module.css";
import perfil from "../../assets/images/Perfil.png";

import Text from "../../components/Text";
import Button from "../../components/Button";
import Lista from "../../components/Lista";
import Imagem from "../../components/Imagem";
import { Scroll } from "../../interfaces/scroll";
import { motion } from "framer-motion";

const About = ({ ref, destination }: Scroll) => {
  const scroll = () => {
    if (destination.current) {
      destination.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <motion.section
      ref={ref}
      className={styles.section}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className={styles.section__img}>
        <Imagem variant="perfil" src={perfil} alt="Perfil" />
      </div>

      <div className={styles.section__description}>
        <Text variant="title">Sobre mim </Text>
        <Text variant="default">
          Me chamo Anderson Gabriel, sou desenvolvedor fullstack <br />
          Tenho 22 anos e faço Sistemas de Informações pela UFRN.
        </Text>
        <Button onClick={scroll}>
          <span>Projetos</span>
        </Button>
        <Lista />
      </div>
    </motion.section>
  );
};

export default About;
