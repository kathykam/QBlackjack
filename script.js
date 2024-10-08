
// Make sure this path is correct and the file exists
let playerDisplayScore = 0;
let computerDisplayScore = 0;
let playerHand = [];

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

function updateCardDisplay(elementId, card) {
    console.log("Update Card Display");
    const cardElement = document.getElementById(elementId);
    cardElement.textContent = `${card.rank}${card.suit}`;
    if (card.suit === '♥' || card.suit === '♦') {
        cardElement.style.color = 'red';
    } else {
        cardElement.style.color = 'black';
    }
}

function playRound() {
    console.log("Start Play Round");
    playerHand = [];
    computerHand = [];
    
    // Disable buttons during dealing
    document.getElementById('draw-card').disabled = true;
    document.getElementById('draw-card-btn').disabled = true;

    dealCards();
}

function dealCards(step = 0) {
    if (step < 4) {
        setTimeout(() => {
            let card = drawCard();
            if (step === 0) {
                playerHand[0] = card;
                updateDisplay(playerHand, computerHand, null, null, null, 'player1');
            } else if (step === 1) {
                computerHand[0] = card;
                updateDisplay(playerHand, computerHand, null, null, null, 'computer1');
            } else if (step === 2) {
                playerHand[1] = card;
                updateDisplay(playerHand, computerHand, null, null, null, 'player2');
            } else if (step === 3) {
                computerHand[1] = card;
                updateDisplay(playerHand, computerHand, null, null, null, 'computer2');
            }
            dealCards(step + 1);
        }, 500);
    } else {
        // All cards dealt, determine result
        const playerScores = calculateBlackjackScores(playerHand);
        const computerScores = calculateBlackjackScores(computerHand);
        
        let result;
        if (playerScores.hard > computerScores.hard) {
            result = 'player';
            playerDisplayScore++;
        } else if (computerScores.hard > playerScores.hard) {
            result = 'computer';
            computerDisplayScore++;
        } else {
            result = 'tie';
        }
        
        updateDisplay(playerHand, computerHand, playerScores, computerScores, result, 'final');
        
        // Enable the "Draw Card" button if it's the player's turn
        document.getElementById('draw-card-btn').disabled = false;
        document.getElementById('draw-card').disabled = false;
        
        shuffleDeck();
    }
}



function drawExtraCard() {
    document.getElementById('draw-card-btn').disabled = true;
    
    setTimeout(() => {
        const newCard = drawCard();
        playerHand.push(newCard);
        const playerScores = calculateBlackjackScores(playerHand);
        
        updateDisplay(playerHand, computerHand, playerScores);
        
        // Check if the player has busted
        if (playerScores.hard > 21) {
            updateDisplay(playerHand, computerHand, playerScores, calculateBlackjackScores(computerHand), 'computer');
        } else {
            document.getElementById('draw-card-btn').disabled = false;
        }
    }, 500);
}

function updateDisplay(playerHand, computerHand, playerScores = null, computerScores = null, result = null, step = null) {
    // Update player cards
    for (let i = 0; i < 2; i++) {
        const cardElementId = `player-card-${i+1}`;
        if (i < playerHand.length) {
            updateCardDisplay(cardElementId, playerHand[i]);
        } else {
            document.getElementById(cardElementId).textContent = '';
            document.getElementById(cardElementId).style.display = 'none';
        }
    }

    // Update computer cards
    for (let i = 0; i < 2; i++) {
        const cardElementId = `computer-card-${i+1}`;
        const cardElement = document.getElementById(cardElementId);
        if (i < computerHand.length) {
            if (i === 0 || step === 'final') {
                // Show the first card or all cards if it's the final step
                updateCardDisplay(cardElementId, computerHand[i]);
            } else {
                // Show face-down card
                cardElement.textContent = '🂠';
                cardElement.style.color = 'black';
                cardElement.style.display = 'inline-block';
            }
        } else {
            cardElement.textContent = '';
            cardElement.style.display = 'none';
        }
    }

    // Update scores and result only if provided
    if (playerScores && computerScores) {
        document.getElementById('player-sum').textContent = formatScore(playerScores);
        document.getElementById('computer-sum').textContent = formatScore(computerScores);
    }

    if (result) {
        const resultElement = document.getElementById('result');
        resultElement.classList.remove('win', 'lose', 'tie');

        let resultText = '';
        if (result === 'player') {
            resultText = 'You win!';
            resultElement.classList.add('win');
        } else if (result === 'computer') {
            resultText = 'Computer wins!';
            resultElement.classList.add('lose');
        } else {
            resultText = "It's a tie!";
            resultElement.classList.add('tie');
        }
        resultElement.textContent = resultText;

        document.getElementById('player-score').textContent = playerDisplayScore;
        document.getElementById('computer-score').textContent = computerDisplayScore;
    }
}



function calculateBlackjackScores(cards) {
    let hardScore = 0;
    let softScore = 0;
    let aceCount = 0;

    for (const card of cards) {
        if (card.rank === 'A') {
            aceCount++;
            softScore += 11;
            hardScore += 1;
        } else if (['K', 'Q', 'J'].includes(card.rank)) {
            softScore += 10;
            hardScore += 10;
        } else {
            const value = parseInt(card.rank);
            softScore += value;
            hardScore += value;
        }
    }

    // Adjust soft score for Aces
    while (softScore > 21 && aceCount > 0) {
        softScore -= 10;
        aceCount--;
    }

    return { soft: softScore, hard: hardScore };
}

function formatScore(scores) {
    if (scores.soft !== scores.hard) {
        return `Sum: ${scores.hard} or Hard: ${scores.soft}`;
    } else {
        return `Sum: ${scores.hard}`;
    }
}
