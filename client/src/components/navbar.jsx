import "../sass/navbar.scss";
import { CiUser, CiSettings, CiDark } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CgDetailsMore } from "react-icons/cg";
import { Dropdown, Space } from "antd";
import auth from "../utils/auth";
export default function Navbar() {
  console.log(auth.loggedIn());
  const items = [
    {
      icon: auth.loggedIn() ? <CiUser /> : null,
      label: auth.loggedIn() ? <span>Profile</span> : null,
    },
    {
      icon: <CiDark />,
      label: "Theme",
    },
    {
      icon: <CgDetailsMore />,
      label: "More",
    },
  ];
  return (
    <>
      <div className="navbar">
        <div className="nav-card">
          <div className="nav-left">
            <span>/ Dashboard</span>
          </div>
          <div className="nav-right">
            <div className="search">
              <input type="text" placeholder="Search..." />
            </div>

            <div className="icons">
              <span>
                <Dropdown menu={{ items }}>
                  <Space>
                    <CiUser />
                  </Space>
                </Dropdown>
              </span>
              <span>
                <CiSettings />
              </span>
              <span>
                <IoIosNotificationsOutline />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
