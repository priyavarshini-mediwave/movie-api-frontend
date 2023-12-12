import { lazy, Suspense, useState } from "react";
import "@picocss/pico";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { IaddUser } from "./Interfaces/interfaces";
import "./App.css";
import Home from "./pages/Home";
const AddUserForm = lazy(() => import("./pages/AddUserForm"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const LoginForm = lazy(() => import("./pages/LoginForm"));
import UserInfo from "./pages/UserInfo";
function Loading() {
  return <p>Loading ...</p>;
}
function App() {
  const [data, setData] = useState<IaddUser>({
    first_name: "",
    last_name: "",
    email: "",
    user_name: "",
    user_password: "",
    phone_no: "",
  });
  // function onAddtoApp(data: IaddUser) {
  //   console.log(data);
  //   setData(data);
  // }
  // return (
  //   // <article data-theme="dark">
  //   //   {/* <h1>vite</h1> */}
  //   //   <AddUserForm />
  //   // </article>

  // );

  return (
    <>
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/SignUp" element={<AddUserForm />}></Route>
            <Route path="/login" element={<LoginForm />}></Route>
            <Route
              path="/userInfo"
              element={<UserInfo openUserInfo={true} />}
            ></Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
}
export default App;
