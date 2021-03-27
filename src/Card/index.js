import React from "react";
import {
  Card,
  MovieTitle,
  Span,
  P,
  StartIcon,
  Rating,
  Votes,
} from "../styled elements/Card";

import { ImgContainer, Img } from "../styled elements/ImgContainer";
import { useDispatch } from "react-redux";
import { isMobile } from "../actions";
const MovieCard = (props) => {
  const { title, rating, votes, release, poster } = props;
  const date = release.split("-");
  const dispatch = useDispatch();
  return (
    <>
      <Card onClick={() => dispatch(isMobile())}>
        <ImgContainer>
          <Img src={poster}></Img>
        </ImgContainer>
        <MovieTitle>{title}</MovieTitle>
        <Span>
          <P>{date[0]}</P>
          <P tag>Adventure, Comedy</P>
        </Span>
        <Span>
          {" "}
          <Rating>
            <StartIcon />
            {rating}
            <Votes>({votes})</Votes>
          </Rating>
        </Span>
      </Card>
    </>
  );
};

export default MovieCard;
