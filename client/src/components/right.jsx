import "../sass/right.scss";
import Dashboard from "../pages/dashboard";
import { useLocation } from "react-router-dom";
import Profile from "../pages/profile";

export default function Right() {
  const current = useLocation().pathname;
  return <>{current === "/profile" ? <Profile /> : <Dashboard />}</>;
}
