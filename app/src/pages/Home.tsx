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
import UserInfo from "./UserInfo";
const Home = () => {
  const [movies, setMovies] = useState<IMovietoshow[]>([]);
  const [user, setuser] = useState<IuserInfo>({
    first_name: "",
    last_name: "",
    email: "",
    user_name: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showModalMsg, setShowModalMsg] = useState<IShowError>({
    action: "",
    msg: "",
  });
  const [showInfo, setShowInfo] = useState(false);
  const toggleModal = () => {
    setShowModal((prevShowModal) => !prevShowModal);
  };
  const handleInfoClose = () => {
    setShowInfo(false);
  };
  useEffect(() => {
    async function getMoviesFromAPI() {
      setIsLoading(true);

      try {
        const getMoviesResponse = await getMovies();

        setMovies(getMoviesResponse.data);
      } catch (error) {
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
  }, [movies]);
  async function handleUserInfo() {
    try {
      const getuserInfo = await viewUserInfo();
      // console.log("getuserInfo", getuserInfo);
      // console.log("data", getuserInfo.data);
      setuser(getuserInfo.data);
      console.log("user:", user);
      setShowInfo(true);
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        setShowModalMsg({
          action: "Unable to show user",
          msg: error.message,
        });
      }
    }
  }

  return (
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
          <div className="HomeBtnLogin">
            <Link to="/login">Login</Link>
          </div>
          <div>
            <button className="infoBtn" onClick={handleUserInfo}>
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
          <Link to="/SignUp">SignIn Here</Link>
          <span></span>
          <p>Create a Account ?</p>
        </div>
      </article>
      {/* )} */}
      {showInfo ? (
        <>
          <UserInfo
            user={user}
            openUserInfo={showInfo}
            toggleshowInfo={handleInfoClose}
          />
        </>
      ) : (
        <></>
      )}
    </Layout>
  );
};

export default Home;
