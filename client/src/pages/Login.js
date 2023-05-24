import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input required type="text" placeholder="username"></input>
        <input required type="password" placeholder="password"></input>
        <button>Login</button>
        <p>Error message placeholder</p>
        <span>
          Don't have an account? <Link to="/register">Sign up</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
