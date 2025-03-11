import "../sass/navbar.scss";
import { CiUser, CiSettings, CiDark } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CgDetailsMore } from "react-icons/cg";
import { Dropdown, Space } from "antd";

export default function Navbar() {
  const items = [
    {
      icon: <CiUser />,
      label: "Profile",
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
