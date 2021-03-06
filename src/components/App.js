import React from "react";
import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";

import { addMovies, setShowFavourites } from "../actions";

class App extends React.Component {
  componentDidMount() {
    // Make api call
    // get data
    // and dispatch an action
    // to update this data to store
    const { store } = this.props;
    store.subscribe(() => {
      console.log("UPDATED");
      this.forceUpdate();
    });
    store.dispatch(addMovies(data));
  }

  isMovieFavourite = (movie) => {
    const { favourites } = this.props.store.getState();

    const index = favourites.indexOf(movie);
    if (index !== -1) {
      // found the movie
      return true;
    }
    return false;
  };

  onChangeTab = (val) => {
    const { showFavourites } = this.props.store.getState();
    this.props.store.dispatch(setShowFavourites(val));
  };

  render() {
    const { list, favourites, showFavourites } = this.props.store.getState();
    // console.log("RENDER");
    // console.log("STATE", this.props.store.getState());
    const displayMovies = showFavourites ? favourites : list;
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${showFavourites ? "" : "active-tabs"}`}
              onClick={() => this.onChangeTab(false)}
            >
              movies
            </div>
            <div
              className={`tab ${showFavourites ? "active-tabs" : ""}`}
              onClick={() => this.onChangeTab(true)}
            >
              favourites
            </div>
          </div>
          <div className="list">
            {displayMovies.map((movie, index) => {
              return (
                <MovieCard
                  movie={movie}
                  key={index}
                  dispatch={this.props.store.dispatch}
                  isFavourite={this.isMovieFavourite(movie)}
                />
              );
            })}
          </div>
          {displayMovies.length === 0 ? (
            <div className="no-movies">No movies to display!</div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
