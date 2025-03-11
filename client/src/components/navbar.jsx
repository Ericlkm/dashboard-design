import "../sass/navbar.scss";
import { CiUser, CiSettings } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";

export default function Navbar() {
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
            <div popover="auto" id="user-popover">
              <h2>usre</h2>
            </div>
            <div className="icons">
              <span popoverTarget="user-popover">
                <CiUser />
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
