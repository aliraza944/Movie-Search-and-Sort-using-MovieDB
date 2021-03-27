const initialState = {};

const MovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "MOVIE_GLOBAL":
      return {
        ...state,
        state: action.payload,
      };
    default:
      return state;
  }
};
export default MovieReducer;
