import React, { useState } from "react";
import { MainContentContainer } from "../styled elements/HomePageElements";
import { Logo, NavContainer } from "../styled elements/NavigationElements";

import { Button } from "../styled elements/Button";
import { CardContainer } from "../styled elements/Card";
import Navigation from "../Navigation";
import { Movie } from "../styled elements/Category";
import MovieCard from "../Card";
import { SectionHeadings } from "../styled elements/Typo";
import MobileDetail from "../MobileDetail";
import { useSelector, useDispatch } from "react-redux";
import { useFetch } from "../fetch data/Fetch";
import BroweseMovie from "./BroweseMovie";
import {
  movieDetail,
  isMobile as Mobile,
  discoverMovieGlobal,
} from "../actions";
const MainContent = () => {
  //id selector for the detail content tab

  const dispatch = useDispatch();

  const url =
    "https://api.themoviedb.org/3/movie/now_playing?api_key={your api key}&language=en-US&page=1";

  let baseForUrl2 =
    "https://api.themoviedb.org/3/discover/movie?api_key={your api key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=2020";
  const [url2, setUrl2] = useState(baseForUrl2);
  const { loading, products, movies, moviesLoading } = useFetch(url, url2);

  const { results } = products;
  const { results: movieResults } = movies;

  /*

method to fitler out the movie search
*/

  let displayAll = () => {
    setUrl2(baseForUrl2);
  };
  let displayAction = () => {
    setUrl2("" + baseForUrl2 + "&with_genres=28");
  };
  let displayComedy = () => {
    setUrl2("" + baseForUrl2 + "&with_genres=35");
    console.log("comedy movie");
    console.log(movieResults);
  };
  let displayRomance = () => {
    setUrl2("" + baseForUrl2 + "&with_genres=10749");
  };
  let displayFantasy = () => {
    setUrl2("" + baseForUrl2 + "&with_genres=14");
  };
  const baseURL = "https://image.tmdb.org/t/p/";

  const isMobile = useSelector((state) => state.isMobile);
  dispatch(discoverMovieGlobal({ movies, moviesLoading }));
  return (
    <>
      <MainContentContainer>
        <NavContainer>
          <Navigation />

          <Logo>Moviepedia</Logo>
        </NavContainer>

        <SectionHeadings>Now Showing</SectionHeadings>
        <CardContainer>
          {!loading &&
            results.slice(0, 3).map((result) => {
              const {
                id,
                original_title,
                vote_average,
                vote_count,
                release_date,
                poster_path,
              } = result;

              return (
                <MovieCard
                  key={id}
                  title={original_title}
                  rating={vote_average}
                  votes={vote_count}
                  release={release_date}
                  poster={"" + baseURL + "w500/" + poster_path}
                />
              );
            })}
        </CardContainer>
        <SectionHeadings>Browse by category</SectionHeadings>
        <Button onClick={displayAll}>All</Button>
        <Button onClick={displayAction}>Action</Button>
        <Button onClick={displayComedy}>comedy</Button>
        <Button onClick={displayRomance}>romance</Button>
        <Button onClick={displayFantasy}>fantsy</Button>

        <Movie>
          {!moviesLoading &&
            movieResults.map((result) => {
              const {
                id,
                original_title,
                vote_average,
                vote_count,
                release_date,
                poster_path,
              } = result;

              return (
                <BroweseMovie
                  key={id}
                  title={original_title}
                  rating={vote_average}
                  votes={vote_count}
                  release={release_date}
                  poster={"" + baseURL + "w185/" + poster_path}
                  onClick={() => {
                    dispatch(movieDetail(id));
                    dispatch(Mobile());
                  }}
                />
              );
            })}
        </Movie>
      </MainContentContainer>
      {isMobile && <MobileDetail />}
    </>
  );
};

export default MainContent;
