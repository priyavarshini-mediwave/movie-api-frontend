import { Link } from "react-router-dom";
import { IMovietoshow } from "../Interfaces/interfaces";

import Rating from "@mui/material/Rating";
import { useState } from "react";
interface IMovieCard {
  movie: IMovietoshow;
}

const MovieCard: React.FC<IMovieCard> = ({ movie }) => {
  console.log("movie", movie);
  let overall_rating = movie.rating;
  // let overall_rating_new = overall_rating.toFixed(2);
  // const [ratingValue, setRatingValue] = useState({
  //   rating_value: 0,
  // });
  const [ratingValue, setRatingValue] = useState(0);
  console.log("your newValue is " + ratingValue);
  return (
    <>
      <h3>{movie.movie_name}</h3>
      <p className="movie_desc"> {movie.movie_desc}</p>
      <p className="release_year">Released In: {movie.release_year}</p>
      {/* <p className="rating">
        Rating:<span>{overall_rating_new}</span>
      </p> */}

      <Rating
        name="simple-controlled"
        value={overall_rating}
        // onChange={(event, newValue) => {
        //   setRatingValue(newValue);
        //   console.log("your newValue is " + newValue, ratingValue);
        // }}
      />
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
      <Rating
        name="simple-controlled"
        value={ratingValue}
        onChange={(e, newValue) => {
          setRatingValue(newValue || 0);
        }}
      />
    </>
  );
};

export default MovieCard;
// B654F5
