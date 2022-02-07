import { useState } from 'react';
import React from 'react';

const Button = props => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}
const HasVotes = (props) => {
  return <p>has {props.vote} votes</p>
}

const MostVotedAnecdote = (props) => {
  const maxVotes = Math.max(...props.vote);
  const indexMaxVotes = props.vote.indexOf(maxVotes);

  return (
    <div>
      <h1>Anecdote with most votes</h1>
      <p>{props.anecdotes[indexMaxVotes]}</p>
      <HasVotes vote={props.vote[indexMaxVotes]}/>
    </div>
  );}

const App = () => {
    const anecdotes = [
      'If it hurts, do it more often',
      'Adding manpower to a late software project makes it later!',
      'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      'Premature optimization is the root of all evil.',
      'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients',
    ];

    const [selected, setSelected] = useState(0);
    const [vote, setVote] = useState(Array(anecdotes.length).fill(0));

    const handleClickAnecdote = () => {
      const randAnecdote = Math.floor(Math.random() * anecdotes.length);
      setSelected(randAnecdote);
    }

    const handleClickVote = () => {
      const copy = [...vote];
      copy[selected] += 1;
      setVote(copy);
    }

    return (
      <div>
        <p>{anecdotes[selected]}</p>
        <HasVotes vote={vote[selected]} />
        <Button onClick={handleClickVote} text="vote" />
        <Button onClick={handleClickAnecdote} text="next anecdote" />
        <MostVotedAnecdote vote={vote} anecdotes={anecdotes} />
      </div>
    );
}

export default App;
