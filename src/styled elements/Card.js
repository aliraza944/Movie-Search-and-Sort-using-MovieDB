import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";

export const StartIcon = styled(AiFillStar)`
  color: orange;
  margin: 0 0.5em 0 0;
`;
export const CardContainer = styled.div`
  width: 100%;
  margin: 0.5em 0 0 0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-wrap: wrap;
`;
export const Card = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 140px;
  margin: 0 1em 0 0;
`;

export const MovieTitle = styled.h1`
  color: white;
  font-size: 1rem;
  text-transform: capitalize;
`;
export const P = styled.p`
  font-size: var(--fs-small);
  color: #b1b1dc;
  text-transform: capitalize;
`;
export const Span = styled.span`
  width: 100%;
  gap: 0.5em;
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  align-items: flex-end;
  flex-wrap: wrap;
`;

export const Rating = styled.p`
  font-size: var(--fs-small);
  font-weight: bold;
  color: #efeff8;
`;
export const Votes = styled.span`
  font-size: var(--fs-small);
  color: #8484c8;
`;
