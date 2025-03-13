import Left from "../components/left";
import Right from "../components/right";
import "../sass/home.scss";

export default function Home() {
  return (
    <>
      <div className="home">
        <Left />
        <Right />
      </div>
    </>
  );
}
