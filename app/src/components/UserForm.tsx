import { IaddUser, IupdateUser } from "../Interfaces/interfaces";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IUserForm } from "../Interfaces/interfaces";

const UserForm: React.FC<IUserForm> = ({
  type,
  addingUser,
  userToUpdate,
  loading,
}) => {
  const [user, setUser] = useState<IaddUser>(
    userToUpdate || {
      first_name: "",
      last_name: "",
      email: "",
      user_name: "",
      user_password: "",
      phone_no: "",
    }
  );

  //console.log("loading", loading);
  //const [newLoading, setnewLoading] = useState(loading);
  //console.log("newLoading", newLoading);
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }
  // console.log("Say user:", user);
  function handleAdd(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    //setnewLoading(true);
    //console.log(newLoading);
    if (addingUser) {
      addingUser(user);
    }
  }

  return (
    <div className="container">
      <form onSubmit={(e) => handleAdd(e)}>
        <label htmlFor="first_name"> First Name :</label>
        <input
          type="text"
          name="first_name"
          id="first_name"
          // value={user.first_name}
          placeholder="Enter your First Name"
          required
          onChange={(e) => handleInputChange(e)}
        ></input>
        <label htmlFor="last_name"> Last Name :</label>
        <input
          type="text"
          name="last_name"
          id="last_name"
          // value={user.last_name}
          placeholder="Enter your Last Name"
          onChange={(e) => handleInputChange(e)}
        ></input>
        <label htmlFor="email"> Email :</label>
        <input
          type="text"
          name="email"
          id="email"
          // value={user.email}
          placeholder="Enter your Active Email"
          onChange={(e) => handleInputChange(e)}
        ></input>
        <label htmlFor="user_name"> UserName :</label>
        <input
          type="text"
          name="user_name"
          id="user_name"
          // value={user.user_name}
          placeholder="Enter your UserName"
          onChange={(e) => handleInputChange(e)}
        ></input>
        <label htmlFor="user_password"> Password :</label>
        <input
          type="password"
          name="user_password"
          id="user_password"
          // value={user.user_password}
          placeholder="Enter your Password"
          onChange={(e) => handleInputChange(e)}
        ></input>
        <label htmlFor="phone_no"> Contact Number :</label>
        <input
          type="text"
          name="phone_no"
          id="phone_no"
          // value={user.phone_no}
          placeholder="Enter your phone number"
          onChange={(e) => handleInputChange(e)}
        ></input>

        {type === "edit" ? (
          <>
            <div className="User-form-input-Edit-buttons ">
              <Link to="/" role="button" className="User-form-btn cancelBtn">
                Cancel
              </Link>
              <button type="submit" className="User-form-btn saveBtn">
                Save
              </button>
              {/* <input type="submit" value="save"></input> */}
            </div>
          </>
        ) : (
          <>
            <div className="User-form-input-AddFormbuttons">
              <Link
                to="/login"
                role="button"
                className="User-form-btn cancelBtn"
              >
                Login
              </Link>
              <button type="submit" className="User-form-btn AddUserBtn">
                Add
              </button>
              {/* <input type="submit" value="submit"></input> */}
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export { UserForm };
