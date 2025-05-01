import type { Projetos } from "../../interfaces/projetos";
import frases from "../../assets/images/advice.png";
import styles from "./Carrossel.module.css";
import Button from "../Button";
import Imagem from "../Imagem";
import Text from "../Text";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
} from "swiper/modules";
import { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const projetos: Projetos[] = [
  {
    name: "Advice Generator App",
    description:
      "Aplicação que gera conselhos para os usuários dinâmicamente a partir de uma API.",
    deploy: "https://andersonstack.github.io/advice-generator-app/",
    repo: "https://github.com/andersonstack/advice-generator-app",
    img: frases,
  },
  {
    name: "Advice Generator App",
    description:
      "Aplicação que gera conselhos para os usuários dinâmicamente a partir de uma API.",
    deploy: "https://andersonstack.github.io/advice-generator-app/",
    repo: "https://github.com/andersonstack/advice-generator-app",
    img: frases,
  },
];

const Carrossel = ({ ref }: { ref: React.RefObject<HTMLElement> }) => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <motion.section
      ref={ref}
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={800}
        slidesPerView={1}
        navigation
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className={styles.swiper}
      >
        {projetos.map((projeto, key) => {
          return (
            <SwiperSlide key={key} className={styles.swiper__slide}>
              <Imagem variant="projeto" src={projeto.img} alt={projeto.name} />
              <Text variant="title">{projeto.name}</Text>
              <Text variant="default">{projeto.description}</Text>
              <div className={styles.swiper__slide__buttons}>
                <Button onClick={() => window.open(projeto.deploy, "_blank")}>
                  <span>Veja ao vivo</span>
                </Button>
                <Button onClick={() => window.open(projeto.repo, "_blank")}>
                  <span>Repositório</span>
                </Button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.section>
  );
};

export default Carrossel;
