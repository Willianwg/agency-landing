import './App.css'
import { FaBrain, FaLightbulb, FaLaptopCode } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import { MdDesignServices } from "react-icons/md";
import { HiIdentification } from "react-icons/hi";
import { RiComputerLine } from "react-icons/ri";
import aboutImage from './assets/about-image.jpg';

function App() {

  return (
    <div className='page'>
      <div className='main'>
        <header>
          <h1 className="logo">Harvey.</h1>
          <div className="menu">
            <span className='span-menu'> </span>
            <span className='span-menu'> </span>
            <span className='span-menu'> </span>
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
        <section about="about-us" className="about">
          <div className="about-left">
            <div className="section-label-area">
              <span className='section-label-line'></span>
              <h3 className='section-label'>ABOUT US</h3>
            </div>
            <h2 className='section-text'>We Are Experts <br /> In Our Field<span className='point'>.</span></h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, ducimus accusamus velit explicabo, voluptas facilis commodi eius ad dolores nam a? Dicta illo dolor id, eius sed perferendis qui molestiae.</p>
            <button className='colored-btn'>Contact Us</button>
          </div>
          <img src={aboutImage} />
        </section>
        <section about='services' className='services' >
          <div className='section-information'>
            <div className="about-left">
              <div className='section-label-area'>
                <span className='section-label-line'></span>
                <h3 className='section-label'>Services</h3>
              </div>
              <h3 className='section-text'>We do Everything<span className='point'>.</span></h3>
              <p>Reprehenderit aliquam rerum illo, aperiam natus voluptas esse totam omnis, quisquam aliquid labore, aspernatur impedit a at? Cum.</p>
            </div>
            <button className='colored-btn'>See More</button>
          </div>
          <div className="cards-container">
            <div className="card">
              <div className='service-card-icon'>
                <MdDesignServices size={45} fill="#16163c" />
              </div>
              <h2>UI/UX Design</h2>
              <p> Alias, quo iusto! Reprehenderit cum est cumque quia. Sint ipsam tempore error obcaecati officia quaerat ab!</p>
            </div>
            <div className="card">
              <div className='service-card-icon'>
                <FaLaptopCode size={45} fill="#16163c" />
              </div>
              <h2>Development</h2>
              <p> Alias, quo iusto! Reprehenderit cum est cumque quia. Sint ipsam tempore error obcaecati officia quaerat ab!</p>
            </div>
            <div className="card">
              <div className='service-card-icon'>
                <RiComputerLine size={45} fill="#16163c" />
              </div>
              <h2>Visual Design</h2>
              <p> Alias, quo iusto! Reprehenderit cum est cumque quia. Sint ipsam tempore error obcaecati officia quaerat ab!</p>
            </div>
            <div className="card">
              <div className='service-card-icon'>
                <HiIdentification size={45} fill="#16163c" />
              </div>
              <h2>Brand&Identity</h2>
              <p> Alias, quo iusto! Reprehenderit cum est cumque quia. Sint ipsam tempore error obcaecati officia quaerat ab!</p>
            </div>
          </div>
        </section>
        <section about='portfolio' className='portfolio'>
          <div className='section-information'>
            <div className="about-left">
              <div className='section-label-area'>
                <span className='section-label-line'></span>
                <h3 className='section-label'>Portfolio</h3>
              </div>
              <h3 className='section-text'>Our latest project<span className='point'>.</span></h3>
              <p>Reprehenderit aliquam rerum illo, aperiam natus voluptas esse totam omnis, quisquam aliquid labore, aspernatur impedit a at? Cum.</p>
            </div>
            <button className='colored-btn'>See More</button>
          </div>
        </section>
        <section about='testimonials' className='testimonials'>
          <div className='section-information'>
            <div className="about-left">
              <div className='section-label-area'>
                <span className='section-label-line'></span>
                <h3 className='section-label'>Testimonials</h3>
              </div>
              <h3 className='section-text'>what clients say<span className='point'>.</span></h3>
              <p>Reprehenderit aliquam rerum illo, aperiam natus voluptas esse totam omnis, quisquam aliquid labore, aspernatur impedit a at? Cum.</p>
            </div>
          </div>
        </section>
      </div>
      <footer>
        <div className="footer-content">
          <h3>Let's Talk?<span className='point'>.</span></h3>
          <p className='description'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem et error accusamus rem molestiae. Corporis expedita iste deleniti earum non maxime blanditiis nulla dolorem exercitationem molestiae eveniet, voluptate ut cupiditate!</p>
          <button >Make An Enquiry</button>
        </div>
        <div className="rights">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
