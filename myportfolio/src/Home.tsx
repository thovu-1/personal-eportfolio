import './styles/portfolio.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons" 
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {

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

  const title = "Tho's Portfilio Website";
  return (
    <div className="App"> 
      <div className="head">
       
        <h1>{title}</h1>
       
      </div>
      
      
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
                    <li className="nav__item"><a href="#services" className="nav__link">My Services</a></li>
                    <li className="nav__item"><a href="#about" className="nav__link">About me</a></li>
                    <li className="nav__item"><a href="#work" className="nav__link">My Work</a></li>
                </ul>
            </nav>
        </header>

        {/* Introduction */}

        <section className="intro" id="home">
          <h1 className="section__title section__title--intro">
            Hi, I am 
            <text style={{fontWeight:'bold', display:'block'}}>Tho Vu</text>
          </h1>
          <text style={{display:'block'}} className='section__subtitle section__subtitle--intro'>Full Stack Developer</text>
          <img src={require('./images/devjane.png')} alt="pic of you" className='intro__img'/>
        </section>

        {/* My Services */}
        <section className="my-services" id='services'>
          <h2 className='section__title section__title--services'>What I do</h2>
          
          <div className="services">
            <div className="service">
              <h3>App Development</h3>
              <p>I have been working in the field for 1 year as a Full Stack developer under an app called Verigrain. 
              During my time there we used an agile development approach. I am familiar with sprints, stand-ups and client meetings. The Verigrain app is a React Native app used to help farmers keep track of their inventory and acts as a middle-man in-between Farmers and Buyers.
              I joined the app development team after 1.5 years of the project. I started making changes and fixing existing issues and eventually started adding new sections and pages to the app. 
              You can read more about it <Link to="/PortfolioItem2" className='verigrainLink'>Here!</Link>
              
              </p>
            </div> {/* / service*/}

            <div className="service">
              <h3>Front End work</h3>
              <p>
                React JS, React Native, and VueJS are all tools I have used for front end work. I used React and Vue during my time at school, however I wanted to brush up on my previouse knowledge which is why I decided to make this website using reactjs.
                Most of my time was spent using React Native which I did not learn in school. I have a little more than a year experience using it, this includes package management, automated testing, and general styling and researching best practices. 
              </p>
            </div> {/* / service*/}

            <div className="service">
              <h3>Back end Work</h3>
              <p>
                During my time at DICE, working with Verigrain, the project was set up using a Php in combination with adminer SQL. This includes creating tables, creating SQL scripts, setting up automatic emails, and storing and sending data. I am familiar with using Docker to set up a local database for development purposes, and migrating local work to live servers in a safe manner through tested SQL scripts. 
              </p>
            </div> {/* / service*/}
          
          </div>
          <a href="#work" className='btn'>My Work</a>
        </section>
        {/* About me */}

        <section className="about-me" id='about'>
          <h2 className="section__title section__title--about">Who I am</h2>
          <p className="section__subtitle section__subtitle--about">Junior Full Stack Developer based out of Saskatoon</p>

          <div className="about-me__body">
            <p>
            Hi, my name is Tho Vu, I am a Vietnamese / Canadian developer with one year of full stack app development experience. I am always eager to learn new things, and get along well with others. I am always up for a challenge. In my free time I enjoy playing video games on PC and going to the gym. Other than that I like enjoying the outdoors through fishing and motorcycles and taking my dog on walks/hikes.
            </p>
            <p>
            I attended Saskatchewan Polytechnic for my Computer Systems Techonology diploma in 2022 after two years of schooling. My diploma covered coding languages such as 
              <ul>
                <li>Java</li>
                <li>C</li>
                <li>C#</li>
                <li>VueJS</li>
                <li>React JS</li>
                <li>Rust</li>
                <li>Bash and Powershell scripting</li>
                <li>SQL</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </p>
            <p>
              After I graduated I went straight to work for DICE. I stayed on until I was eventually laid off because of funding issues. I worked at DICE from June 2022 until September 2023. During my time there I worked on a project with a grain tracking company called Verigrain where I learned React Native, and PHP. 
              During my time there I was able to sharpen my soft and hard skills. Read more about it <Link to="/PortfolioItem2" className='verigrainLink'>Here!</Link>
            </p>
          </div>
          <img src={require('./images/devjane22x.png')} alt='Me' className='about-me__image'/>
        </section>
        
        {/* My Work */}

        <section className="my-work" id="work">
          <h2 className="section__title">My Work</h2>
          <text className="section__subtitle">A selection of my range of work</text>

          <div className="portfolio">

            {/* Portfolio item 01 */}
            <Link to="/PortfolioItem1" className="portfolio__item">
              <img src={require('./images/DICE V2-lg.jpg')} alt="my-work-portfolio-pic#1" className="portfolio__img" />
            </Link>

            {/* Portfolio item 02 */}
            <Link to="/PortfolioItem2" className="portfolio__item">
              <img  src={require('./images/verigrain3.jpg')} alt="my-work-portfolio-pic#2" className="portfolio__img" />
            </Link>

            {/* Portfolio item 03 */}
            <Link to="/PortfolioItem3" className="portfolio__item">
              <img src={require('./images/SnakeGame/game.png')} alt="my-work-portfolio-pic#3" className="portfolio__img" />
            </Link>

          </div>
        </section>

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
     
    </div>
  );
}

export default Home;
