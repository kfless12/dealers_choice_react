import React from 'react'

const cards = () => {
    var suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
    var values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    var deck = new Array();
    
    function stay()
    {
        if (currentPlayer != players.length-1) {
            document.getElementById('player_' + currentPlayer).classList.remove('active');
            currentPlayer += 1;
            document.getElementById('player_' + currentPlayer).classList.add('active');
        }
    
        else {
            end();
        }
    }
    
    function end()
    {
        var winner = -1;
        var score = 0;
    
        for(var i = 0; i < players.length; i++)
        {
            if (players[i].Points > score && players[i].Points < 22)
            {
                winner = i;
            }
    
            score = players[i].Points;
        }
    
        document.getElementById('status').innerHTML = 'Winner: Player ' + players[winner].ID;
    }
    
    var currentPlayer = 0;
    function hitMe()
    {
        var card = deck.pop();
        players[currentPlayer].Hand.push(card);
        renderCard(card, currentPlayer);
        updatePoints();
        check();
    }
    
    function check()
    {
        if (players[currentPlayer].Points > 21)
        {
            document.getElementById('status').innerHTML = 'Player: ' + players[currentPlayer].ID + ' LOST';
        }
    }
    
    function renderCard(card, player)
    {
        var hand = document.getElementById('hand_' + player);
        hand.appendChild(getCardUI(card));
    }
    
    function getCardUI(card)
    {
        var el = document.createElement('div');
        el.className = 'card';
        el.innerHTML = card.Suit + ' ' + card.Value;
        return el;
    }
    
    function dealHands()
        {
            // alternate handing cards to each player
            // 2 cards each
            for(var i = 0; i < 2; i++)
            {
                for (var x = 0; x < players.length; x++)
                {
                    var card = deck.pop();
                    players[x].Hand.push(card);
                    renderCard(card, x);
                    updatePoints();
                }
            }
    
            updateDeck();
        }
    
    function startblackjack()
    {
        document.getElementById('btnStart').value = 'Restart';
        document.getElementById("status").style.display="none";
        // deal 2 cards to every player object
        currentPlayer = 0;
        createDeck();
        shuffle();
        createPlayers(2);
        createPlayersUI();
        dealHands();
        document.getElementById('player_' + currentPlayer).classList.add('active');
    }
    
    function createPlayersUI()
    {
        document.getElementById('players').innerHTML = '';
        for(var i = 0; i < players.length; i++)
        {
            var div_player = document.createElement('div');
            var div_playerid = document.createElement('div');
            var div_hand = document.createElement('div');
            var div_points = document.createElement('div');
    
            div_points.className = 'points';
            div_points.id = 'points_' + i;
            div_player.id = 'player_' + i;
            div_player.className = 'player';
            div_hand.id = 'hand_' + i;
    
            div_playerid.innerHTML = players[i].ID;
            div_player.appendChild(div_playerid);
            div_player.appendChild(div_hand);
            div_player.appendChild(div_points);
            document.getElementById('players').appendChild(div_player);
        }
    }
    
    var players = new Array();
    function createPlayers(num)
    {
        players = new Array();
        for(var i = 1; i <= num; i++)
        {
            var hand = new Array();
            var player = { Name: 'Player ' + i, ID: i, Points: 0, Hand: hand };
            players.push(player);
        }
    }
    
    function shuffle()
    {
        // for 1000 turns
        // switch the values of two random cards
        for (var i = 0; i < 1000; i++)
        {
            var location1 = Math.floor((Math.random() * deck.length));
            var location2 = Math.floor((Math.random() * deck.length));
            var tmp = deck[location1];
    
            deck[location1] = deck[location2];
            deck[location2] = tmp;
        }
    }
    
    function createDeck()
    {
        deck = new Array();
        for (var i = 0 ; i < values.length; i++)
        {
            for(var x = 0; x < suits.length; x++)
            {
                var weight = parseInt(values[i]);
                if (values[i] == "J" || values[i] == "Q" || values[i] == "K")
                    weight = 10;
                if (values[i] == "A")
                    weight = 11;
                var card = { Value: values[i], Suit: suits[x], Weight: weight };
                deck.push(card);
            }
        }
    }
    return (
        <div className="game">
            <h3>Blackjack *GAME NOT YET COMPLETE SOURCE CODE FOR BASE OBTAINED FROM: <a href="https://www.thatsoftwaredude.com/content/6417/how-to-code-blackjack-using-javascript>https://www.thatsoftwaredude.com/content/6417/how-to-code-blackjack-using-javascript"></a></h3>
    
    <div className="game-body">
           <div className="game-options">
            <input type="button" id="btnStart" className="btn" value="start" onClick={startblackjack}/>
            <input type="button" className="btn" value="hit me" onClick={hitMe}/>
            <input type="button" className="btn" value="stay" onClick={stay}/>
            </div>
    
                <div className="status" id="status"></div>
    
            <div id="deck" className="deck">
                <div id="deckcount">52</div>
            </div>
    
            <div id="players" className="players">
            </div>
    
            <div className="clear"></div>
    </div>
</div>
    )
}




export default cards


