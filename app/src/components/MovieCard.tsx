import { IMovietoshow } from "../Interfaces/interfaces";

interface IMovieCard {
  movie: IMovietoshow;
}

const MovieCard: React.FC<IMovieCard> = ({ movie }) => {
  console.log("movie", movie);
  let overall_rating = movie.rating;
  let overall_rating_new = overall_rating.toFixed(2);
  console.log(overall_rating_new);
  console.log(
    "overall_rating_new",
    typeof overall_rating_new,
    "overall_rating",
    typeof overall_rating
  );
  return (
    <>
      <h3>{movie.movie_name}</h3>
      <p className="movie_desc"> {movie.movie_desc}</p>
      <p className="release_year">Released In: {movie.release_year}</p>
      <p className="rating">
        Rating:<span>{overall_rating_new}</span>
      </p>
    </>
  );
};

export default MovieCard;
// B654F5
