import waldoLogo from "./../images/logo/waldoLogo.png";
import Timer from "./Timer";

export default function Nav() {
  return (
    <nav>
      <h1>Where's Everyone?</h1>
      <Timer />
      <div className="nav-characters-container"></div>
    </nav>
  );
}
