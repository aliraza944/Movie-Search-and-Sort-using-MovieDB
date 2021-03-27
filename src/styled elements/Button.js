import styled from "styled-components";
export const Button = styled.button`
  width: 100px;
  margin: 0.5em 1em 0.5em 0;
  background-color: transparent;
  color: white;
  border: 1px solid white;
  border-radius: var(--br-button);
  text-transform: capitalize;
  padding: var(--pd-button);
  font-family: var(--ff-secondary);
  font-size: var(--fs-button);
  cursor: pointer;
  :hover {
    color: #090962;
    background-color: white;
  }
`;
export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => (props.detail ? "center" : "")};
  align-items: ${(props) => (props.detail ? "flex-end" : "flex-start")};
`;
export const AddTo = styled.button`
  width: 50%;
  border-radius: 20px;
  /* padding: 1em; */
  background-color: green;
  color: white;
  font-size: 1rem;
  margin: 2em 0 0 0;
  text-align: center;
`;
