import React from "react";
import { addFavourite } from "../actions";
import { removeFromFavourites } from "../actions";

class MovieCard extends React.Component {
  handleFavouriteClick = () => {
    const { movie } = this.props;
    this.props.dispatch(addFavourite(movie));
  };

  handleUnfavouriteClick = () => {
    const { movie } = this.props;
    this.props.dispatch(removeFromFavourites(movie));
  };

  render() {
    const { movie, isFavourite } = this.props;
    return (
      <div className="movie-card">
        <div className="left"></div>
        <img alt="movie-poster" src={movie.Poster} />
        <div className="right">
          <div className="title">{movie.Title}</div>
          <div className="plot">{movie.Plot}</div>
          <div className="footer">
            <div className="rating">{movie.imdbRating}</div>
            {isFavourite ? (
              <button
                className="unfavourite-btn"
                onClick={this.handleUnfavouriteClick}
              >
                Unfavourite
              </button>
            ) : (
              <button
                className="favourite-btn"
                onClick={this.handleFavouriteClick}
              >
                Add to Favourite
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
