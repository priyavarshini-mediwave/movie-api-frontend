import axios from "axios";
import { ILogin, IMovie, IaddUser } from "../Interfaces/interfaces";
//import { IMovieAdd } from "../Interfaces/Interface";
const axiosInstance = axios.create({
  baseURL: "http://localhost:3456",
  //   timeout: 1000,
});

const setHeaders = () => {
  const token = localStorage.getItem("token");
  let headers = {};
  if (token) {
    headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  }
  return headers;
};

// export const getMovies = () => {
//     return axiosInstance.get("/movies");
//   };

//   export const addMovie = (payload: IMovieAdd) => {
//     return axiosInstance.post("/movies", payload);
//   };

//   export const updateMovie = (payload: IMovieAdd, movieId: number) => {
//     return axiosInstance.put(`/movies/${movieId}`, payload);
//   };

//   export const deleteMovie = (movieId: number) => {
//     return axiosInstance.delete(`/movies/${movieId}`);
//   };

//User Routes
export const addUser = (payload: IaddUser) => {
  return axiosInstance.post("/signup", payload);
};
export const loginUserapi = (payload: ILogin) => {
  return axiosInstance.post("/login", payload);
};
export const viewUserInfo = () => {
  return axiosInstance.get("/users/userInfo", setHeaders());
};
export const UpdateUser = (payload: IaddUser) => {
  return axiosInstance.patch("/users/user/updateUser", payload, setHeaders());
};
//Movie Routes
export const getMovies = () => {
  return axiosInstance.get("/movies/list", setHeaders());
};
export const addMovieApi = (payload: IMovie) => {
  return axiosInstance.post("/movies", payload, setHeaders());
};
