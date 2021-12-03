import './index.css'
import {Link} from 'react-router-dom'

const SearchList = props => {
  const {eachResult} = props
  return (
    <Link className="linkStyle" to={`/state/${eachResult.state_code}`}>
      <li className="searchList">
        <div className="listItemContainer">
          <p className="stateNameTextSearch">{eachResult.state_name}</p>
          <div className="stateCodeContainer">
            <p className="stateCodeTextSearch">{eachResult.state_code}</p>
            <img
              src="https://res.cloudinary.com/doxyss1uk/image/upload/v1638340415/Covid19/Line_z3jtfq.png"
              alt="stateCodeIcon"
              className="stateCodeIcon"
            />
          </div>
        </div>
        <hr className="hrLine" />
      </li>
    </Link>
  )
}

export default SearchList
