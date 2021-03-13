import React from 'react'
const dice = () => {

    function rollDice() {
        const dice = [...document.querySelectorAll(".die-list")];
        dice.forEach(die => {
          toggleClasses(die);
          die.dataset.roll = getRandomNumber(1, 6);
        });
      }
      
      function toggleClasses(die) {
        die.classList.toggle("odd-roll");
        die.classList.toggle("even-roll");
      }
      
      function getRandomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      

    return (

        <div>
        <h2> Dice Source code obtained from: <a href = "https://codesandbox.io/s/xjk3xqnprw?file=/app.js:0-516">https://codesandbox.io/s/xjk3xqnprw?file=/app.js:0-516</a></h2>
  <link rel="stylesheet" href="/dice.css" />
    <div className="dice">
      <ol className="die-list even-roll" data-roll="1" id="die-1">
        <li className="die-item" data-side="1">
          <span className="dot"></span>
        </li>
        <li className="die-item" data-side="2">
          <span className="dot"></span>
          <span className="dot"></span>
        </li>
        <li className="die-item" data-side="3">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </li>
        <li className="die-item" data-side="4">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </li>
        <li className="die-item" data-side="5">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </li>
        <li className="die-item" data-side="6">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </li>
      </ol>
      <ol className="die-list odd-roll" data-roll="1" id="die-2">
        <li className="die-item" data-side="1">
          <span className="dot"></span>
        </li>
        <li className="die-item" data-side="2">
          <span className="dot"></span>
          <span className="dot"></span>
        </li>
        <li className="die-item" data-side="3">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </li>
        <li className="die-item" data-side="4">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </li>
        <li className="die-item" data-side="5">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </li>
        <li className="die-item" data-side="6">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </li>
      </ol>
    </div>
    <p>
        <button type="button" id="roll-button" onClick = {rollDice}>Roll Dice</button>
    </p>
    </div>
    )
}




export default dice