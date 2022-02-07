import { useState } from 'react';
import React from 'react';

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td>
        {props.text} {props.value}
      </td>
    </tr>
  )
}

const Statistics = (props) => {
    if (props.saveClicks.all === 0) {
      return "No feedback given";
    }
    return (
      <div>
        <table>
          <tbody>
            <StatisticLine text="good" value={props.saveClicks.good} />
            <StatisticLine text="neutral" value={props.saveClicks.neutral} />
            <StatisticLine text="bad" value={props.saveClicks.bad} />
            <StatisticLine text="all" value={props.saveClicks.all} />
          </tbody>
        </table>
      </div>
    );
}

const App = () => {
  const [saveClicks, setSaveClicks] = useState({
    good: 0, neutral: 0, bad: 0, all: 0
  })

  const handleGoodClick = () => {
    return () => {
      setSaveClicks({
      ...saveClicks, 
      good: saveClicks.good + 1,
      all: saveClicks.all + 1, 
    });
  }}

  const handleNeutralClick = () => {
    setSaveClicks({
      ...saveClicks,
      neutral: saveClicks.neutral + 1,
      all: saveClicks.all + 1,
    });
  }

  const handleBadClick = () => {
    setSaveClicks({
      ...saveClicks,
      bad: saveClicks.bad + 1,
      all: saveClicks.all + 1,
    });
  }


  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" onClick={handleGoodClick()}/>
      <Button text="neutral" onClick={handleNeutralClick}/>
      <Button text="bad" onClick={handleBadClick}/>
      <h1>statistics</h1>
      <Statistics saveClicks={saveClicks}/>
    </div>
  )
}

export default App;