import Part from "./Part";

const Content = props => {
  console.log(props);
  return (
    <div>
      <Part part={props.part[0].part} exercises={props.part[0].exercises}/>
      <Part part={props.part[1].part} exercises={props.part[1].exercises}/>
      <Part part={props.part[2].part} exercises={props.part[2].exercises}/>
    </div>
  );
}

export default Content;
