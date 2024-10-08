// Test cases for the game logic functions

// Test the play() function
function testPlay() {
  // Generate example inputs
  const leftOption = Math.floor(Math.random() * 3);
  const rightOption = Math.floor(Math.random() * 3);

  // Call the play() function with the example inputs
  play(leftOption, rightOption);

  // Assert that the correct option icons are displayed on the left and right sides
  // ...
}

// Test the showResult() function
function testShowResult() {
  // Generate example inputs
  const leftOption = Math.floor(Math.random() * 3);
  const rightOption = Math.floor(Math.random() * 3);

  // Call the showResult() function with the example inputs
  showResult(leftOption, rightOption);

  // Assert that the correct winner or draw styling is applied
  // ...
}

// Add more test cases for other functions as needed
