import { useNavigate, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { useState } from "react";
import { verifyOTPApi } from "../services/api";

const OtpValidation = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(0);
  const { user_id } = useParams();
  //   console.log("user_id", user_id);
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    const newOtpValue = parseInt(value);
    setOtp(newOtpValue);
  }
  const handleOtpSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleOtpVerification(otp);
  };
  async function handleOtpVerification(otp: number) {
    try {
      const verifyOtpPAyload = {
        otp: otp,
      };
      const verifyOTPres = await verifyOTPApi(verifyOtpPAyload, user_id || "");
      console.log("verifyOTPres", verifyOTPres);
      if (verifyOTPres) {
        navigate(`/users/forgot-passwordChange/${user_id}`);
        setOtp(0);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <Layout title="Otp validation">
        <div className="otpValidationDiv">
          <p>
            Check the OTP sent to your registered email. OTP will Expire in 5
            minutes.
          </p>
          <form className="otpValidForm" onSubmit={(e) => handleOtpSubmit(e)}>
            <label htmlFor="otpValue">OTP</label>
            <input
              type="number"
              name="otpValue"
              id="otpValue"
              className="otpValueInput"
              placeholder="Enter the 4 digit OTP sent to your email"
              min={1000}
              max={9999}
              required
              onChange={(e) => handleInputChange(e)}
            ></input>
            <div className="otpsubmitBtnDiv">
              <button type="submit" className="otpValueSubmitBtn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </Layout>
    </>
  );
};
export default OtpValidation;
