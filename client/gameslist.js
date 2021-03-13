import React from 'react'
const gameslist = ({ transition }) => {
    return (
        <ul id= "gameslist">
            <h1>Games List</h1>
            <li onClick = {()=>transition("cards")}>Cards</li>
            <li onClick = {()=>transition("roulette")}>Roulette</li>
            <li onClick = {()=>{console.log("dice"); transition("dice")}}>Dice</li>
        </ul>
    )
}




export default gameslist