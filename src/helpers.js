// Helper function to generate a random number within a range
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Helper function to get the card text from the card number
function getCardText(cardNum) {
  const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
  const ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
  const suit = suits[Math.floor(cardNum / 13)];
  const rank = ranks[cardNum % 13];
  return rank + " of " + suit;
}
