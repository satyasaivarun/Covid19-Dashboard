import './index.css'
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import {BiSearchAlt2} from 'react-icons/bi'
import Header from '../Header'
import StateList from '../StateList'
import TotalCards from '../TotalCards'
import Footer from '../Footer'

const statesList = [
  {
    state_code: 'AN',
    state_name: 'Andaman and Nicobar Islands',
  },
  {
    state_code: 'AP',
    state_name: 'Andhra Pradesh',
  },
  {
    state_code: 'AR',
    state_name: 'Arunachal Pradesh',
  },
  {
    state_code: 'AS',
    state_name: 'Assam',
  },
  {
    state_code: 'BR',
    state_name: 'Bihar',
  },
  {
    state_code: 'CH',
    state_name: 'Chandigarh',
  },
  {
    state_code: 'CT',
    state_name: 'Chhattisgarh',
  },
  {
    state_code: 'DN',
    state_name: 'Dadra and Nagar Haveli and Daman and Diu',
  },
  {
    state_code: 'DL',
    state_name: 'Delhi',
  },
  {
    state_code: 'GA',
    state_name: 'Goa',
  },
  {
    state_code: 'GJ',
    state_name: 'Gujarat',
  },
  {
    state_code: 'HR',
    state_name: 'Haryana',
  },
  {
    state_code: 'HP',
    state_name: 'Himachal Pradesh',
  },
  {
    state_code: 'JK',
    state_name: 'Jammu and Kashmir',
  },
  {
    state_code: 'JH',
    state_name: 'Jharkhand',
  },
  {
    state_code: 'KA',
    state_name: 'Karnataka',
  },
  {
    state_code: 'KL',
    state_name: 'Kerala',
  },
  {
    state_code: 'LA',
    state_name: 'Ladakh',
  },
  {
    state_code: 'LD',
    state_name: 'Lakshadweep',
  },
  {
    state_code: 'MH',
    state_name: 'Maharashtra',
  },
  {
    state_code: 'MP',
    state_name: 'Madhya Pradesh',
  },
  {
    state_code: 'MN',
    state_name: 'Manipur',
  },
  {
    state_code: 'ML',
    state_name: 'Meghalaya',
  },
  {
    state_code: 'MZ',
    state_name: 'Mizoram',
  },
  {
    state_code: 'NL',
    state_name: 'Nagaland',
  },
  {
    state_code: 'OR',
    state_name: 'Odisha',
  },
  {
    state_code: 'PY',
    state_name: 'Puducherry',
  },
  {
    state_code: 'PB',
    state_name: 'Punjab',
  },
  {
    state_code: 'RJ',
    state_name: 'Rajasthan',
  },
  {
    state_code: 'SK',
    state_name: 'Sikkim',
  },
  {
    state_code: 'TN',
    state_name: 'Tamil Nadu',
  },
  {
    state_code: 'TG',
    state_name: 'Telangana',
  },
  {
    state_code: 'TR',
    state_name: 'Tripura',
  },
  {
    state_code: 'UP',
    state_name: 'Uttar Pradesh',
  },
  {
    state_code: 'UT',
    state_name: 'Uttarakhand',
  },
  {
    state_code: 'WB',
    state_name: 'West Bengal',
  },
]

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    totalCases: {},
    apiStatus: 'INITIAL',
  }

  componentDidMount() {
    this.getApiData()
  }

  searchForState = event => {
    console.log(event.target.value)
    const filteredStateList = statesList.filter(eachObject =>
      event.target.value.includes(eachObject),
    )
    console.log(filteredStateList)
  }

  stateWiseCovidCaseList = () => {
    const {covidData} = this.state
    return (
      <ul className="unOrderListStyle">
        <div className="tableBorder">
          <div className="tableHeading">
            <p className="state">States/UT</p>
            <p className="confirmed">Confirmed</p>
            <p className="active">Active</p>
            <p className="recovered">Recovered</p>
            <p className="deceased">Deceased</p>
            <p className="population">Population</p>
          </div>
          <hr className="hrStyle" />
          {statesList.map(eachObject => {
            const stateCode = eachObject.state_code
            const {total, meta} = covidData[stateCode]
            const stateData = {state: eachObject, total, meta}
            return (
              <StateList
                stateData={stateData}
                key={stateData.state.state_code}
              />
            )
          })}
        </div>
      </ul>
    )
  }

  renderCovidStateView = () => {
    const {covidData, totalCases} = this.state
    return (
      <div className="mainContainer">
        <div className="inputContainer">
          <BiSearchAlt2 className="searchIcon" />
          <input
            className="homeInputStyle"
            placeholder="Enter the State"
            onChange={this.searchForState}
          />
        </div>
        <TotalCards totalCases={totalCases} />
        {this.stateWiseCovidCaseList()}
      </div>
    )
  }

  renderAllCovidDetails = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderCovidStateView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  renderLoadingView = () => (
    <div className="products-loader-container">
      <Loader type="Oval" color="#007BFF" height="53" width="53" />
    </div>
  )

  getApiData = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const apiUrl = 'https://apis.ccbp.in/covid19-state-wise-data'
    const response = await fetch(apiUrl)
    const data = await response.json()
    console.log(data)
    let confirmed = 0
    let active = 0
    let recovery = 0
    let deceased = 0
    statesList.forEach(eachObject => {
      const stateCode = eachObject.state_code
      const {total} = data[stateCode]
      confirmed += total.confirmed
      recovery += total.recovered
      deceased += total.deceased
    })
    active = confirmed - (recovery + deceased)
    const totalCovidCases = {
      totalConfirmed: confirmed,
      totalActive: active,
      totalRecover: recovery,
      totalDeceased: deceased,
    }
    this.setState({
      covidData: data,
      totalCases: totalCovidCases,
      apiStatus: apiStatusConstants.success,
    })
  }

  render() {
    const {covidData} = this.state

    return (
      <>
        <Header />
        <div className="HomeBgContainer">
          {this.renderAllCovidDetails()}
          <Footer />
        </div>
      </>
    )
  }
}

export default Home
