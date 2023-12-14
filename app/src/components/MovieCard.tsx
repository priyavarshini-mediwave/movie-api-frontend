import { Link } from "react-router-dom";
import { IMovietoshow } from "../Interfaces/interfaces";

interface IMovieCard {
  movie: IMovietoshow;
}

const MovieCard: React.FC<IMovieCard> = ({ movie }) => {
  console.log("movie", movie);
  let overall_rating = movie.rating;
  let overall_rating_new = overall_rating.toFixed(2);

  return (
    <>
      <h3>{movie.movie_name}</h3>
      <p className="movie_desc"> {movie.movie_desc}</p>
      <p className="release_year">Released In: {movie.release_year}</p>
      <p className="rating">
        Rating:<span>{overall_rating_new}</span>
      </p>
      <div className="grid movieCardBtns">
        <Link to="/viewOneMovie" role="button">
          View full details
        </Link>
        <Link to="/UpdateMovie" role="button">
          Update Movie
        </Link>
      </div>
      <Link to="/AddRating" role="button" className="AddRatingBtn">
        Add Rating
      </Link>
    </>
  );
};

export default MovieCard;
// B654F5
