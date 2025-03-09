import styled from "styled-components";

export const Image = styled.img`
  height: ${(props) => props.$altura || "auto"};
  width: ${(props) => props.$largura || "auto"};
  filter: ${(props) => props.$filter || "grayscale(100%)"};

  @media (max-width: 720px) {
    height: ${(props) => props.$alturaMobile || "auto"};
    width: ${(props) => props.$larguraMobile || "auto"};
  }

  @media (max-width: 480px) {
    height: ${(props) => props.$alturaMobileMenor || "auto"};
    width: ${(props) => props.$larguraMobileMenor || "auto"};
  }
`;
