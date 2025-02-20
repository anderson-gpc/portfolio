import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 50%;
  padding: 2rem;
`;

const Input = styled(motion.input)`
  padding: 1rem;
  border: 0.2rem solid transparent;
  width: 100%;

  &::placeholder {
    font-family: "Poppins";
    color: black;
  }

  &:focus {
    outline: none;
    border: 0.2rem solid transparent;
    border-image: linear-gradient(120deg, #025ce3 0%, #02c1e3 100%) 1;
  }
`;

const Texto = styled(motion.textarea)`
  padding: 1rem;
  border: 0.2rem solid transparent;
  width: 100%;

  &::placeholder {
    font-family: "Poppins";
    color: black;
  }

  &:focus {
    outline: none;
    border: 0.2rem solid transparent;
    border-image: linear-gradient(120deg, #025ce3 0%, #02c1e3 100%) 1;
  }
`;

const ButtonEnviar = styled(motion.button)`
  position: relative;
  font-weight: bold;
  cursor: pointer;
  border: 0.1rem solid transparent;
  border-image: linear-gradient(120deg, #025ce3 0%, #02c1e3 100%) 1;
  padding: 0.1rem 1.5rem;
  font-size: 1.5rem;
  overflow: hidden;
  color: #025ce3; /* Cor do texto */
  display: inline-block;
  transition: color 0.3s ease-in-out, border 0.3s ease-in-out;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(120deg, #0233e3 0%, #02c1e3 100%);
    transition: left 0.3s ease-in-out;
    z-index: 0;
  }

  &:focus {
    outline: none;
  }

  &:hover::before {
    left: 0;
  }

  &:hover {
    color: white; /* Cor do texto ao passar o mouse */
    outline: none;
  }

  span {
    position: relative;
    z-index: 1;
  }
`;

function Formulario() {
  const [inputNome, setInputNome] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputMensagem, setInputMensagem] = useState("");
  const [enviado, setEnviado] = useState(false);

  const enviarEmail = (e) => {
    e.preventDefault();

    const templateEmail = {
      from_name: inputNome,
      from_email: inputEmail,
      message: inputMensagem,
      to_email: "andersong.pereiracruz@gmail.com",
    };

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateEmail,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log(
            "E-mail enviado com sucesso!",
            response.status,
            response.text
          );
          setEnviado(true);
          setInputNome("");
          setInputEmail("");
          setInputMensagem("");

          setTimeout(() => setEnviado(false), 2000);
        },
        (err) => {
          console.error("Erro ao enviar o e-mail:", err);
        }
      );
  };

  return (
    <FormContainer onSubmit={enviarEmail}>
      <Input
        type="text"
        placeholder="Nome"
        value={inputNome}
        onChange={(e) => setInputNome(e.target.value)}
        required
      />
      <Input
        type="email"
        placeholder="Email"
        value={inputEmail}
        onChange={(e) => setInputEmail(e.target.value)}
        required
      />
      <Texto
        placeholder="Mensagem"
        value={inputMensagem}
        onChange={(e) => setInputMensagem(e.target.value)}
        required
      />
      <ButtonEnviar type="submit">
        <span>{enviado ? "Enviado!" : "Enviar"}</span>
      </ButtonEnviar>
    </FormContainer>
  );
}

export default Formulario;
