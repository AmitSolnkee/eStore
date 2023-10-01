import React from "react";
import "./_login_form.scss";
import { useSelector } from "react-redux";

const Login = () => {
  const loginUser = useSelector(state => state.loginReducer)
  console.log('loginUser',loginUser)
  return (
    <div className="container login-box p-5 pb-1 mt-5">
      <div className="text-center mt-2">
        <h3>LOGIN</h3>
        <p className="fw-light">Welcome back!Login with your credentials</p>
      </div>
      <div>
        <label className="fw-light mb-2">Email</label>
        <br />
        <input type="email" />
        <br />
        <label className="fw-light mb-2">Password</label>
        <br />
        <input type="password" />
      </div>
      <div className="mt-4">
        <button>Login</button>
        <p className="fw-light text-center mt-2">Don't have an account?<span className="fw-bold">Sign up</span></p>
      </div>
    </div>
  );
};

export default Login;
