export default function Card(props) {
  return (
    <div className="card">
      <img src={props.img} />
      <h1>Level {props.level}</h1>
    </div>
  );
}
