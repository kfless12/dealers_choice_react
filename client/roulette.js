import React from 'react'
const roulette = () => {

function spin(){
    let players_geuss = document.getElementById('geuss').value
    let winner = Math.floor(Math.random()*37)
    let wheel = document.getElementById("roulette")
    wheel.style.animation = `spin 0.5s linear infinite`
    setTimeout(()=>{wheel.style.animation = `spin 0.5s ease-out 1`}, 3000)
    setTimeout(()=>{if(parseInt(players_geuss) === winner){
        document.getElementById('result').innerHTML = `YOU WON!!!  Winning number: ${winner}`
        
    } else{
        document.getElementById('result').innerHTML = `You lose, Try Again!  Winning number: ${winner}`
        
    }wheel.style.animation = `spin 2s linear infinite`}, 3500)
    
}

    return (
        <div id="wheel">
            <img id="roulette" src="/roulette_wheel.jpg"/>
            <div id = "contents">
                <label for="playersgeuss">Geuss a number!</label>
                <input type="number" min = "0" max = "36" id = "geuss" name="playersgeuss"></input>
                <button id="spin" onClick = {spin}>SPIN</button>
                 <h1 id="result"></h1>
                <link rel = "stylesheet" href = "/wheel.css"/>
            </div>
        </div>
    )
}




export default roulette