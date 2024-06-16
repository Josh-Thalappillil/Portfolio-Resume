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
              src='images/SnakeGame.jpg'
              text='Snake Game'
              details='Demonstrated understanding of DOM Manipulation, variable and data manipulation, structured code, event handling and game logic.'
              label='HTML & CSS, JS'
              path='https://josh-thalappillil.github.io/SnakeGame/'
              />
              <CardItem 
              src='images/pokedex.png'
              text='Pokedex'
              details='Demonstrated proficiency in JavaScript, HTML & CSS. Proficiency in leveraging APIs, handling asynchronous operations, and dynamically rendering data to create an interactive web application showcasing Pokemon information.'
              label='HTML & CSS, JS'
              path='https://pokedex-one-kappa-18.vercel.app/'
              />
              
            </ul>
            <ul className='cards__items'>
              <CardItem 
              src='images/LottoCheck.jpg'
              text='Lotto Check'
              details='Guess 3 lottery numbers and return how many numbers were correct. Utilisation of Object Oriented Programming.'
              label='Java'
              path='https://github.com/Josh-Thalappillil/LottoCheck'
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