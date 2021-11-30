import './index.css'

const Footer = () => (
  <div className="footerContainer">
    <h1 className="covidFooterHeading">
      COVID19<span className="covidNavSpan">INDIA</span>
      <p className="footerText">
        we stand with everyone fighting on the front lines
      </p>
      <div>
        <img
          src="https://res.cloudinary.com/doxyss1uk/image/upload/v1638182714/Covid19/Vector_4_bcc6g1.png"
          alt="vector"
          className="iconSize"
        />
        <img
          src="https://res.cloudinary.com/doxyss1uk/image/upload/v1638182756/Covid19/instagram_qsavk5.png"
          alt="instagram"
          className="iconSize"
        />
        <img
          src="https://res.cloudinary.com/doxyss1uk/image/upload/v1638182756/Covid19/path3611_abwmq9.png"
          alt="twitter"
          className="iconSize"
        />
      </div>
    </h1>
  </div>
)

export default Footer
