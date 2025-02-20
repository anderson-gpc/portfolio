import styled from "styled-components";

export const Image = styled.img`
  height: ${(props) => props.$altura || "auto"};
  width: ${(props) => props.$largura || "auto"};

  @media (max-width: 720px) {
    height: ${(props) => props.$alturaMobile || "auto"};
    width: ${(props) => props.$larguraMobile || "auto"};
  }
`;
