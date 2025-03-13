import MainNav from "../components/mainNav";
import "../sass/register.scss";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { AuthContext } from "../utils/authContext";
import { FcStackOfPhotos } from "react-icons/fc";
import { PacmanLoader } from "react-spinners";

export default function Register() {
  const { dispatch, isFetching } = useContext(AuthContext);
  const [regForm, setRegForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [err, setErr] = useState(false);
  const [file, setFile] = useState(null);

  const mutate = useMutation({
    mutationFn: async (data) => {
      dispatch({ type: "REGISTER_START" });
      try {
        const res = await axios.post("/api/register", data);
        dispatch({ type: "REGISTER_SUCCESS", payload: res.data });
        console.log(res.data);
        location.assign("/login");
        setErr(false);
      } catch (err) {
        console.log(err);
        setErr(err.response.data);
        dispatch({ type: "REGISTER_FAILURE", payload: err.response.data });
      }
    },
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setRegForm({ ...regForm, [name]: value });
  };

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("/api/avatar", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      let avatarImg = "";
      if (file && !err) {
        avatarImg = await upload();
      }
      mutate.mutate({ ...regForm, avatar: avatarImg });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="reg-container">
        <MainNav />
        <div className="register">
          <div className="reg-card">
            <div className="left">
              <h1>Welcome Dashboardians!</h1>
              <p>
                Welcome! Sign up to join our community and enjoy exclusive
                access to our content and features. Simply fill out the form
                below to get started. We’re excited to have you on board!
              </p>
              <div className="link">
                <h4>Already have an account?</h4>
                <Link to="/login">Login here!</Link>
              </div>
            </div>
            <div className="right">
              <div className="title">
                <h3>Get started absolutely free!</h3>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1195/1195017.png"
                  alt=""
                />
              </div>
              <div className="form">
                <form action="">
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={handleInput}
                  />
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
                  <div className="upload">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <FcStackOfPhotos />
                      <label htmlFor="file">profile image</label>
                    </div>
                    <input
                      type="file"
                      id="file"
                      name="file"
                      hidden
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                    {file && <img src={URL.createObjectURL(file)} />}
                  </div>
                  {err && (
                    <small style={{ paddingInline: "1rem" }}>{err}</small>
                  )}
                  <button onClick={handleRegister}>
                    {isFetching ? (
                      <PacmanLoader size={8} color="yellow" />
                    ) : (
                      "Register"
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
