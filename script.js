"use strict";

// Event Listener - Check Button Click
// Select the check button and add an even listener on click
// The second argument of the event listener is the even handler function
document.querySelector(".check").addEventListener("click", function () {
  // Capture the value that is inputted in the input box
  const guess = document.querySelector(".guess").value;
  // Log the captured value into the console and see what type it is
  console.log(guess, typeof guess);
});
