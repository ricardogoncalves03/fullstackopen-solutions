import React from 'react';
import Header from './Header';
import Content from './Content';
import Total from './Total';

const App = () => {
  const course = {
    name:'Half Stack application development'
  }
  const part = [
    {
      part: 'Fundamentals of React',
      exercises: 10,
    },
    {
      part: 'Using props to pass data',
      exercises: 7,
    },
    {
      part: 'State of a component',
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header course={course}/>
      <Content part={part}/>
      <Total part={part}/>
    </div>
  );
}

export default App;