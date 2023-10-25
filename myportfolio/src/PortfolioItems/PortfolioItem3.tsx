// import '../styles/portfolio.css';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/snake.css';
import useInterval from "../useInterval";
const canvasX = 1000;
const canvasY = 1000;
const initialSnake = [[4,10], [4,10]];
const initialApple = [14,10];
const scale = 50;
const timeDelay = 100; 



function PortfolioItem3 () {

/////////////////////////////////////////////////////////////Menu Stuff///////////////////////////////////////////////////////////
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
/////////////////////////////////////////////////////////////Snake Stuff///////////////////////////////////////////////////////////
const canvasRef = useRef<HTMLCanvasElement | null>(null)
const [snake, setSnake] = useState(initialSnake);
const [apple, setApple] = useState(initialApple);
const [direction, setDirection] = useState([0, -1]);
const [delay, setDelay] = useState<number | null>(null);
const [gameOver, setGameOver] = useState(false);
const [score, setScore] = useState(0);

useEffect(() => {
    let fruit = document.getElementById("fruit") as HTMLCanvasElement
    if (canvasRef.current) {
      const canvas = canvasRef.current
      const ctx = canvas.getContext("2d")
      if (ctx) {
        ctx.setTransform(scale, 0, 0, scale, 0, 0)
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
        ctx.fillStyle = "#a3d001"
        snake.forEach(([ x, y ]) => ctx.fillRect(x, y, 1, 1))
        ctx.drawImage(fruit, apple[0], apple[1], 1, 1)
      }
    }
  },[ snake, apple, gameOver ])

useInterval(()=> runGame(), delay)

function play(){
  setSnake(initialSnake)
  setApple(initialApple)
  setDirection([ 1, 0 ])
  setDelay(timeDelay)
  setScore(0)
  setGameOver(false)
}

useEffect(()=>{
  if(gameOver){

  }

}, [gameOver])

function changeDirection(e: React.KeyboardEvent<HTMLDivElement>){
  switch (e.key) {
    case "ArrowLeft":
      setDirection([ -1, 0 ])
      break
    case "ArrowUp":
      setDirection([ 0, -1 ])
      break
    case "ArrowRight":
      setDirection([ 1, 0 ])
      break
    case "ArrowDown":
      setDirection([ 0, 1 ])
      break
  }
}

function handleSetScore(){
  if(score > Number(localStorage.getItem("snakeScore"))){
    localStorage.setItem("snakeScore", JSON.stringify(score));
  }
}

function checkCollision(head: number[]){
  for(let i = 0; i < head.length; i++){
    if (head[i] < 0 || head[i] * scale >= canvasX) return true
  }

  for(const s of snake){
    if(head[0] === s[0] && head[1] === s[1]) return true
  }



  return false;
}

function appleAte(newSnake:number[][]){
  let coord = apple.map(()=> Math.floor(Math.random() * canvasX / scale));
  if(newSnake[0][0] === apple[0] && newSnake[0][1] === apple[1]){
    let newApple = coord;
    setScore(score+1);
    setApple(newApple);
    return true;
  }
  return false;
}

function runGame(){
  const newSnake = [...snake];
  const newSnakeHead = [newSnake[0][0] + direction[0], newSnake[0][1] + direction[1]];
  newSnake.unshift(newSnakeHead);
  if(checkCollision(newSnakeHead)){
    setDelay(null);
    setGameOver(true);
    handleSetScore();
  }

  if(!appleAte(newSnake)){
    newSnake.pop();
  }

  setSnake(newSnake);
}
    return (
      <body className='mainbody'>
      <div onKeyDown={(e) => changeDirection(e)}>
			  <img id="fruit" src={require('../images/SnakeGame/applePixels.png')}  alt="fruit" width="30" />
			  <img src={require('../images/SnakeGame/oldMonitor.png')} alt="fruit" width="4000" className="monitor" />
			  <canvas className="playArea" ref={canvasRef} width={`${canvasX}px`} height={`${canvasY}px`} />
			  {gameOver && <div className="gameOver">Game Over</div>}
			  <button onClick={play} className="playButton">{gameOver ? 'Retry' : 'Play'}</button>
        <Link to="/" className='backButton'>Back</Link>
			  <div className="scoreBox">
				  <h2>Score: {score}</h2>
				  <h2>High Score: {localStorage.getItem("snakeScore")}</h2>
			  </div>
		  </div>
      </body>
      
    );
  }

export default PortfolioItem3;
