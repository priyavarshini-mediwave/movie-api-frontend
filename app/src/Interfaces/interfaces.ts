interface ILayout {
  title?: string;
  children: React.ReactNode;
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
export type { ILayout, IaddUser, ILogin, IupdateUser, IShowError };
