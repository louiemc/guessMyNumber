"use strict";

// Secret Number
let secretNumber = Math.trunc(Math.random() * 20 + 1);
// Starting Score - a let beacuse we will be decreasing this value! a const is immutable
let score = 20;

/* 
Event Listener - Check Button Click
Select the check button and add an even listener on click
The second argument of the event listener is the even handler function
*/
document.querySelector(".check").addEventListener("click", function () {
  // Capture the value that is inputted in the input box
  // const guess = document.querySelector(".guess").value;
  const guess = Number(document.querySelector(".guess").value); // make the inputted value a number, so it can be compared to the secret number
  // Log the captured value into the console and see what type it is
  console.log(guess, typeof guess);

  // 1st scenario: What happens if there is NO guess - if condition is true, execute the code block
  if (!guess) {
    // no guess means a false value. if the guess is false then the nagation operator will be inverted from false to true
    document.querySelector(".message").textContent = "⛔️ No number!";
  }
  // when the guess is correct
  else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct number!";

    // selecting the body element so we can set the background color to green
    document.querySelector("body").style.backgroundColor = "#60b347";
    // make the secret number visible
    document.querySelector(".number").textContent = secretNumber;
    // make secret nuumber wider
    document.querySelector(".number").style.width = "30rem";
  }
  // guess is greater than the secret number
  else if (guess > secretNumber) {
    // let's add our losing scenario here
    if (score > 1) {
      // has to be 1 not 0 because even when the score hits 0 the message you lose does not appear
      // so, if the score is above 0 then the code in this code block will be executed
      document.querySelector(".message").textContent = "📈 Too high!";
      // decrease the score
      score--;
      // display the updated score
      document.querySelector(".score").textContent = score;
    } else {
      // if the score is 0 then the player will lose
      document.querySelector(".message").textContent = "💥 You lose the game!";
      // set the score to 0 when you lose
      document.querySelector(".score").textContent = 0;
    }
  }
  // guess is less than the secret number
  else if (guess < secretNumber) {
    // let's add our losing scenario here
    if (score > 1) {
      // has to be 1 not 0 because even when the score hits 0 the message you lose does not appear
      // so, if the score is above 0 then the code in this code block will be executed
      document.querySelector(".message").textContent = "📈 Too low!";
      // decrease the score
      score--;
      // display the updated score
      document.querySelector(".score").textContent = score;
    } else {
      // if the score is 0 then the player will lose
      document.querySelector(".message").textContent = "💥 You lose the game!";
      // set the score to 0 when you lose
      document.querySelector(".score").textContent = 0;
    }
  }
});

// Event listener for Again! button
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  // reset score to 20
  document.querySelector(".score").textContent = score;

  // reset the message to say 'start guessing'
  document.querySelector(".message").textContent = "Start guessing...";

  // make the secret number secret again
  document.querySelector(".number").textContent = "?";

  // reset the input field to be blank
  document.querySelector(".guess").value = "";

  // reset the background color to the og color
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
