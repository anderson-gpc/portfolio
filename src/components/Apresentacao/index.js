import styled from "styled-components";

export const Apresentacao = styled.h1`
  font-size: ${(props) => props.$fontSize || "2.5rem"};
  font-family: "Poppins";
  color: ${(props) => props.$fontColor || "black"};
  font-weight: ${(props) => props.$fontPeso || "400"};
  strong {
    color: #025ce3;
  }

  @media (max-width: 720px) {
    font-size: ${(props) => props.$fontSizeMobile || "2rem"};
    max-width: ${(props) => props.$maxWidthMobile || "auto"};
  }
`;
