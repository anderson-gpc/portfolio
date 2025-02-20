import styled from "styled-components";

export const Image = styled.img`
  height: ${(props) => props.$altura || "auto"};
  width: ${(props) => props.$largura || "auto"};
`;
