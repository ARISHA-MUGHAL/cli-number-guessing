#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const guessnumbers = await inquirer.prompt([
  {
    name: "UserGuessNumber",
    type: "number",
    message: "please guess a random number between 1 to 6 : ",
  },
]);
console.log(guessnumbers);
if (guessnumbers.UserGuessNumber === randomNumber) {
  console.log(
    `Congratulations !! you have guessed the correct number which is ${randomNumber}.`
  );
} else {
  console.log(
    `Sorry !! you have guessed the wrong number actual number is ${randomNumber} Better luck next time.`
  );
}
