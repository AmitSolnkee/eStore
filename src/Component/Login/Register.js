import React, { useState } from "react";
import "./_login_form.scss";
import { useNavigate } from "react-router-dom";
import OTPInput from "react-otp-input";
import axios from "axios";
import {
  isEmailValid,
  isMobileNumberValid,
  isPasswordValid,
  isFullnameValid,
} from "../../Validation/validations";

const Register = () => {
  const initialUserState = {
    fullname: "",
    emailid: "",
    password: "",
    mobNumber: "",
    sentOtp: false,
    otpApproved: false,
  };
  const initialValidateState = {
    fullname: "",
    vemail: "",
    vpassword: "",
    vmobile: "",
    otpVerification: "",
  };
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");

  const [userDet, setUserDet] = useState(initialUserState);
  const [isLoading, setisLoading] = useState(false);
  const [validate, setValidate] = useState(initialValidateState);

  const resetValidateState = () => {
    setValidate(initialValidateState);
  };

  const handleChange = (otpValue) => {
    setOtp(otpValue);
  };

  const inputHandleChange = (e) => {
    const { name, value } = e.target;
    setUserDet({ ...userDet, [name]: value });
  };

  const sendOtpReq = async () => {
    setUserDet({ ...userDet, sentOtp: true });
    try {
      await axios
        .post("http://localhost:5001/send-otp", {
          number: userDet.mobNumber,
        })
        .then((res) => console.log(res));
    } catch (error) {}
  };

  const verifyOtp = async () => {
    try {
      await axios
        .post("http://localhost:5001/otp-verification", { otp: otp })
        .then((res) => {
          if (res.data === "approved") {
            setUserDet({
              ...userDet,
              sentOtp: false,
              otpApproved: true,
            });
          }
        });
    } catch (error) {}
  };
  const registerUser = async () => {
    try {
      if (isLoading) {
        return;
      }
      setisLoading(true);

      const { fullname, emailid, password, mobNumber, otpApproved } = userDet;

      // Validation for different inputs
      if (!isFullnameValid(fullname)) {
        setValidate({ ...validate, fullname: "fullname cannot be empty" });
        return;
      }

      if (!isEmailValid(emailid)) {
        setValidate({ ...validate, vemail: "Email not valid" });
        return;
      }

      if (!isPasswordValid(password)) {
        setValidate({
          ...validate,
          vpassword: "password should have at least 8 characters",
        });
        return;
      }

      if (!isMobileNumberValid(mobNumber)) {
        setValidate({ ...validate, vmobile: "only 10 numbers allowed" });
        return;
      }

      if (!otpApproved) {
        setValidate({
          ...validate,
          otpVerification: "Mobile number not verified",
        });
        return;
      }
      resetValidateState(); //this will reset all state values of errors

      //  Post req sent for registering user in database
      await axios
        .post("http://localhost:5001/register-user", {
          fullname,
          emailid,
          password,
          mobNumber,
        })
        .then((response) => console.log("user registration", response));
    } catch (error) {
      console.error("Error while registering user", error);
    } finally {
      setisLoading(false);
    }
  };
  return (
    <div className="container login-box p-5 pb-1 mt-5">
      <div className="text-center mt-2">
        <h3>Register</h3>
        <p className="fw-light">
          Welcome!Your journey to a seamless and delightful shopping experience
          begins here.
        </p>
      </div>
      <div>
        <label className="fw-light mb-2">Full name</label>
        <br />
        <input
          className="mb-0"
          type="text"
          name="fullname"
          onChange={inputHandleChange}
        />
        <br />
        <span className="text-end text-danger fw-light">
          {validate.fullname}
        </span>
        <br />
        <label className="fw-light mb-2">Email</label>
        <br />
        <input
          className="mb-0"
          type="email"
          name="emailid"
          onChange={inputHandleChange}
        />
        <br />
        <span className="text-end text-danger fw-light">{validate.vemail}</span>
        <br />
        <label className="fw-light mb-2">Password</label>
        <br />
        <input
          className="mb-0"
          type="password"
          name="password"
          onChange={inputHandleChange}
        />
        <br />
        <span className="text-end text-danger fw-light">
          {validate.vpassword}
        </span>
        <br />
        <label className="fw-light mb-2">Mobile no</label>
        <br />
        <input
          className="mb-1"
          type="number"
          name="mobNumber"
          onChange={inputHandleChange}
        />
        <br />
        <span className="text-end text-danger fw-light">
          {validate.otpVerification !== ""
            ? validate.otpVerification
            : validate.vmobile}
        </span>
        <p
          className=" send-otp fw-bold text-success text-end "
          onClick={sendOtpReq}
        >
          {userDet.otpApproved ? (
            <span className="text-success fw-normal">
              Mobile number verified
            </span>
          ) : userDet.sentOtp ? (
            "otp sent"
          ) : (
            "send otp"
          )}
        </p>
        {userDet.sentOtp ? (
          <div className="otp-coantiner">
            <p className=" fs-4 text-center">Verify your otp</p>
            <OTPInput
              value={otp}
              onChange={handleChange}
              numInputs={6}
              renderSeparator={<span></span>}
              renderInput={(props) => <input {...props} />}
              containerStyle={{ justifyContent: "center" }}
              inputStyle={{ height: "50px", width: "50px", marginRight: "5%" }}
            />
            <button className="btn bg-white text-dark" onClick={verifyOtp}>
              Verify otp
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="mt-4">
        <button onClick={registerUser}>
          {isLoading ? "Loading..." : "Register"}
        </button>
        <p className="fw-light text-center mt-2">
          Already have an account?
          <span onClick={() => navigate("/login")} className="fw-bold">
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
