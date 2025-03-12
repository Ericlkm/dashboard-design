import { Link } from "react-router-dom";

const styles = {
  fontSize: "1rem",
  padding: "1rem",
  backgroundColor: "transparent",
  //   position: "sticky",
  //   top: "0",
};

export default function MainNav() {
  return (
    <>
      <div className="nav" style={styles}>
        <Link to="/">
          <h1 style={{ color: " rgb(26, 26, 60)" }}>Dashboard!</h1>
        </Link>
      </div>
    </>
  );
}
