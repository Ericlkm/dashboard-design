import MainNav from "../components/mainNav";
import "../sass/register.scss";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { AuthContext } from "../utils/authContext";
import { FcStackOfPhotos } from "react-icons/fc";

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

  if (isFetching) {
    return <h1>Loading......</h1>;
  }
  return (
    <>
      <div className="reg-container">
        <MainNav />
        <div className="register">
          <div className="reg-card">
            <div className="left">
              <h1>Register</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                accusantium dicta ipsa. Cumque eligendi delectus nulla tempora
                nesciunt odit eos nam consequatur cupiditate. Deserunt modi,
                voluptatem assumenda laboriosam numquam dicta?
              </p>
              <div className="link">
                <h3>Already have an account?</h3>
                <Link to="/login">click here</Link>
              </div>
            </div>
            <div className="right">
              <h3>Lorem ipsum dolor sit </h3>
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
                  <button onClick={handleRegister} disabled={isFetching}>
                    Submit
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
