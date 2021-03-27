import React from "react";
import { Img, ImgContainer } from "../styled elements/ImgContainer";
import { PosterTitle } from "../styled elements/Typo";
import { useDispatch } from "react-redux";
import { isMobile } from "../actions";

const BroweseMovie = (props) => {
  const dispatch = useDispatch();
  const { title, onClick, poster } = props;
  return (
    <div onClick={onClick}>
      <ImgContainer>
        <Img src={poster}></Img>
      </ImgContainer>
    </div>
  );
};

export default BroweseMovie;
