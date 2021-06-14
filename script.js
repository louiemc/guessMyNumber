"use strict";

// Secret Number
const secretNumber = Math.trunc(Math.random() * 20 + 1);
document.querySelector(".number").textContent = secretNumber;

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
    document.querySelector(".message").textContent = "🎉 Correct answer!";
  }
});
