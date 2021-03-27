import counter from "./counter";
import isLogged from "./isLogged";
import isMobile from "./isMobile";
import MovieDetail from "./MovieDetail";
import MovieReducer from "./GlobalMovies";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  counter,
  isLogged,
  isMobile,
  MovieDetail,
  MovieReducer,
});
export default rootReducer;
