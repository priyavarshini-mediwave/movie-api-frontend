import { lazy, Suspense } from "react";
import "@picocss/pico";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
const AddUserForm = lazy(() => import("./pages/AddUserForm"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const LoginForm = lazy(() => import("./pages/LoginForm"));

import ProtectedRoute from "./services/ProtectedRoute";
import EditUser from "./pages/EditUser";

const EditMovie = lazy(() => import("./pages/EditMovie"));
const AddMovie = lazy(() => import("./pages/AddMovie"));
const ViewOneMovie = lazy(() => import("./pages/ViewOneMovie"));
const UpdatePassword = lazy(() => import("./pages/UpdatePassword"));
function Loading() {
  return <p>Loading ...</p>;
}
function App() {
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
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path="/SignUp" element={<AddUserForm />}></Route>
            <Route path="/login" element={<LoginForm />}></Route>

            <Route path="/users/user/update" element={<EditUser />}></Route>
            <Route path="addMovie" element={<AddMovie />}></Route>
            <Route path="/movies/list/:id" element={<ViewOneMovie />} />
            <Route path="/movies/update/:id" element={<EditMovie />}></Route>
            <Route
              path="/users/user/updatePassword"
              element={<UpdatePassword />}
            ></Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
}
export default App;
