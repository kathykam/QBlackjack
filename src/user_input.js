import React from 'react';
import { cardData } from './card_data';
import Card from './components/Card';

// Function to handle user input for the game
function getUserInput() {
  // Get the user's choice from an input field or button click
  const userChoice = document.getElementById("userChoice").value;

  // Validate the user's choice
  const userChoiceNum = parseInt(userChoice) - 1;
  if (userChoiceNum >= 0 && userChoiceNum < cardData.length) {
    // Generate a random number for the computer's choice
    const computerChoice = getRandomNumber(0, cardData.length - 1);

    // Render the user's choice and the computer's choice
    renderCards(userChoiceNum, computerChoice);
  } else {
    // Display an error message for invalid input
    console.log("Invalid input. Please choose a number between 1 and 52.");
  }
}

// Function to render the user's choice and the computer's choice
function renderCards(userChoice, computerChoice) {
  const userCard = cardData[userChoice];
  const computerCard = cardData[computerChoice];

  ReactDOM.render(
    <div>
      <h2>Your Choice:</h2>
      <Card suit={userCard.suit} rank={userCard.rank} color={userCard.color} />
      <h2>Computer's Choice:</h2>
      <Card suit={computerCard.suit} rank={computerCard.rank} color={computerCard.color} />
    </div>,
    document.getElementById('root')
  );
}

// Helper function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
