import "../sass/navbar.scss";
import { CiUser, CiSettings, CiDark, CiLogout, CiLogin } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CgDetailsMore } from "react-icons/cg";
import { Dropdown, Space } from "antd";
import auth from "../utils/auth";
import { useContext } from "react";
import { AuthContext } from "../utils/authContext";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const currentPath = useLocation().pathname;
  const { user } = useContext(AuthContext);
  const items = [
    {
      icon: auth.loggedIn() ? <CiUser /> : <CiLogin />,
      label: auth.loggedIn() ? (
        <Link to="/profile">Profile</Link>
      ) : (
        <Link to="/login">Login</Link>
      ),
    },
    {
      icon: <CiDark />,
      label: "Theme",
    },
    {
      icon: <CgDetailsMore />,
      label: "More",
    },
    {
      icon: auth.loggedIn() ? <CiLogout /> : null,
      label: auth.loggedIn() ? (
        <span onClick={() => auth.logout()}>Logout</span>
      ) : null,
    },
  ];
  return (
    <>
      <div className="navbar">
        <div className="nav-card">
          <div className="nav-left">
            <Link to="/">
              / &nbsp;
              {currentPath === "/"
                ? `Dashboard `
                : `${currentPath
                    .charAt(1)
                    .toLocaleUpperCase()}${currentPath.slice(2)}`}
            </Link>
          </div>
          <div className="nav-right">
            <div className="search">
              <input type="text" placeholder="Search..." />
            </div>

            <div className="icons">
              {auth.loggedIn() ? null : (
                <span>
                  <Dropdown menu={{ items }}>
                    <Space>
                      <CiUser />
                    </Space>
                  </Dropdown>
                </span>
              )}
              <span>
                <CiSettings />
              </span>
              <span>
                <IoIosNotificationsOutline />
              </span>
            </div>

            {auth.loggedIn() ? (
              <div className="info">
                <Dropdown menu={{ items }}>
                  <Space>
                    <span>{user.username}</span>
                    {user.avatar ? (
                      <img src={"/uploads/" + user.avatar} />
                    ) : null}
                  </Space>
                </Dropdown>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
