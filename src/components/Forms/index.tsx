import { useState, useRef } from "react";
import styles from "./Forms.module.css";
import Button from "../Button";
import Text from "../Text";
import sendForm from "../../utils/sendForm";
import Footer from "../Footer";
import { motion } from "framer-motion";

const Forms = () => {
  const form = useRef<HTMLFormElement>(null!);
  const [enviado, setEnviado] = useState(false);

  return (
    <motion.section
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <section className={styles.container__form}>
        <Text variant="title">Entre em contato</Text>
        <form
          action={import.meta.env.VITE_EMAIL}
          method="POST"
          className={styles.form}
          ref={form}
          onSubmit={(e) => sendForm(e, form, setEnviado)}
        >
          <input
            type="text"
            name="name"
            placeholder="Nome"
            className={styles.form__input}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className={styles.form__input}
            required
          />
          <textarea
            name="message"
            placeholder="Mensagem"
            className={styles.form__description}
            required
          />
          <Button type="submit">
            <span>{enviado ? "Enviado!" : "Enviar"}</span>
          </Button>
        </form>
      </section>

      <Footer />
    </motion.section>
  );
};

export default Forms;
