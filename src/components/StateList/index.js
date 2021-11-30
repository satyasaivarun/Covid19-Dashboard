import './index.css'

const StateList = props => {
  const {stateData} = props
  const {state, total, meta} = stateData
  const activeCases = total.confirmed - (total.recovered + total.deceased)
  return (
    <li className="stateListStyle">
      <p className="stateName">{state.state_name}</p>
      <p className="listText redL">{total.confirmed}</p>
      <p className="listText blueL">{activeCases}</p>
      <p className="listText greenL">{total.recovered}</p>
      <p className="listText grayL">{total.deceased}</p>
      <p className="listText grayPopulation">{meta.population}</p>
    </li>
  )
}
export default StateList
