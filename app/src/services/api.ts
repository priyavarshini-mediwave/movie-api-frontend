import axios from "axios";
import { ILogin, IaddUser } from "../Interfaces/interfaces";
//import { IMovieAdd } from "../Interfaces/Interface";
const axiosInstance = axios.create({
  baseURL: "http://localhost:3456",
  //   timeout: 1000,
});
const axiosInstancewithheader = axios.create({
  baseURL: "http://localhost:3456",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});
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
  return axiosInstancewithheader.get("/users/userInfo");
};
export const UpdateUser = (payload: IaddUser) => {
  return axiosInstancewithheader.patch("/users/user/updateUser", payload);
};
//Movie Routes
export const getMovies = () => {
  return axiosInstancewithheader.get("/movies/list");
};
