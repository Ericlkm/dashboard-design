import MainNav from "../components/mainNav";
import "../sass/login.scss";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { AuthContext } from "../utils/authContext";
import { PacmanLoader } from "react-spinners";
import thumbUp from "../img/thumbup.png";
import auth from "../utils/auth";

export default function Login() {
  const { dispatch, isFetching } = useContext(AuthContext);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [err, setErr] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  const mutate = useMutation({
    mutationFn: async (user) => {
      dispatch({ type: "LOGIN_START" });
      try {
        const { data } = await axios.post("/api/login", user);
        auth.login(data.token);
        dispatch({ type: "LOGIN_START", payload: data });
        return data;
      } catch (err) {
        console.log(err);
        dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
        setErr(err.response.data);
      }
    },
    onSuccess: () => {
      console.log("good");
    },
  });

  const handleLogin = (e) => {
    e.preventDefault();
    try {
      mutate.mutate({ ...loginForm });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="login-container">
        <MainNav />
        <div className="login">
          <div className="login-card">
            <div className="left">
              <div className="title">
                <h1>Welcome Back!</h1>
                <img src={thumbUp} alt="" />
              </div>
              <p>
                We’re happy to see you again. Please enter your credentials to
                access your account. To continue enjoying all the features of
                your account, please log in with your credentials.
              </p>
              <div className="link">
                <h4>Dont have an account?</h4>
                <Link to="/register">Sign up here.</Link>
              </div>
            </div>
            <div className="right">
              <h3>Access your dashboard!</h3>
              <div className="form">
                <form action="">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleInput}
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleInput}
                  />

                  {err && (
                    <small style={{ paddingInline: "1rem" }}>{err}</small>
                  )}
                  <button onClick={handleLogin}>
                    {isFetching ? (
                      <PacmanLoader size={8} color="yellow" />
                    ) : (
                      "Login"
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
