import './App.css'
import { FaBrain, FaLightbulb } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";



function App() {

  return (
    <>
      <div className='main'>
        <header>
          <h1 className="logo">Harvey.</h1>
          <div className="menu">
            <span> </span>
            <span> </span>
            <span> </span>
          </div>
        </header>
        <div className='image'>
          <h3 className='text'>DIGITAL AGENCY</h3>
          <div className='description-div'>
            <p className="description">Lorem ipsum dolor sit amet consectetur elit. <br /> Repellendus perferendis ducimus.</p>
          </div>
          <button className='btn-contact'>Contact Us</button>
        </div>
        <div className="cards-container">
          <div className="card">
            <RiSendPlaneFill size={45} />
            <h2>Feature Concept.</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente iure hic dicta facilis quasi? Alias, quo iusto! Reprehenderit cum est cumque quia. Sint ipsam tempore error obcaecati officia quaerat ab!</p>
          </div>
          <div className="card">
            <FaBrain size={45} />
            <h2>Big Ideas.</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente iure hic dicta facilis quasi? Alias, quo iusto! Reprehenderit cum est cumque quia. Sint ipsam tempore error obcaecati officia quaerat ab!</p>
          </div>
          <div className="card">
            <FaLightbulb size={45} />
            <h2>Creative.</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente iure hic dicta facilis quasi? Alias, quo iusto! Reprehenderit cum est cumque quia. Sint ipsam tempore error obcaecati officia quaerat ab!</p>
          </div>
        </div>
      </div>
      <footer>
        <div className="footer-content">
          <h3>Let's Talk?</h3>
          <p className='description'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem et error accusamus rem molestiae. Corporis expedita iste deleniti earum non maxime blanditiis nulla dolorem exercitationem molestiae eveniet, voluptate ut cupiditate!</p>
          <button className="btn-contact">Make An Enquiry</button>
        </div>
        <div className="rights">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </footer>
    </>
  )
}

export default App
