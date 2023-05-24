import map from "./../images/map/map.jpg";
import { useEffect, useState } from "react";
import Menu from "./Menu";
import { getPercentageData } from "../firebase";
import Modal from "./Modal";
import LeaderboardModal from "./LeaderboardModal";

export default function Main(props) {
  let { foundCharacters, setFoundCharacters, userTime } = props;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [clickCoordinates, setClickCoordinates] = useState({ x: 0, y: 0 });

  // Hide/Show menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClick = (event) => {
    const rect = event.target.getBoundingClientRect();

    // Coordinates of the click considering the scroll(Y)
    const clickedX = event.clientX - rect.left;
    const clickedY = event.clientY - rect.top + window.pageYOffset;

    // Update coordinates
    setClickCoordinates({ x: clickedX, y: clickedY });

    // Hide/Show menu
    toggleMenu();
  };

  useEffect(() => {
    if (isMenuOpen) {
      console.log("CLICKED: ", clickCoordinates);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clickCoordinates]);

  useEffect(() => {
    if (foundCharacters === 3) {
      alert("Found everyone!!!!!");
    }
  }, [foundCharacters]);

  let startX;
  let endX;
  let startY;
  let endY;

  const getCoordinates = async (character) => {
    let startXpercentage = await getPercentageData(character, "startX");
    let endXpercentage = await getPercentageData(character, "endX");
    let startYpercentage = await getPercentageData(character, "startY");
    let endYpercentage = await getPercentageData(character, "endY");

    const screenWidth = window.innerWidth;
    const screenHeight = document.querySelector("main img").height;

    console.log("Screen Width: ", screenWidth);
    console.log("Screen Height: ", screenHeight);
    console.log(
      startXpercentage,
      endXpercentage,
      startYpercentage,
      endYpercentage
    );

    startX = screenWidth * startXpercentage;
    endX = screenWidth * endXpercentage;
    startY = screenHeight * startYpercentage;
    endY = screenHeight * endYpercentage;
  };

  const checkClick = async (character) => {
    let x = clickCoordinates.x;
    let y = clickCoordinates.y;

    let batman = document.querySelector(".batman");
    let sonic = document.querySelector(".sonic");
    let waldo = document.querySelector(".waldo");

    if (character === "batman") {
      await getCoordinates("batman");

      if (x > startX && x < endX && y > startY && y < endY) {
        batman.className += " found";
        alert("Batman Found!!!");
        document.querySelector(".batman-button").style.display = "none";
        setFoundCharacters((prevCount) => prevCount + 1);
      } else {
        alert("not Batman :(");
      }
    } else if (character === "sonic") {
      await getCoordinates("sonic");

      if (x > startX && x < endX && y > startY && y < endY) {
        sonic.className += " found";
        alert("Sonic Found!!!");
        document.querySelector(".sonic-button").style.display = "none";
        setFoundCharacters((prevCount) => prevCount + 1);
      } else {
        alert("not Sonic :(");
      }
    } else {
      await getCoordinates("waldo");

      if (x > startX && x < endX && y > startY && y < endY) {
        waldo.className += " found";
        alert("Waldo Found!!!");
        document.querySelector(".waldo-button").style.display = "none";
        setFoundCharacters((prevCount) => prevCount + 1);
      } else {
        alert("not Waldo :(");
      }
    }
  };

  return (
    <main
      className={foundCharacters >= 3 ? "disable-scroll" : ""}
      onClick={handleClick}
    >
      <img src={map} alt="cartoon background with pop culture characters" />
      <Menu
        checkClick={checkClick}
        hidden={!isMenuOpen}
        position={clickCoordinates}
      />
      {foundCharacters === 3 && (
        <Modal userTime={userTime} setFoundCharacters={setFoundCharacters} />
      )}
      {foundCharacters === 4 && <LeaderboardModal />}
    </main>
  );
}
