import styles from "./Home.module.css";
import Button from "../../components/Button";
import Text from "../../components/Text";
import { motion } from "framer-motion";

import type { Scroll } from "../../interfaces/scroll";

const Home = ({ ref, destination }: Scroll) => {
  const scroll = () => {
    if (destination.current) {
      destination.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <motion.section
      ref={ref}
      className={styles.home}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Text variant="description">
        Olá, meu nome é <strong>Anderson</strong>
        <br />
        Eu sou desenvolvedor fullstack.{" "}
      </Text>
      <Button onClick={scroll}>
        <span>Saber mais</span>
      </Button>
    </motion.section>
  );
};

export default Home;
