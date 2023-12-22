import { useEffect, useState } from "react";
import { IaddUser } from "../Interfaces/interfaces";
import { viewUserInfo } from "../services/api";

const EditUser = () => {
  const [editUser, setEditUser] = useState<IaddUser>();
  console.log(editUser);
  useEffect(() => {
    async function toFindUserToEdit() {
      try {
        const userToEdit = await viewUserInfo();
        if (userToEdit) {
          console.log(userToEdit);
          setEditUser(userToEdit.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    toFindUserToEdit();
  }, []);
  return (
    <>
      <h1>EditUser</h1>
    </>
  );
};
export default EditUser;
