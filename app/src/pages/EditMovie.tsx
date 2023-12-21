import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";
import { IShowError } from "../Interfaces/interfaces";
//To Show Modal
const [showModal, setShowModal] = useState(false);
const [showModalMsg, setShowModalMsg] = useState<IShowError>({
  action: "",
  msg: "",
});

const toggleModal = () => {
  setShowModal((prevShowModal) => !prevShowModal);
};
const EditMovie = () => {
  const [editMovie, setEditMovie] = useState({
    movie_name: "",
    movie_desc: "",
    release_year: 0,
  });

  return (
    <>
      <Layout title="EditMovie">
        {/* <h1>EditMovie</h1>
        <div className="container ">
          <form>
            <label htmlFor="movie_name">Movie Name</label>
            <input
              type="text"
              name="movie_name"
              id="movie_name"
              placeholder="Enter Movie Name"
              onChange={(e) => handleInputChange(e)}
            ></input>
            <label htmlFor="movie_desc">Movie Description</label>
            <input
              type="text"
              name="movie_desc"
              id="movie_desc"
              placeholder="Give a brief description of the movie"
              onChange={(e) => handleInputChange(e)}
            ></input>
            <label htmlFor="release_year">Release Year</label>
            <input
              type="text"
              name="release_year"
              id="release_year"
              placeholder="Enter Movie Release Year"
              onChange={(e) => handleInputChange(e)}
            ></input>

            <div className="EditMovie-AddBtns">
              <Link to="/" role="button" className="EditMovie-CancelBtn">
                Back
              </Link>
              <button type="submit" className="EditMovieBtn">
                Add Movie
              </button>
            </div>

            {showModal && (
              <Modal errorMsg={showModalMsg} closeModal={toggleModal} />
            )}
          </form>
        </div> */}
      </Layout>
    </>
  );
};
export default EditMovie;
