import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="username"></input>
        <input type="password" placeholder="password"></input>
        <button>Login</button>
        <span>
          Don't have an account? <Link to="/register">Sign up</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
