import { IMovietoshow } from "../Interfaces/interfaces";

interface IMovieCard {
  movie: IMovietoshow;
}

const MovieCard: React.FC<IMovieCard> = ({ movie }) => {
  let rating = movie.overall_rating;

  return (
    <>
      <h3>{movie.movie_name}</h3>
      <p className="movie_desc"> {movie.movie_desc}</p>
      <p className="release_year">Released In: {movie.release_year}</p>
      <p className="rating">
        Rating:<span>{rating}</span>
      </p>
    </>
  );
};

export default MovieCard;
// B654F5
