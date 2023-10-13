import React from "react";
import "./_login_form.scss";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const loginUser = useSelector((state) => state.loginReducer);
  const dispatch = useDispatch();
  
  const inputHandleChange = (e) => {
    const { name, value } = e.target;
    const payload = { ...loginUser, [name]: value };
    dispatch(payload);
  };

  return (
    <div className="container login-box p-5 pb-1 mt-5">
      <div className="text-center mt-2">
        <h3>LOGIN</h3>
        <p className="fw-light">Welcome back!Login with your credentials</p>
      </div>
      <div>
        <label className="fw-light mb-2">Email</label>
        <br />
        <input type="email" name="email" onChange={inputHandleChange} />
        <br />
        <label className="fw-light mb-2">Password</label>
        <br />
        <input type="password" name="password" onChange={inputHandleChange} />
      </div>
      <div className="mt-4">
        <button>Login</button>
        <p className="fw-light text-center mt-2">
          Don't have an account?<span className="fw-bold">Sign up</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
