import Part from "./Part";

const Total = props => {
  return ( 
    <div>
      <p>Number of exercises {props.part[0].exercises + props.part[1].exercises + props.part[2].exercises}</p>
    </div>
  );
}

export default Total;