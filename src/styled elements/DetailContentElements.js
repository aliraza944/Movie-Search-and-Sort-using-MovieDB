import styled from "styled-components";
import { AiFillFire } from "react-icons/ai";
export const Title = styled.h1`
  color: #090962;
  font-size: var(--fs-title);
  margin: 0em 0 0em 0;
  text-transform: capitalize;
  overflow: hidden;
`;
export const Tags = styled.p`
  font-size: var(--fs-rating);
  overflow: hidden;
  color: #8787b3;
  text-transform: capitalize;
`;
export const Fire = styled(AiFillFire)`
  color: yellow;
  font-size: 1.5rem;
`;
export const Rating = styled.p`
  font-size: var(--fs-rating);
  font-weight: ${(props) => {
    if (props.type === "rating") return "bold";
  }};
  overflow: hidden;
  color: ${({ type }) => {
    if (type === "release") {
      return "#2222b5";
    } else if (type === "duration") {
      return "#8e8ed9";
    } else if (type === "votes") {
      return "#8d8dd8";
    } else if (type === "rating") {
      return "#0f0faf";
    } else if (type === "description") {
      return "#090962";
    }
  }};
  margin: ${(props) => {
    if (props.type === "description") {
      return " 2em 0 0em 0";
    }
  }};
  .description {
    overflow: hidden;
    font-size: var(--fs-rating);
  }
`;
export const RatingDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  overflow: hidden;
`;
export const Ratings = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: row;
  align-items: flex-end;
`;
export const ReleaseDiv = styled.div`
  gap: 0.5em;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;

  overflow: hidden;
`;
