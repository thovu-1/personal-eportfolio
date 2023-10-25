import '../styles/portfolio.css';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function PortfolioItem2 () {

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
           Verigrain
            <text style={{fontWeight:'bold', display:'block'}}>Grain Tracking Project</text>
          </h1>
          <text style={{display:'block'}} className='section__subtitle section__subtitle--intro'>Working Under DICE</text>
          <img src={require('../images/verigrain3.jpg')} alt="1st portfolio pic" className='intro__img'/>
        </section>
        
        <div className="portfolio-item-individual">
            <p>
            After my schooling, DICE was kind enough to give me the position of Student Researcher, where I would continue working for them for the next year. 
            </p>
            {/* <img src={require('../images/Rectangle 3-19@2x.png')} alt="2nd portfolio pic" /> */}
            <p>
            I was put on a project with Verigrain, who was in the 2nd year of developing their app for grain tracking. The project was set up in React Native using Expo, and a PHP / SQL backend. It was time to put what I learned in school into use.
            </p>
            <p>
             I mainly focused on front end work. One example of my work is creating a dynamic display for grain inventory, where a user could navigate through to see how much grain they had overall, and a drill down for each grain, showing location and fullness of the bins they were in.
             This was done by creating SVG images to display bins based on what the user had saved. When I was not adding something new into the app for the client I often times found myself researching new plugins and finding alternatives to deprecated plugins to keep the app up to date and well maintained.
            </p>
            <p>
            For my backend work, there were times where I would have to add new features in the app and had to make the necessary changes to the backend such as creating new tables for new features and setting up automated emails. I also helped refactor some old tables to help increase productivity. 
             This was challenging because I had to make sure that the changes wouldn't affect any existing data from users. It was a great learning experience.
            </p>

            <p>
                For this project I worked in 1 week sprints, with weekly meetings with the client and daily stand-up meetings with the team. This helped enhance my soft skills such as communication, teamwork, problem-solving, critial thinking, and time management. 
                My hard skills improved from this project included automated testing, debugging, algorithm, and agile skills.
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

export default PortfolioItem2;
