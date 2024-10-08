
// Make sure this path is correct and the file exists
let playerScore = 0;
let computerScore = 0;
let playerDisplayScore = 0;
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

function playRound() {
    console.log("Start Play Round");
    const playerCard1 = drawCard();
    const playerCard2 = drawCard();
    const computerCard1 = drawCard();
    const computerCard2 = drawCard();
    
    const playerScore = calculateScore([playerCard1, playerCard2]);
    const computerScore = calculateScore([computerCard1, computerCard2]);
    
    let result;
    if (playerScore > computerScore) {
        result = 'player';
        playerDisplayScore++;
    } else if (computerScore > playerScore) {
        result = 'computer';
        computerDisplayScore++;
    } else {
        result = 'tie';
    }
    
    updateDisplay(playerCard1, playerCard2, computerCard1, computerCard2, playerScore, computerScore, result);
    shuffleDeck();
        
}

function calculateScore(cards) {
    return cards.reduce((score, card) => {
        if (card.rank === 'A') return score + 11;
        if (['K', 'Q', 'J'].includes(card.rank)) return score + 10;
        return score + parseInt(card.rank);
    }, 0);
}

function updateDisplay(playerCard1, playerCard2, computerCard1, computerCard2, playerScore, computerScore, result) {
    updateCardDisplay('player-card-1', playerCard1);
    updateCardDisplay('player-card-2', playerCard2);
    updateCardDisplay('computer-card-1', computerCard1);
    updateCardDisplay('computer-card-2', computerCard2);
 
    document.getElementById('player-sum').textContent = `Sum: ${playerScore}`;
    document.getElementById('computer-sum').textContent = `Sum: ${computerScore}`;
    
    let resultText = '';
    if (result === 'player') {
        resultText = 'You win!';
    } else if (result === 'computer') {
        resultText = 'Computer wins!';
    } else {
        resultText = "It's a tie!";
    }
    document.getElementById('result').textContent = resultText;
    document.getElementById('player-score').textContent = playerDisplayScore;
    document.getElementById('computer-score').textContent = computerDisplayScore;
}

function updateCardDisplay(elementId, card) {
    const cardElement = document.getElementById(elementId);
    cardElement.textContent = `${card.rank}${card.suit}`;
    if (card.suit === '♥' || card.suit === '♦') {
        cardElement.style.color = 'red';
    } else {
        cardElement.style.color = 'black';
    }
}
