import Layout from "../components/Layout";
import Modal from "../components/Modal";
import { UpdateUser } from "../services/api";
import React, { useState } from "react";
import { IaddUser, IShowError } from "../Interfaces/interfaces";
import { UserForm } from "../components/UserForm";
import Loading from "../components/Loading";
interface IEditform {
  userToUpdate?: IaddUser;
}

const EditUserForm: React.FC<IEditform> = ({ userToUpdate }) => {
  console.log("userToUpdate", userToUpdate);
  const [isLoading, setIsLoading] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [showModalMsg, setShowModalMsg] = useState<IShowError>({
    action: "",
    msg: "",
  });

  const toggleModal = () => {
    setShowModal((prevShowModal) => !prevShowModal);
  };

  async function handleUserEdit(user: IaddUser) {
    //setIsLoading(true);
    try {
      const EditUserPayload = {
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        user_name: user.user_name,
        user_password: user.user_password,
        phone_no: user.phone_no,
      };
      {
        isLoading ? <Loading /> : <></>;
      }
      const UpdatedUser = await UpdateUser(EditUserPayload);
      if (UpdatedUser) {
        setShowModalMsg({
          action: "Success",
          msg: `User Details for "${EditUserPayload.user_name}" Updated Successfully`,
        });
        console.log(UpdatedUser);
      }

      //navigate("/");
    } catch (error) {
      console.log("Errored", error);
      if (error instanceof Error) {
        setShowModalMsg({
          action: "Failed to update User",
          msg: error.message,
        });
      }
    } finally {
      setIsLoading(false);
      toggleModal();
    }
  }

  return (
    <>
      <Layout title="UpdateUserForm">
        <div className="container userupdate">
          <>
            <div>
              <h1>Update Your Details</h1>
            </div>

            <UserForm
              type="edit"
              userToUpdate={userToUpdate}
              addingUser={(user) => handleUserEdit(user)}
            />
            {showModal && (
              <Modal errorMsg={showModalMsg} closeModal={toggleModal} />
            )}
          </>
        </div>
      </Layout>
    </>
  );
};
export default EditUserForm;
