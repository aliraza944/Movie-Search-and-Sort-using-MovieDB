import styled from "styled-components";
export const BigContainer = styled.div`
  width: 100%;
  margin: 2em 0em 0 0em;
  padding: 0 0em 0 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const DetailContainer = styled.div`
  background-color: white;
  width: 40%;
  max-width: 400px;
  height: 95vh;
  margin: 0 1em 0 0;
  padding: 2em 1em 1em 2em;
  border-radius: 16px;
  display: none;
  @media (min-width: 740px) {
    display: flex;
    flex-direction: column;
  }
`;

/*
The container for mobile phone so we can switch on and off the detail div
*/

export const MobileContainer = styled.div`
  position: relative;
  background-color: white;
  width: 100%;
  max-width: 400px;
  height: 95vh;

  padding: 2em 1em 1em 2em;
  border-radius: 16px;

  position: absolute;
  z-index: 10;
  display: block;

  @media (min-width: 740px) {
    display: none;
  }
`;
export const Close = styled.span`
  position: absolute;
  top: 0.5em;
  right: 0.5em;
  cursor: pointer;
`;

export const MainContentContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  margin: 0 0em 0 0em;
  ::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: 728px) {
    margin: 0 4em 0 4em;
    /* display: block; */
  }
`;
export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  margin: 0 0 0 4em;
  background-color: green;
`;
export const NavContainer = styled.div`
  width: 10%;

  display: flex;
`;
