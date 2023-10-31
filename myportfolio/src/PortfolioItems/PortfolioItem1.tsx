import '../styles/portfolio.css';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function PortfolioItem1 () {

  const [navToggle, setNavToggle] = useState(false);
    //Will close the hamburger menu after a link is clicked
    useEffect(()=>{
      const navLinks = document.querySelectorAll('.nav__link');
      navLinks.forEach(link => {
          link.addEventListener('click', ()=>{
            document.body.classList.remove('nav-open');
          })
        });
  },[navToggle])
  
//Used to open the hamburger menu
function hamburgerClick(){
  setNavToggle(true);
  document.body.classList.toggle('nav-open');
}
  
    return (
      <>
        <body>
        <header>
              <div className="logo">
                  {/* <img src="img/devjane.png" alt=""> */}
              </div>
              <button className="nav-toggle" aria-label="toggle navigation" onClick={hamburgerClick}>
                  <span className="hamburger"></span>
              </button>
              <nav className="nav">
                  <ul className="nav__list">
                      <li className="nav__item"><Link to="/" className="nav__link">Home</Link></li>
                      <li className="nav__item"><Link to="/#services" className="nav__link">My Services</Link></li>
                      <li className="nav__item"><Link to="/#about" className="nav__link">About me</Link></li>
                      <li className="nav__item"><Link to="/#work" className="nav__link">My Work</Link></li>
                  </ul>
              </nav>
          </header>

        {/* Introduction */}

        <section className="intro" id="home">
          <h1 className="section__title section__title--intro">
           DICE ARMS Project
            <text style={{fontWeight:'bold', display:'block'}}>Grant Tracker</text>
          </h1>
          <text style={{display:'block'}} className='section__subtitle section__subtitle--intro'>School Project</text>
          <img src={require('../images/DICE V2-lg.jpg')} alt="1st portfolio pic" className='intro__img'/>
        </section>
        
        <div className="portfolio-item-individual">
            <p>
            During my second year of schooling at Saskatchewan Polytech, I was given the opportunity to work with DICE. They needed help creating a web based solution for tracking expenses and progress for their projects.
            </p>
            {/* <img src={require('../images/Rectangle 3-19@2x.png')} alt="2nd portfolio pic" /> */}
            <p>
            The projects were funded by grants, and there were milestones to be achieved by certain dates. In order to track the project, we had to parse through employee paystubs to see if they were working on the project and for how long. Then we were able to see how much time and money was being spent on the project. 
            Using an open library, we created a projection chart showing the expenses used in contrast with the end date, and what was to be the expected projection of the expenses.
            </p>
            <p>
             In addition to the expenses tracker, I also helped with adding functionality to track and show milestones that would be used for the project managers and added general web design/functionality. I learned a lot from this project, as the goal of this project was to simulate what it would be like working for a real company.
             We were working in 1 week sprints, using tools like Git to commmit our work hourly, and Cypress for the automated testing. We also had regular meetings with our clients. I was fortunate enough to get a job as a student researcher after I got my diploma from Computer Systems Technology at Saskpolytech and spent my next year working for them. 
            </p>
            <p>
              To hear more about my project working under DICE after schooling click <Link to="/PortfolioItem2" className='verigrainLink'>Here!</Link>
            </p>
        </div>


        
        {/* Footer */}
  
          <footer className='footer'>
            <a href="mailto:thovu@live.ca" className="footer__link">thovu@live.ca</a>
            <ul className="social-list">
              <li className="social-list__item">
                <a href="https://www.facebook.com" className="social-list__link">
                <FontAwesomeIcon icon={faFacebook} />
                </a>
                </li>
              <li className="social-list__item">
                <a href="https://www.instagram.com" className="social-list__link">
                <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
            </ul>
          </footer>
  
        </body>
      </>
    );
  }

export default PortfolioItem1;
