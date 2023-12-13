import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import {
  IMovietoshow,
  IShowError,
  IaddUser,
  IuserInfo,
} from "../Interfaces/interfaces";
import { getMovies, viewUserInfo } from "../services/api";
import Loading from "../components/Loading";
import MovieCard from "../components/MovieCard";
import UserModal from "./UserModal";

const Home = () => {
  const [movies, setMovies] = useState<IMovietoshow[]>([]);

  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showModalMsg, setShowModalMsg] = useState<IShowError>({
    action: "",
    msg: "",
  });

  const toggleModal = () => {
    setShowModal((prevShowModal) => !prevShowModal);
  };
  const [showUserModal, setShowUserModal] = useState(false);
  const [showUserModalMsg, setShowUserModalMsg] = useState<IuserInfo>({
    first_name: "",
    last_name: "",
    email: "",
    user_name: "",
  });
  const toggleUserModal = () => {
    setShowUserModal((prevShowUserModal) => !prevShowUserModal);
  };
  useEffect(() => {
    async function getMoviesFromAPI() {
      setIsLoading(true);

      try {
        const getMoviesResponse = await getMovies();

        setMovies(getMoviesResponse.data);
      } catch (error) {
        console.log(error);
        if (error instanceof Error) {
          console.log(error.message);
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
    getMoviesFromAPI();
  }, []);
  // async function handleUserInfo() {
  //   try {
  //     const getuserInfo = await viewUserInfo();
  //     // console.log("getuserInfo", getuserInfo);
  //     // console.log("data", getuserInfo.data);
  //     setuser(getuserInfo.data);
  //     console.log("user:", user);
  //     setShowInfo(true);
  //   } catch (error) {
  //     console.log(error);
  //     if (error instanceof Error) {
  //       setShowModalMsg({
  //         action: "Unable to show user",
  //         msg: error.message,
  //       });
  //     }
  //   }
  // }
  async function handleUserModal() {
    try {
      const response = await viewUserInfo();
      console.log(response.data);
      if (response) {
        toggleUserModal();
        setShowUserModalMsg({
          first_name: response.data.first_name,
          last_name: response.data.last_name,
          email: response.data.email,
          user_name: response.data.user_name,
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
  return (
    <>
      <Layout title="Home">
        {/* {isLoading ? (
        <p>Loading Movies..</p>
      ) : ( */}
        <article className="container" data-theme="dark">
          <div className="HomeName grid">
            <div>
              <div className="iMDB">
                <p>iMDB</p>
              </div>
            </div>
            <div></div>
            {/* <div className="HomeBtnLogin">
              <Link to="/login">Login</Link>
            </div> */}
            <div>
              <button className="infoBtn" onClick={() => handleUserModal()}>
                Info
              </button>
            </div>
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
        </article>
        {/* )} */}
      </Layout>
      {showUserModal && (
        <UserModal
          userMsg={showUserModalMsg}
          closeModal={toggleUserModal}
          navigateToHome={bringback}
        />
      )}
    </>
  );
};

export default Home;
