import { Link } from "react-router-dom";
import { IuserInfo } from "../Interfaces/interfaces";

interface IUserModal {
  userMsg: IuserInfo;
  closeModal: () => void;
  navigateToHome?: () => void;
}

const UserModal: React.FC<IUserModal> = ({
  userMsg,
  closeModal,
  navigateToHome,
}) => {
  return (
    <dialog open>
      <article>
        <a
          href="#close"
          aria-label="Close"
          className="close"
          onClick={() => closeModal()}
        ></a>
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
        </footer>
      </article>
    </dialog>
  );
};

export default UserModal;
