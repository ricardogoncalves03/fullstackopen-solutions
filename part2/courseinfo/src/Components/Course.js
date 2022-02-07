import React from "react";


const Header = ({course}) => {
  return (
    <h1>{course}</h1>
  )
}

const Part = ({part, exercises}) => {
  return (
    <p>{part} {exercises}</p>
  )
}

const Content = ({ course }) => (
  <div>
    {course.map((part) => (
      <div key={part.id}>
        <Part part={part.name} exercises={part.exercises} />
      </div>
    ))}
  </div>
);
const SumExercises = ({ parts }) => {
  const sum = parts.reduce((sum, part) => sum + part.exercises, 0);

  return <p>Number of exercises {sum}</p>
}

const Course = (props) => 
  <div>
    {props.course.map(course => 
      <div key={course.id}>
        <Header course={course.name} /> 
        <Content course={course.parts} />
        <SumExercises parts={course.parts} />
      </div>
  )}
  </div>

export default Course;
