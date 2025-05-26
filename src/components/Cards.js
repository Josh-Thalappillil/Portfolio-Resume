import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <div className='about-header'>
          <h1>Projects</h1>
          <i className="fa-solid fa-hammer fa-beat"></i>
        </div>
      <div className='underline'></div> 
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
            <CardItem 
              src='images/11-11.PNG'
              text='Freelance - 11.11 Artistry Studio'
              details='Built and deployed website with Acuity embedded for booking appointments, and integrated Stripe for payment processing. Utilised HTML, CSS, and TypeScript (Angular) to create a responsive and user-friendly interface.'
              label='HTML & CSS, TS, Angular'
              path='https://11-11artistry.studio'
              />
              <CardItem 
              src='images/pokedex.png'
              text='Pokedex'
              details='Demonstrated proficiency in JavaScript, HTML & CSS. Proficiency in leveraging APIs, handling asynchronous operations, and dynamically rendering data to create an interactive web application showcasing Pokemon information.'
              label='HTML & CSS, JS'
              path='https://github.com/Josh-Thalappillil/pokedex'
              />
              
            </ul>
            <ul className='cards__items'>
              <CardItem 
              src='images/SnakeGame.jpg'
              text='Snake Game'
              details='Demonstrated understanding of DOM Manipulation, variable and data manipulation, structured code, event handling and game logic.'
              label='HTML & CSS, JS'
              path='https://josh-thalappillil.github.io/SnakeGame/'
              />
              <CardItem 
              src='images/Guess-Game.jpg'
              text='Guess Game'
              details='Object-Oriented Programming, variable declaration, console logging, constructor usage, looping, method invocation and conditional statements.'
              label='C#'
              path='https://github.com/Josh-Thalappillil/GuessGame'
              />
            </ul>
          </div>
        </div>
    </div> 
  )
}

export default Cards