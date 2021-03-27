import styled from "styled-components";
import { FaBars } from "react-icons/fa";

export const NavBars = styled(FaBars)`
  font-size: 1.8rem;
  cursor: pointer;
  color: var(--clr-headingPrimary);
  margin-right: 0em;
`;
export const NavContainer = styled.div`
  /* width: 100%; */
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: flex-start;
  text-align: center;
`;

export const Logo = styled.div`
  font-family: "Parisienne", cursive;
  width: 100%;
  margin-top: -0.23em;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SideNav = styled.div`
  width: 70vw;
  background-color: orange;
  padding: 2em 0 2em 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4;
`;

export const SideNavBtn = styled.p`
  font-size: 1rem;
  padding: 0 0 2em 0;

  cursor: pointer;
  color: black;

  display: block;
`;
export const MobileNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  justify-content: space-between;
  height: 100vh;

  margin: 0 0 2em 2em;
`;
