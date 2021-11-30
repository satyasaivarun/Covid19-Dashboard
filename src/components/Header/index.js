import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <nav className="navBar">
    <h1 className="covidNavHeading">
      COVID19<span className="covidNavSpan">INDIA</span>
    </h1>
    <div className="headingLinkContainer">
      <Link to="/home" className="linkHomeStyle">
        Home
      </Link>
      <Link to="/about" className="linkAboutStyle">
        About
      </Link>
    </div>
  </nav>
)

export default Header
