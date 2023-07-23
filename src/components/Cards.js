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
              src='images/Guess-Game.jpg'
              text='Guess Game'
              details='Object-Oriented Programming, variable declaration, console logging, constructor usage, looping, method invocation and conditional statements.'
              label='C#'
              path='https://github.com/Josh-Thalappillil/GuessGame'
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
              src='images/odin-rps.jpg'
              text='Odin Rock Paper Scissors'
              details='Demonstrated proficiency in JavaScript, DOM manipulation, event handling, and logical problem-solving while employing clean coding practices, including code organisation, commenting, and modularisation for improved maintainability.'
              label='HTML & CSS, JS'
              path='https://josh-thalappillil.github.io/odin-rock-paper-scissors/'
              />
            </ul>
          </div>
        </div>
    </div> 
  )
}

export default Cards