import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Layout from "../components/Layout";
import { IuserInfo } from "../Interfaces/interfaces";
interface IuserInfoForm {
  user?: IuserInfo;
  showInfofromHome?: boolean;
  toggleshowInfo?: (showInfo: boolean) => void;
}
const navigate = useNavigate();
const UserInfo: React.FC<IuserInfoForm> = ({
  user,
  toggleshowInfo,
  showInfofromHome,
}) => {
  console.log(user);
  const [showInfo, setShowInfo] = useState(showInfofromHome);
  const handleshowInfo = () => {
    console.log(showInfo);
    setShowInfo(false);
    if (toggleshowInfo) {
      toggleshowInfo(showInfo);
    }

    navigate("/");
  };
  return (
    <Layout title="userInfo">
      <div className="container">
        <h1>UserINFO</h1>

        {/* <Link to="/"></Link> */}
        <button onClick={handleshowInfo}>Go back to home?</button>
      </div>
    </Layout>
  );
};

export default UserInfo;
