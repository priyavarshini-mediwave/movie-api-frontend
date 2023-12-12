interface ILayout {
  title?: string;
  children: React.ReactNode;
}
interface IUserForm {
  type: string;
  addingUser?: (u: IaddUser) => void;
  userToUpdate?: IupdateUser;
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

interface IupdateUser {
  first_name: string;
  last_name: string;
  email: string;
  user_name: string;
  user_password: string;
  phone_no: string;
}
interface IShowError {
  action: string;
  msg: string;
}
interface IMovie {
  user_id: string;
  movie_name: string;
  movie_desc: string;
  release_year: number | undefined;
}
interface IMovietoshow {
  user_id: string;
  movie_name: string;
  movie_desc: string;
  release_year: number | undefined;
  overall_rating: number;
}
export type {
  ILayout,
  IUserForm,
  IaddUser,
  ILogin,
  IupdateUser,
  IShowError,
  IMovie,
  IMovietoshow,
  IuserInfo,
};
