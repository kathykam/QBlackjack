
// Make sure this path is correct and the file exists
let playerScore = 0;
let computerScore = 0;
let playDisplayScore = 0;
let computerDisplayScore = 0;

const cardData = [
    { suit: '♠', rank: 'A', color: 'black' },
    { suit: '♠', rank: '2', color: 'black' },
    { suit: '♠', rank: '3', color: 'black' },
    { suit: '♠', rank: '4', color: 'black' },
    { suit: '♠', rank: '5', color: 'black' },
    { suit: '♠', rank: '6', color: 'black' },
    { suit: '♠', rank: '7', color: 'black' },
    { suit: '♠', rank: '8', color: 'black' },
    { suit: '♠', rank: '9', color: 'black' },
    { suit: '♠', rank: '10', color: 'black' },
    { suit: '♠', rank: 'J', color: 'black' },
    { suit: '♠', rank: 'Q', color: 'black' },
    { suit: '♠', rank: 'K', color: 'black' },
    { suit: '♥', rank: 'A', color: 'red' },
    { suit: '♥', rank: '2', color: 'red' },
    { suit: '♥', rank: '3', color: 'red' },
    { suit: '♥', rank: '4', color: 'red' },
    { suit: '♥', rank: '5', color: 'red' },
    { suit: '♥', rank: '6', color: 'red' },
    { suit: '♥', rank: '7', color: 'red' },
    { suit: '♥', rank: '8', color: 'red' },
    { suit: '♥', rank: '9', color: 'red' },
    { suit: '♥', rank: '10', color: 'red' },
    { suit: '♥', rank: 'J', color: 'red' },
    { suit: '♥', rank: 'Q', color: 'red' },
    { suit: '♥', rank: 'K', color: 'red' },
    { suit: '♦', rank: 'A', color: 'red' },
    { suit: '♦', rank: '2', color: 'red' },
    { suit: '♦', rank: '3', color: 'red' },
    { suit: '♦', rank: '4', color: 'red' },
    { suit: '♦', rank: '5', color: 'red' },
    { suit: '♦', rank: '6', color: 'red' },
    { suit: '♦', rank: '7', color: 'red' },
    { suit: '♦', rank: '8', color: 'red' },
    { suit: '♦', rank: '9', color: 'red' },
    { suit: '♦', rank: '10', color: 'red' },
    { suit: '♦', rank: 'J', color: 'red' },
    { suit: '♦', rank: 'Q', color: 'red' },
    { suit: '♦', rank: 'K', color: 'red' },
    { suit: '♣', rank: 'A', color: 'black' },
    { suit: '♣', rank: '2', color: 'black' },
    { suit: '♣', rank: '3', color: 'black' },
    { suit: '♣', rank: '4', color: 'black' },
    { suit: '♣', rank: '5', color: 'black' },
    { suit: '♣', rank: '6', color: 'black' },
    { suit: '♣', rank: '7', color: 'black' },
    { suit: '♣', rank: '8', color: 'black' },
    { suit: '♣', rank: '9', color: 'black' },
    { suit: '♣', rank: '10', color: 'black' },
    { suit: '♣', rank: 'J', color: 'black' },
    { suit: '♣', rank: 'Q', color: 'black' },
    { suit: '♣', rank: 'K', color: 'black' },
  ];
  
let deck = [];

/** var elems = [];
var state = false;

function loadGame() {
    elems = [];

    for (let i = 1; i < 7; i++) {
        const element = document.getElementById("op-" + String(i));
        elems.push(element);
        element.style.display = "none";
    }
}

function play() {
    var left = Math.floor(Math.random() * 3);
    var right = Math.floor(Math.random() * 3) + 3;

    for (let i = 1; i < 7; i++) {
        const element = document.getElementById("op-" + String(i));
        element.style.display = "none";
        element.style.backgroundColor = "";
    }

    elems[left].style.display = "inline";
    elems[right].style.display = "inline";
    
    startRepeat()
    state = true;
}

function startRepeat(left, right) {
    if (!state) {
        var rep = setInterval(() => {
            play(left, right);
        }, 100);

        endGame(rep);
    }
}

function endGame(rep) {
    setTimeout(() => {
        state = false;
        clearInterval(rep);
        showResult();
    }, 4000);
}

function showResult() {
    var result = [];
    var indexes = [];
    for (let i = 0; i < elems.length; i++) {
        const element = elems[i];
        
        if (element.style.display == "inline") {
            result.push(element);
            indexes.push(i % 3);
        }

        console.log(result);
    }

    console.log(indexes);
    
    if(indexes[0] == indexes[1]){
        result[0].style.backgroundColor = "#ffff00";
        result[1].style.backgroundColor = "#ffff00";
    }
    else if (indexes[0] == 0 && indexes[1] == 1) {
        result[1].style.backgroundColor = "#00ff00";
    }
    else if (indexes[0] < indexes[1]) {
        result[0].style.backgroundColor = "#00ff00";
    }
    else if (indexes[0] > indexes[1]) {
        result[1].style.backgroundColor = "#00ff00";
    }
    else {
        result[0].style.backgroundColor = "#ffff00";
        result[1].style.backgroundColor = "#ffff00";
    }
}
**/


/* Draw 1 card */
function initializeDeck() {
    deck = [...cardData]; // Create a copy of the cardData array
    shuffleDeck();
}

function shuffleDeck() {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]]; // Swap elements
    }
}

function drawCard() {
    if (deck.length === 0) {
        // If the deck is empty, reshuffle
        initializeDeck();
    }
    return deck.pop();
}


function compareCards(playerCard, computerCard) {
    const rankOrder = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suitOrder = ['♣', '♦', '♥', '♠']; // Clubs, Diamonds, Hearts, Spades

    const playerRankIndex = rankOrder.indexOf(playerCard.rank);
    const computerRankIndex = rankOrder.indexOf(computerCard.rank);

    const playerSuitIndex = suitOrder.indexOf(playerCard.suit);
    const computerSuitIndex = suitOrder.indexOf(computerCard.suit);

    if (playerRankIndex > computerRankIndex) {
        return 'player';
    } else if (playerRankIndex < computerRankIndex) {
        return 'computer';
    } else {
        // If ranks are equal, compare suits
        if (playerSuitIndex > computerSuitIndex) {
            return 'player';
        } else if (playerSuitIndex < computerSuitIndex) {
            return 'computer';
        } else {
            return 'tie';
        }
    }
}


function updateDisplay(playerCard, computerCard, result) {

    document.getElementById('player-card').textContent = `${playerCard.rank}${playerCard.suit}`;
    document.getElementById('computer-card').textContent = `${computerCard.rank}${computerCard.suit}`;
    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('computer-score').textContent = computerScore;
    
    let resultText = '';
    if (result === 'player') {
        resultText = 'You win!';
        playerScore++;
    } else if (result === 'computer') {
        resultText = 'Computer wins!';
        computerScore++;
    } else {
        resultText = "It's a tie!";
    }
    document.getElementById('result').textContent = resultText;
    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('computer-score').textContent = computerScore;
}


function playRound() {
    console.log("Start Play Round")
    const playerCard = drawCard();
    const computerCard = drawCard();
    const result = compareCards(playerCard, computerCard);
    updateDisplay(playerCard, computerCard, result);

    shuffleDeck();
} 

