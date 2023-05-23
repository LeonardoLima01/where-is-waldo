import Card from "./Card";
import Timer from "./Timer";
import batman from "./../images/characters/batman.png";
import sonic from "./../images/characters/sonic.png";
import waldo from "./../images/characters/waldo.png";

export default function Nav() {
  const handleClick = () => {
    let dropdownMenu = document.querySelector(".nav-dropdown-characters");

    // Toggle dropdown menu visibility
    dropdownMenu.style.display =
      dropdownMenu.style.display === "flex" ? "none" : "flex";
  };

  return (
    <>
      <nav>
        <h1>Where's Everyone?</h1>
        <Timer />
        <button onClick={handleClick}>Show chars</button>
      </nav>
      <div className="nav-dropdown-characters">
        <Card name="Batman" img={batman} />
        <Card name="Sonic" img={sonic} />
        <Card name="Waldo" img={waldo} />
      </div>
    </>
  );
}
