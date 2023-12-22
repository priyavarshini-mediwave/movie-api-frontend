interface ILayout {
  title?: string;
  children: React.ReactNode;
}
interface IUserForm {
  type: string;
  addingUser?: (u: IaddUser) => void;
  userToUpdate?: IaddUser;
  loading?: boolean;
}
interface IaddUser {
  first_name: string;
  last_name: string;
  email: string;
  user_name: string;
  user_password: string;
  phone_no: string;
}
interface ILogin {
  email: string;
  user_password: string;
}
interface IuserInfo {
  first_name: string;
  last_name: string;
  email: string;
  user_name: string;
}

interface IShowError {
  action: string;
  msg: string;
}
interface IMovie {
  movie_name: string;
  movie_desc: string;
  release_year: string;
}
interface IMovietoshow {
  movie_id: string;
  user_id: string;
  movie_name: string;
  movie_desc: string;
  release_year: string;
  rating?: number;
}
interface IaddRatingPayload {
  rating_value: number;
}
export type {
  ILayout,
  IUserForm,
  IaddUser,
  ILogin,
  IShowError,
  IMovie,
  IMovietoshow,
  IuserInfo,
  IaddRatingPayload,
};
