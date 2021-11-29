import { ADD_MOVIES } from "../actions";
import { ADD_FAVOURITE } from "../actions";

const initialMoviesState = {
  list: [],
  favourites: [],
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
    default:
      return state;
  }
}
