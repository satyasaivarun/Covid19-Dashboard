import './index.css'
import {Component} from 'react'

class StateWiseDetails extends Component {
  componentDidMount() {
    this.getStatesData()
  }

  getStatesData = async () => {
    const {match} = this.props
    const {params} = match
    const {stateCode} = params
    const response = await fetch(
      `https://apis.ccbp.in/covid19-timelines-data/${stateCode}`,
    )
    const data = await response.json()
    console.log(data)
  }

  render() {
    return <h1>hello</h1>
  }
}

export default StateWiseDetails
