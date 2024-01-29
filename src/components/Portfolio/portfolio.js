import React from 'react';
import './portfolio.css'
import port1 from '../../assets/home.PNG';
import port2 from '../../assets/Capture.PNG';
import port3 from '../../assets/Port.PNG';

const Portfolio = () => {

    return (

        <>
  {/* portfolio section */}
  <section id="portfolio" className="portfolio py-5">
    {/* title */}
    <div className="title">
      <h2 className="title-text">portfolio</h2>
      <h3 className="title-subtext">Some Projects I have Done So Far</h3>
    </div>
    {/* end of title */}
    <div className="portfolio-wrapper">
      <div className="imgs-group">
        <div className="all desktop img-item">
        <img src={port2} alt="" />
          <div className="service-card">
            <i className="bx bxs-user-voice" />
            <h3>Car Rental System</h3>
            <p>
              A system where clients can rent cars online. The system is built
              using PHP, HTML, CSS, JavaScript and MySQL.
            </p>
          </div>
        </div>
        <div className="all desktop img-item">
          <img src={port1} alt="" />
          <div className="service-card">
            <i className="bx bxs-user-voice" />
            <h3>A Restaurant Rewiew Sentiment Analysis System</h3>
            <p>
              A system that analyses restaurant reviews and gives a
              positive,neutral and negative sentiment. The system is built using
              Python, HTML, CSS, JavaScript and MySQL.
            </p>
          </div>
        </div>
        <div className="all desktop img-item">
        <img src={port3} alt="" />
          <div className="service-card">
            <i className="bx bxs-user-voice" />
            <h3>Portfolio Website</h3>
            <p>
              A portfolio website that showcases my skills,Interests, projects
              and CV. The website is built using HTML, CSS, JavaScript and
              Bootstrap.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end of portfolio section */}
</>


        )

    }
    
    export default Portfolio