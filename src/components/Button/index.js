import styled from "styled-components";

export const Button = styled.a`
  text-decoration: none;
  position: relative;
  font-weight: bold;
  cursor: pointer;
  text-transform: ${(props) => props.$form || "uppercase"};
  border: ${(props) => props.$border || "0.2rem solid transparent"};
  border-image: linear-gradient(
      120deg,
      ${(props) => props.$border_color_start || "#025ce3"} 0%,
      ${(props) => props.$border_color_end || "#02c1e3"} 100%
    )
    1;
  padding: ${(props) => props.$padd || "0.1rem 1.5rem"};
  font-size: ${(props) => props.$size || "1.5rem"};
  overflow: hidden;
  color: ${(props) => props.$text_color || "#025ce3"}; /* Cor do texto */
  display: inline-block;
  transition: color 0.3s ease-in-out, border 0.3s ease-in-out;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      120deg,
      ${(props) => props.$bg_color_start || "#0233e3"} 0%,
      ${(props) => props.$bg_color_end || "#02c1e3"} 100%
    );
    transition: left 0.3s ease-in-out;
    z-index: 0;
  }

  &:hover::before {
    left: 0;
  }

  &:hover {
    color: ${(props) =>
      props.$hover_color || "white"}; /* Cor do texto ao passar o mouse */
  }

  span {
    position: relative;
    z-index: 1;
  }
`;
