import React, { useState } from "react";
import {
  NavBars,
  NavContainer,
  SideNav,
  SideNavBtn,
  MobileNav,
} from "../styled elements/NavigationElements";
const Navigation = () => {
  const [openSideNav, setOpenSideNav] = useState(false);
  return (
    <>
      <NavContainer>
        <NavBars onClick={() => setOpenSideNav(true)} />
      </NavContainer>
      {openSideNav && (
        <SideNav>
          <SideNavBtn onClick={() => setOpenSideNav(false)}>Close</SideNavBtn>
          <hr />
          <MobileNav>
            <h1>Top Rated</h1>
            <h1>TV Shows</h1>
            <h1>Now Showing</h1>
            <h1>Action</h1>
            <h1>Comedy</h1>
            <h1>Horror</h1>
            <h1>Romance</h1>
            <h1>Drama</h1>
          </MobileNav>
        </SideNav>
      )}
    </>
  );
};

export default Navigation;
