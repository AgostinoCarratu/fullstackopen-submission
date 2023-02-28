import { useState } from 'react'


//////////////////////////////////////////////
////////////////  Components  ////////////////
//////////////////////////////////////////////

///////////////BUTTON COMPONENT////////////////

const Button = (props) => {
  return(
    <button onClick={props.onClick}>Testo prova</button>
  )
}

///////////////HEADER COMPONENT///////////////

const Header = ({ title }) => {
  return(
    <h1>{title}</h1>
  )
}

///////////////MOST VOTED COMPONENT////////////

const MostVoted = ({ votes, anecdotes }) => {

  let highIdx = 0

  // This is executed if the sum of all the votes is zero

  if (votes.reduce((a, b) => a + b, 0) === 0){
    return (
      <div>
        No votes
      </div>
    )
  }

  // If there are some votes, the program will search for the index of the most voted anecdote

  for(let i = 1; i < anecdotes.length; i++){
    if (votes[highIdx] < votes[i]){
     highIdx = i
    }
  }

  return (
    <div>
      {anecdotes[highIdx]}<br />
      has {votes[highIdx]} votes
    </div>
  )
}

/////////////////////APP COMPONENT//////////////////////

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))


  const voteAnecdote = () => {
    const copy = [...points]
    copy[selected] = copy[selected] + 1
    setPoints(copy)
  }

  const randSelected = () => {
    const randsel = Math.floor(Math.random() * anecdotes.length)
    setSelected(randsel)
  }

  return (
    <div>
      <Header title={"Anecdote of the day"} />
      {anecdotes[selected]}
      <br />
      has {points[selected]} votes
      <div>
        <Button onClick = {voteAnecdote} />
        <Button onClick = {randSelected} />
      </div>
      <Header title={"Anecdote with most votes"} />
      <MostVoted votes={points} anecdotes={anecdotes} />
    </div>
  )
}

export default App
