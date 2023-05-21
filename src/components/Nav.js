import waldoLogo from "./../images/waldoLogo.jpg";

export default function Nav() {
  return (
    <nav>
      <img src={waldoLogo} alt="where is waldo main character" />
      <h1>
        <span className="blue">Where's </span> Waldo?
      </h1>
    </nav>
  );
}
