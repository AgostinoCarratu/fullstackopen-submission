import { useState } from 'react'


////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
//////                                                                        //////
//////                       COMPONENTS DEFINITIONS                           //////
//////                                                                        //////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////



//////////////////////////// HEADER COMPONENT //////////////////////////////////////

const Header = ({ text }) => <div><h1>{text}</h1> {/*This is the header */}</div>


///////////////////////////// BUTTON COMPONENT /////////////////////////////////////

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

////////////////////////////// STATISTIC COMPONENT /////////////////////////////////

const Statistic = ({ data }) => {

  const total = data.reduce((a, b) => a + b, 0)

  if(total === 0){
    return (
      <div>
        No feedback given
      </div>
    )
  }

  // Hepler functions


  // This function computes the average of a data array

  const avg = (data) => (total / data.length).toFixed(2).toString()
  

  // This function computes the percentage of positive (good) feedback

  const positive = (data) => (data[0] / total * 100).toFixed(2).toString() + " %"

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


/////////////////////////////// STATISTIC LINE COMPONENT /////////////////////////////////

const StatisticLine = ( {valueToShow, text} ) => <tr><td>{text}</td><td>{valueToShow}</td></tr>


////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
//////                                                                        //////
//////                          Main App                                      //////
//////                                                                        //////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

const App = () => {

  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const increase = (setter, property) => () => setter(property + 1)


  return (
    <div>
      <Header text={"Give Feedback"}/>
      <Button onClick={increase(setGood, good)} text={"Good"}/>
      <Button onClick={increase(setNeutral, neutral)} text={"Neutral"}/>
      <Button onClick={increase(setBad, bad)} text={"Bad"}/>
      <Header text={"Statistics"}/>
      <Statistic data={[good, neutral, bad]}/>
    </div>
  )
}


export default App;


