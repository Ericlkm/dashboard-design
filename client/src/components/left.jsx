import "../sass/left.scss";
import {
  AiOutlineBilibili,
  AiOutlineDashboard,
  AiOutlineTable,
} from "react-icons/ai";
import { CgInsights } from "react-icons/cg";
import { IoIosNotificationsOutline } from "react-icons/io";
import { GoGraph } from "react-icons/go";
import { MdOutlineDashboard } from "react-icons/md";
import { CiLogin, CiUser } from "react-icons/ci";
import { PiTrademarkRegisteredBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import auth from "../utils/auth";
import { AuthContext } from "../utils/authContext";
import { useContext } from "react";
export default function Left() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <div className="left-menu">
        <div className="left-card">
          <div className="top">
            <img
              src="https://cdn-icons-gif.flaticon.com/18999/18999303.gif"
              alt=""
            />

            <Link to="/" style={{ color: "white" }}>
              {auth.loggedIn() ? user.username : "User"}'s Dashboard
            </Link>
          </div>
          <div className="menu-box">
            <div className="menu">
              <MdOutlineDashboard />
              <Link to="/" className="item">
                Dashboard
              </Link>
            </div>
            <div className="menu">
              <AiOutlineTable />
              <a href="#table" className="item">
                Tables
              </a>
            </div>
            <div className="menu">
              <AiOutlineBilibili />
              <span className="item">Billing</span>
            </div>
            <div className="menu">
              <CgInsights />
              <span className="item">Insights</span>
            </div>
            <div className="menu">
              <IoIosNotificationsOutline />
              <span className="item">Notifications</span>
            </div>
            <div className="menu">
              <GoGraph />
              <span className="item">Graphs</span>
            </div>
            {auth.loggedIn() ? (
              <div className="menu">
                <CiUser />
                <Link to="/profile" className="item">
                  Profile
                </Link>
              </div>
            ) : (
              <>
                <div className="menu">
                  <CiLogin />
                  <Link to="/login" className="item">
                    Login
                  </Link>
                </div>
                <div className="menu">
                  <PiTrademarkRegisteredBold />
                  <Link to="/register" className="item">
                    Register
                  </Link>
                </div>
              </>
            )}
          </div>
          <div className="link">
            <Link to="https://github.com/ericlkm" target="_blank">
              Check my Github!
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
