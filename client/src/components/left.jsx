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
import { CiLogin } from "react-icons/ci";
import { PiTrademarkRegisteredBold } from "react-icons/pi";

export default function Left() {
  return (
    <>
      <div className="left-menu">
        <div className="left-card">
          <div className="top">
            <img
              src="https://cdn-icons-png.flaticon.com/128/6820/6820955.png"
              alt=""
            />
            <h3>Eric's Dashboard</h3>
          </div>
          <div className="menu">
            <MdOutlineDashboard />
            <span className="item">Dashboard</span>
          </div>
          <div className="menu">
            <AiOutlineTable />
            <span className="item">Tables</span>
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
          <div className="menu">
            <CiLogin />
            <span className="item">Login</span>
          </div>
          <div className="menu">
            <PiTrademarkRegisteredBold />
            <span className="item">Register</span>
          </div>
          <div className="menu">
            {/* icon */}
            <button>Go pro</button>
          </div>
        </div>
      </div>
    </>
  );
}
