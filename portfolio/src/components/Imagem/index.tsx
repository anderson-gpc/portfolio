import styles from "./Imagem.module.css";
import classNames from "classnames";

type ImagemProps = {
  variant: "perfil" | "icons" | "projeto";
} & React.ImgHTMLAttributes<HTMLImageElement>;

function Imagem({ variant, ...props }: ImagemProps) {
  return <img className={classNames(styles.img, styles[variant])} {...props} />;
}

export default Imagem;
