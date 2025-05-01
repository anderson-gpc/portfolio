import styles from "./Text.module.css";
import classNames from "classnames";

type TextProps = {
  variant: "title" | "description" | "default";
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLParagraphElement>;

const Text = ({ children, ...props }: TextProps) => {
  const stylesClasses = classNames(styles.text, styles[props.variant]);

  return (
    <p className={classNames(stylesClasses)} {...props}>
      {children}
    </p>
  );
};

export default Text;
