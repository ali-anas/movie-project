import { ADD_MOVIES, SHOW_FAVOURITES } from "../actions";
import { ADD_FAVOURITE } from "../actions";
import { REMOVE_FROM_FAVOURITES } from "../actions";
import { SET_SHOW_FAVOURITES } from "../actions";

const initialMoviesState = {
  list: [],
  favourites: [],
  showFavourites: false,
};

export default function add_movie(state = initialMoviesState, action) {
  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      };
    case ADD_FAVOURITE:
      return {
        ...state,
        favourites: [action.movie, ...state.favourites],
      };
    case REMOVE_FROM_FAVOURITES:
      const filteredArray = state.favourites.filter(
        (movie) => movie.Title !== action.movie.Title
      );
      return {
        ...state,
        favourites: filteredArray,
      };
    case SET_SHOW_FAVOURITES:
      return {
        ...state,
        showFavourites: action.isTrue,
      };
    default:
      return state;
  }
}
