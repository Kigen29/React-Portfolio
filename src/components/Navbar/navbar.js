import React from 'react';
import './navbar.css'

const Navbar = () => {

    return (

        <>
  {/* header section */}
  <section id="home" className="section header py-5">
    {/* navbar */}
    <nav className="navbar">
      <div className="brand-and-toggler">
        <a href="index.html" className="navbar-brand">
          Emmanuel Kigen
        </a>
        <button type="button" className="navbar-toggler" id="navbar-toggler">
          <i className="fa fa-bars" style={{ fontSize: 24 }} />
        </button>
      </div>
      <div className="navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="#home" className="nav-link">
              home
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">
              about
            </a>
          </li>
          <li className="nav-item">
            <a href="#portfolio" className="nav-link">
              portfolio
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">
              contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
    {/* end of navbar */}
    {/* header banner */}
    <div className="header-banner">
      <div className="header-banner-content">
        <div className="banner-line" />
        <h1 className="banner-title">
          <span>Hello There,</span>
          <span>I am Emmanuel Kigen.</span>
          <a href="#contact">
            <button type="button" className="banner-btn">
              Hire Me
            </button>
          </a>
        </h1>
      </div>
    </div>
    {/* end of header banner */}
  </section>
</>


    )


}

export default Navbar
