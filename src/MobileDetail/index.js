import React from "react";

import {
  Title,
  Tags,
  Fire,
  Rating,
  RatingDiv,
  ReleaseDiv,
  Ratings,
} from "../styled elements/DetailContentElements";
import { ButtonContainer, AddTo } from "../styled elements/Button";
import { ImgContainer, Img } from "../styled elements/ImgContainer";
import img from "../images/a.jpg";
import { MobileContainer, Close } from "../styled elements/HomePageElements";
import { isMobile } from "../actions";
import { useSelector, useDispatch } from "react-redux";
const MobileDetail = () => {
  //  the id of the movie to display on the detail content
  const movieDetail = useSelector((state) => state.MovieDetail);
  // movie data to be filtered on the basis of the id
  const discoverMovies = useSelector((state) => state.MovieReducer);
  const { moviesLoading } = discoverMovies.state;
  const { results } = discoverMovies.state.movies;
  const baseURL = "https://image.tmdb.org/t/p/";
  let newMovie;
  let year;
  let overview;

  const dispatch = useDispatch();

  if (moviesLoading) {
    return (
      <MobileContainer>
        <h1>Loading</h1>
      </MobileContainer>
    );
  } else {
    newMovie = results.filter((movie) => movie.id === movieDetail);
    console.log(newMovie);

    return (
      <>
        <MobileContainer>
          <Close onClick={() => dispatch(isMobile())}>close</Close>
          {newMovie.map((movie) => {
            overview = movie.overview.split(".");
            year = movie.release_date.split("-");
            return (
              <div key={movie.id}>
                <Title>{movie.title}</Title>
                <Tags>adventure,comedy,romance</Tags>

                <RatingDiv>
                  <Ratings>
                    <Fire />
                    <Rating type="rating">{movie.vote_average}</Rating>
                    <Rating type="votes">({movie.vote_count})</Rating>
                  </Ratings>
                  <ReleaseDiv>
                    <Rating type="release">{year[0]}</Rating>
                    <Rating type="duration">1h 29min</Rating>
                  </ReleaseDiv>
                </RatingDiv>
                <ImgContainer detail>
                  <Img src={"" + baseURL + "w500/" + movie.poster_path}></Img>
                </ImgContainer>
                <Rating type="description">
                  <span className="description">{overview[0]}</span>
                </Rating>
              </div>
            );
          })}
          <ButtonContainer detail>
            <AddTo>Add to watch List</AddTo>
          </ButtonContainer>
        </MobileContainer>
      </>
    );
  }
};

export default MobileDetail;
