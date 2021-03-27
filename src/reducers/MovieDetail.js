const MovieDetail = (state = 0, action) => {
  switch (action.type) {
    case "MOVIE_DETAIL":
      return action.payload;
    default:
      return state;
  }
};
export default MovieDetail;
