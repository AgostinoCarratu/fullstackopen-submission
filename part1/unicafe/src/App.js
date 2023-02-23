import { useState } from 'react'




//Header component

const Header = ({ text }) => {
  return (
    <div>
      <h1>{text}</h1> {/*This is the header */}
    </div>
  )
}


//Button component
//Per il bottone si può pensare di mettere una funzione che può prendere in input la cosa da aggiungere
const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}


//Statistic component (composed by statistic lines)
const Statistic = ({ data }) => {

  //Innanzitutto calcolo il totale per verificare cosa devo visualizzare
  const total = data.reduce((a, b) => a + b, 0)

  if(total === 0){
    return (
      <div>
        No feedback given
      </div>
    )
  }

  //Here I can use helper functions that elaborates data and then give to each statistic line a result
  const avg = (data) => {
    return (total / data.length).toFixed(2).toString()
  }

  const positive = (data) => {
    return (data[0] / total * 100).toFixed(2).toString() + " %"
  }

  return (
    <table>
      <tbody>
        <StatisticLine valueToShow={data[0]} text={"good"}/>
        <StatisticLine valueToShow={data[1]} text={"neutral"}/>
        <StatisticLine valueToShow={data[2]} text={"bad"}/>
        <StatisticLine valueToShow={total} text={"all"}/>
        <StatisticLine valueToShow={avg(data)} text={"average"}/>
        <StatisticLine valueToShow={positive(data)} text={"positive"}/>
      </tbody>
    </table>
  )
}

//Statistic line component
//Questa ha bisogno di prendersi in ingresso la roba di cui ha bisogno per creare la statistica
const StatisticLine = ( {valueToShow, text} ) => {

  return (
    <tr>
      <td>{text}</td>
      <td>{valueToShow}</td> 
    </tr>
  )
}



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  //Funzioni che servono a cambiare lo stato
  // Da fare: refactor per creare una sola funzione che si prende in input lo stato da cambiare

  const increaseGood = () => {
    setGood(good + 1)
  }

  const increaseNeutral = () => {
    setNeutral(neutral + 1)
  }

  const increaseBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Header text={"Give Feedback"}/>
      <Button onClick={increaseGood} text={"Good"}/>
      <Button onClick={increaseNeutral} text={"Neutral"}/>
      <Button onClick={increaseBad} text={"Bad"}/>
      <Header text={"Statistics"}/>
      <Statistic data={[good, neutral, bad]}/>
    </div>
  )
}


export default App;


