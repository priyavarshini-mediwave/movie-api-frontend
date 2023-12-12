import axios from "axios";
import { IaddUser } from "../Interfaces/interfaces";
//import { IMovieAdd } from "../Interfaces/Interface";
const axiosInstance = axios.create({
  baseURL: "http://localhost:3456",
  //   timeout: 1000,
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
export const addUser = (payload: IaddUser) => {
  return axiosInstance.post("/signup", payload);
};
