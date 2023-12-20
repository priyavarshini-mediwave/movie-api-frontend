import { Link, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
//interfaces
import { IMovietoshow, IShowError, IaddUser } from "../Interfaces/interfaces";

//services
import { getMovies, viewUserInfo } from "../services/api";

//components
//import Loading from "../components/Loading";
import MovieCard from "../components/MovieCard";
import UserModal from "./UserModal";
import logo from "../assets/placeholder.jpg";
import christmas from "../assets/santa-dance-christmas-music.gif";
import Modal from "../components/Modal";

// Home Component starts here
interface IHome {
  onEditAddfromHome: (u: IaddUser) => void;
}

const Home: React.FC<IHome> = ({ onEditAddfromHome }) => {
  const navigate = useNavigate();
  //To Show Movies
  const [movies, setMovies] = useState<IMovietoshow[]>([]);

  // To show Loading
  const [isLoading, setIsLoading] = useState(false);

  //To show error and success Modal
  const [showModal, setShowModal] = useState(false);
  const [showModalMsg, setShowModalMsg] = useState<IShowError>({
    action: "",
    msg: "",
  });

  const toggleModal = () => {
    setShowModal((prevShowModal) => !prevShowModal);
  };

  //To show user Info in modal
  const [showUserModal, setShowUserModal] = useState(false);
  const [showUserModalMsg, setShowUserModalMsg] = useState<IaddUser>({
    first_name: "",
    last_name: "",
    email: "",
    user_name: "",
    user_password: "",
    phone_no: "",
  });
  const toggleUserModal = () => {
    setShowUserModal((prevShowUserModal) => !prevShowUserModal);
  };

  //ToEdit User
  const [showEdit, setshowEdit] = useState(false);
  const [userData, setUserData] = useState<any>();

  function onAddtoHome(data: IaddUser) {
    console.log(data);
    setUserData(data);
  }

  useEffect(() => {
    console.log("userData:", userData);
    onEditAddfromHome(userData);
  }, [userData]);
  // console.log("showEdit", showEdit);
  // showEdit ? navigate("/editUser") : navigate("/");

  //Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1); // Initialize with 1 page initially
  const itemsPerPage = 3;

  const handlePageChange = (e: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    async function getMoviesFromAPI() {
      setIsLoading(true);

      try {
        const response = await getMovies(currentPage, itemsPerPage);
        setMovies(response.data.movies);
        console.log(response);

        const totalItems = response.data.totalItems;
        const calculatedTotalPages = Math.ceil(totalItems / itemsPerPage);
        setTotalPages(calculatedTotalPages || 1); // Ensure at least 1 page
        console.log(
          "calculatedTotalPages",
          calculatedTotalPages,
          "totalItems",
          totalItems
        );
      } catch (error) {
        if (error instanceof Error) {
          setShowModal(true);
          console.log(error.message);
          setShowModalMsg({
            action: "Unable to show movies",
            msg: error.message,
          });
        }
      } finally {
        setIsLoading(false);
      }
    }
    getMoviesFromAPI();
  }, [currentPage, itemsPerPage]);

  async function handleUserModal() {
    try {
      const response = await viewUserInfo();

      if (response) {
        toggleUserModal();
        setShowUserModalMsg({
          first_name: response.data.first_name,
          last_name: response.data.last_name,
          email: response.data.email,
          user_name: response.data.user_name,
          user_password: response.data.user_password,
          phone_no: response.data.phone_no,
        });
      }
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        toggleUserModal();
        setShowModalMsg({
          action: "Failed",
          msg: error.message,
        });
      }
    } finally {
      setIsLoading(false);
    }
  }
  const bringback = () => {
    setShowUserModal(false);
  };
  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <>
      <Layout title="Home">
        {isLoading ? (
          <p>Loading Movies..</p>
        ) : (
          <article className="container" data-theme="dark">
            <div className="HomeName grid">
              <div>
                <div className="iMDB">
                  <p>iMDB</p>
                </div>
              </div>

              <div className="userUtils">
                <div className="AddMovieIcon">
                  <Link to="/addMovie">Add a movie</Link>
                </div>
                <button className="infoBtn" onClick={() => handleUserModal()}>
                  <img src={logo} alt="info" className="icon" />
                </button>
                <div className="logout">
                  <button onClick={logout} className="logoutBtn">
                    Logout
                  </button>
                </div>
              </div>
            </div>
            <div className="SearchDiv grid">
              <img src={christmas} alt="santa"></img>

              <label htmlFor="search" className="search">
                <input type="text" className="searchBar"></input>
                <button className="searchBtn"> 🔍</button>
              </label>
            </div>
            <div className="showMovies grid">
              {movies.map((m, i) => (
                <div key={i} className="moviecards">
                  <MovieCard movie={m}></MovieCard>
                </div>
              ))}
            </div>
            <div className="signInfooter">
              <Link to="/login"> Login</Link>
              <span></span>
              <p>Token Expired?</p>
            </div>
            <Stack spacing={2}>
              <Pagination
                className="pagination"
                count={totalPages}
                page={currentPage}
                onChange={handlePageChange}
                variant="outlined"
                shape="rounded"
                disabled={isLoading} // Disable while loading
                hideNextButton={currentPage === totalPages}
                hidePrevButton={currentPage === 1}
              />
            </Stack>
          </article>
        )}
      </Layout>
      {showUserModal && (
        <UserModal
          userMsg={showUserModalMsg}
          closeModal={toggleUserModal}
          navigateToHome={bringback}
          onEditAdd={(data) => {
            console.log("funcDAta", data);
            onAddtoHome(data);
          }}
        />
      )}
      {showModal && <Modal errorMsg={showModalMsg} closeModal={toggleModal} />}
    </>
  );
};

export default Home;
