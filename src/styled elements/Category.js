import styled from "styled-components";

export const Movie = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 3em;
  grid-template-columns: 1fr 1fr;
  padding: 5em 5em 20em 0;
  border-radius: 16px;
  justify-content: space-evenly;
  @media (min-width: 426px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export const H1 = styled.h1`
  position: absolute;
  top: auto;
  left: auto;
`;
