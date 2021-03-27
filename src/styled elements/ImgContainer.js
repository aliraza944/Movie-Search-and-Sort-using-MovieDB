import styled from "styled-components";
export const ImgContainer = styled.div`
  width: 100%;
  max-height: ${(props) => (props.detail ? "35vh " : "44vh")};
  overflow: hidden;
  border-radius: 16px;
  object-fit: cover;
  position: relative;
`;
export const Img = styled.img`
  max-width: 100%;

  height: auto;
  border-radius: 16px;
  margin: 0 0 1.5em 0;
`;
