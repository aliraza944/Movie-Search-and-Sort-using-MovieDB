export const increment = () => {
  return {
    type: "INCREMENT",
  };
};
export const decrement = () => {
  return {
    type: "IS_MOBILE",
  };
};

export const isMobile = () => {
  return {
    type: "IS_MOBILE",
  };
};
export const movieDetail = (id) => {
  return {
    type: "MOVIE_DETAIL",
    payload: id,
  };
};
export const discoverMovieGlobal = (movies) => {
  return {
    type: "MOVIE_GLOBAL",
    payload: movies,
  };
};
