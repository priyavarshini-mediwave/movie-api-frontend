import { Link } from "react-router-dom";
import { IaddUser } from "../Interfaces/interfaces";

interface IUserModal {
  userMsg: IaddUser;
  closeModal: () => void;
  navigateToHome?: () => void;
  onEditAdd: (userMsg: IaddUser) => void;
}

const UserModal: React.FC<IUserModal> = ({
  userMsg,
  closeModal,
  navigateToHome,
  onEditAdd,
}) => {
  function handleDatatoEdit(userMsg: IaddUser) {
    console.log("ToEditUser", userMsg);
    onEditAdd(userMsg);
  }
  return (
    <dialog open>
      <article>
        <a
          href="#close"
          aria-label="Close"
          className="close"
          onClick={() => closeModal()}
        ></a>
        <h1>Your Account Details</h1>
        <p>First_name:{userMsg.first_name}</p>
        <p>Last_name:{userMsg.last_name}</p>
        <p>Email:{userMsg.email}</p>
        <p>User_name:{userMsg.user_name}</p>
        <footer>
          <Link
            to="/"
            role="button"
            data-target="modal-example"
            onClick={navigateToHome}
          >
            Confirm
          </Link>
          <Link
            to="/editUser"
            role="button"
            data-target="modal-example"
            onClick={() => handleDatatoEdit(userMsg)}
          >
            Update
          </Link>
        </footer>
      </article>
    </dialog>
  );
};

export default UserModal;
