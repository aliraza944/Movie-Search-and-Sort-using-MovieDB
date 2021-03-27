import React from "react";
import { DetailContainer } from "../styled elements/HomePageElements";
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
import { useSelector } from "react-redux";

const DetailContent = () => {
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

  //filter the required movie on the basis of the clicked id
  // if (!moviesLoading) {
  //   // year = newMovie[0].release_date.split("-");
  //   // overview = newMovie[0].overview.split(".");

  // }
  console.log(moviesLoading);
  if (moviesLoading) {
    return (
      <DetailContainer>
        <h1>Loading</h1>
      </DetailContainer>
    );
  } else if (!moviesLoading) {
    newMovie = results.filter((movie) => movie.id === movieDetail);
    console.log(newMovie);

    return (
      <DetailContainer>
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
                <Img src={"" + baseURL + "w300/" + movie.poster_path}></Img>
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
      </DetailContainer>
    );
  }
};

export default React.memo(DetailContent);
