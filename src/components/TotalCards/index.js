import './index.css'

const TotalCards = props => {
  const {totalCases} = props
  return (
    <div className="unOrderedList">
      <div
        className="caseTotalContainer redBg"
        testid="countryWideConfirmedCases"
      >
        <p className="statusText red">Confirmed</p>
        <div>
          <img
            src="https://res.cloudinary.com/doxyss1uk/image/upload/v1638078828/Covid19/Group_osbfg7.png"
            className="iconSize"
            alt="tick"
          />
        </div>
        <p className="countText red">
          {totalCases.totalConfirmed.toLocaleString('en-US')}
        </p>
      </div>
      <div className="caseTotalContainer" testid="countryWideActiveCases">
        <p className="statusText blue">Active</p>
        <div>
          <img
            src="https://res.cloudinary.com/doxyss1uk/image/upload/v1638095379/Covid19/protection_1_wf5cbe.png"
            className="iconSize"
            alt="tick"
          />
        </div>
        <p className="countText blue">
          {totalCases.totalActive.toLocaleString('en-US')}
        </p>
      </div>
      <div className="caseTotalContainer" testid="countryWideRecoveredCases">
        <p className="statusText green">Recovered</p>
        <div>
          <img
            src="https://res.cloudinary.com/doxyss1uk/image/upload/v1638096180/Covid19/recovered_1_v8p6oh.png"
            className="iconSize"
            alt="tick"
          />
        </div>
        <p className="countText green">
          {totalCases.totalRecover.toLocaleString('en-US')}
        </p>
      </div>
      <div className="caseTotalContainer" testid="countryWideDeceasedCases">
        <p className="statusText gray">Deceased</p>
        <div>
          <img
            src="https://res.cloudinary.com/doxyss1uk/image/upload/v1638096179/Covid19/breathing_1_lgxazi.png"
            className="iconSize"
            alt="tick"
          />
        </div>
        <p className="countText gray">
          {totalCases.totalDeceased.toLocaleString('en-US')}
        </p>
      </div>
    </div>
  )
}

export default TotalCards
