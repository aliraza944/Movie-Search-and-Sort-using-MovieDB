import React from "react";
import { BigContainer } from "../styled elements/HomePageElements";

import MainContent from "./MainContent";
import DetailContent from "./DetailContent";
const Home = () => {
  return (
    <BigContainer>
      <MainContent />
      <DetailContent />
    </BigContainer>
  );
};

export default Home;
