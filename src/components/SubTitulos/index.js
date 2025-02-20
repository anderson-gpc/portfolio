import styled from "styled-components";

export const SubTitulo = styled.h2`
  font-family: "Metrophobic";
  color: ${(props) => props.$fontColor || "white"};
  text-transform: uppercase;
`;
