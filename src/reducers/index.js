export default function add_movie(state = [], action) {
  if (action.type === "ADD_MOVIES") {
    return action.movies;
  }
  return state;
}
