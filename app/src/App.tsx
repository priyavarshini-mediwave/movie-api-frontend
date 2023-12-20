import { lazy, Suspense, useState } from "react";
import "@picocss/pico";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { IaddUser } from "./Interfaces/interfaces";
import "./App.css";
import Home from "./pages/Home";
const AddUserForm = lazy(() => import("./pages/AddUserForm"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const LoginForm = lazy(() => import("./pages/LoginForm"));

import ProtectedRoute from "./services/ProtectedRoute";
const AddMovie = lazy(() => import("./pages/AddMovie"));
const ViewOneMovie = lazy(() => import("./pages/ViewOneMovie"));
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

  function onAddToApp(dataFromHome: IaddUser) {
    console.log("dataToApp", data);
    setData(dataFromHome);
    console.log("datatoEditForm", data);
  }

  return (
    <>
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<Home />}></Route> */}
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home
                    onEditAddfromHome={(dataFromHome) => {
                      //console.log("dataFromHome", dataFromHome);
                      onAddToApp(dataFromHome);
                    }}
                  />
                </ProtectedRoute>
              }
            />
            <Route path="/SignUp" element={<AddUserForm />}></Route>
            <Route path="/login" element={<LoginForm />}></Route>
            {/* <Route
              path="/editUser"
              element={<EditUserForm userToUpdate={data} />}
            ></Route> */}
            <Route path="addMovie" element={<AddMovie />}></Route>
            <Route path="/movies/list/:id" element={<ViewOneMovie />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
}
export default App;
