import map from "./../images/map/map.jpg";
import { useEffect, useState } from "react";
import Menu from "./Menu";

export default function Main() {
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

    // TO DO: RECOGNIZE THAT THE CORRECT CHAR IS BEING CLICKED
    // ADD TO LEADERBOARD, BLUR/GRAY SELECTED CHARS
  };

  useEffect(() => {
    if (isMenuOpen) {
      console.log("CLICKED: ", clickCoordinates);
    }
  }, [clickCoordinates]);

  const checkClick = (character) => {
    let x = clickCoordinates.x;
    let y = clickCoordinates.y;
    let batman = document.querySelector(".batman");
    let sonic = document.querySelector(".sonic");
    let waldo = document.querySelector(".waldo");
    const screenWidth = window.innerWidth;
    const screenHeight = document.querySelector("main img").height;
    let minX = screenWidth * 0.084;
    let maxX = screenWidth * 0.13;
    let minY = screenHeight * 0.672;
    let maxY = screenHeight * 0.685;

    // console.log(minX, maxX, minY, maxY);

    // console.log(screenWidth);
    // console.log(screenHeight);

    if (character === "batman") {
      if (x > minX && x < maxX && y > minY && y < maxY) {
        batman.className += " found";
        alert("Batman Found!!!");
        document.querySelector(".batman-button").style.display = "none";
      } else {
        alert("not Batman :(");
      }
    } else if (character === "sonic") {
    } else {
    }
  };

  return (
    <main onClick={handleClick}>
      <img src={map} alt="cartoon background with pop culture characters" />
      <Menu
        checkClick={checkClick}
        hidden={!isMenuOpen}
        position={clickCoordinates}
      />
    </main>
  );
}
