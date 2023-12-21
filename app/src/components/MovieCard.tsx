import { Link, useParams } from "react-router-dom";
import { IMovietoshow, IShowError } from "../Interfaces/interfaces";
import Modal from "./Modal";
import Rating from "@mui/material/Rating";
import { useEffect, useState } from "react";
import { addRatingApi } from "../services/api";

interface IMovieCard {
  movie: IMovietoshow;
}

const MovieCard: React.FC<IMovieCard> = ({ movie }) => {
  // console.log("movie", movie);
  let overall_rating = movie.rating;

  const [showModal, setShowModal] = useState(false);
  const [showModalMsg, setShowModalMsg] = useState<IShowError>({
    action: "",
    msg: "",
  });

  const toggleModal = () => {
    setShowModal((prevShowModal) => !prevShowModal);
  };
  const [isLoading, setIsLoading] = useState(false);
  const [rating_value, setRatingValue] = useState(0);

  useEffect(() => {
    async function addRating() {
      try {
        const addRAtingPayload = {
          rating_value: rating_value,
        };
        const addRatingResponse = await addRatingApi(
          addRAtingPayload,
          movie.movie_id
        );

        if (addRatingResponse) {
          setShowModalMsg({
            action: "Success",
            msg: `Rating Added Successfully`,
          });
        }
      } catch (error) {
        if (error instanceof Error) {
          setShowModal(true);

          setShowModalMsg({
            action: "Unable to show movies",
            msg: error.message,
          });
        }
      } finally {
        setIsLoading(false);
        toggleModal();
      }
    }
    addRating();
  }, [rating_value]);
  return (
    <>
      <h3>{movie.movie_name}</h3>

      <p className="movie_desc"> {movie.movie_desc}</p>
      <p className="release_year">Released In: {movie.release_year}</p>

      <Rating name="simple-controlled" value={overall_rating} readOnly />
      <div className="grid movieCardBtns">
        <Link to={`/movies/list/${movie.movie_id}`} role="button">
          View Movie
        </Link>
        <Link to={`/movies/list/update/${movie.movie_id}`} role="button">
          Update Movie
        </Link>
      </div>
      <div className="Rating">
        <p>Rate the movie here:</p>
        <Rating
          className="RatingStars"
          name="simple-controlled"
          value={rating_value}
          onChange={(e, newValue) => {
            setRatingValue(newValue || 0);
          }}
        />
      </div>

      {showModal && <Modal errorMsg={showModalMsg} closeModal={toggleModal} />}
    </>
  );
};

export default MovieCard;
