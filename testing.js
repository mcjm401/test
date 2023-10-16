const prompt = require('prompt-sync')({sigint: true});
 
// Random number from 1 - 100
let numberInMind = Math.floor(Math.random() * 100) + 1;

// This variable is used to determine if the app should continue prompting the user for input
let foundCorrectNumber = false;

 
while (!foundCorrectNumber) {
// Step 1: Get user input (don't forget that the input is a string)
  
  let num = prompt('Guess the number in my mind: ');
  let inputNumber = +num;

// Step 2: Compare the guess to the secret answer and
// let the user know the feedback (too large, too small, correct).
 
  if (inputNumber > numberInMind) {
    console.log('The number is too big. Try again.');
  }
  else if (inputNumber < numberInMind) {
    console.log('The number is too small. Try again.');
  }
  else {
    console.log('Correct. You win.');
    // Ask if user wants to play again
    let ans = prompt('Would you like to play again? Y/N: ');
    if (ans.toUpperCase() === 'Y') {
      // Generate a new random number
        numberInMind = Math.floor(Math.random() * 100) + 1;
      }
      else {
      // Exit the loop
        foundCorrectNumber = true;
        console.log('Game finished.');
    }
  }
}