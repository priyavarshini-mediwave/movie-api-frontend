import { useState } from "react";
import Layout from "../components/Layout";
import OtpValidation from "./OtpValidation";
import { sendOtpApi } from "../services/api";
import { useNavigate } from "react-router-dom";
const FogotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setEmail(value);
  }
  const handleOtpForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(email);
    handleSendOtp(email);
  };
  async function handleSendOtp(email: string) {
    try {
      const otpPayload = {
        email: email,
      };
      const sendOtpRes = await sendOtpApi(otpPayload);
      //   console.log(sendOtpRes);
      //   console.log(sendOtpRes.data.response.user_id);
      let Navuser_id = sendOtpRes.data.response.user_id;
      if (sendOtpRes) {
        navigate(`/users/otp-validation/${Navuser_id}`);
        setEmail("");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <Layout title="Forgot Password">
        <div>
          <form className="forgotPwdForm" onSubmit={(e) => handleOtpForm(e)}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter your registered email to get the verification Otp"
              onChange={(e) => handleInputChange(e)}
            ></input>
            <div className="forgotPwdSubmitDiv">
              <button type="submit" className="forgotPwdSubmit">
                Send Otp
              </button>
            </div>
          </form>
        </div>
      </Layout>
    </>
  );
};
export default FogotPassword;
