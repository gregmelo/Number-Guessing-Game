import { prompt } from "./prompt.js";

function generateRandomNumber(min, max) {
  return Math.floor(min + Math.random() * (max - min));
}

console.log("Welcome to the Number Guessing Game!\n");
console.log(
  "Rules:\n" +
    "1. The system will generate a random number between 0 and 100.\n" +
    "2. Your task is to guess this number.\n" +
    "3. Enter a number when prompted.\n" +
    "4. If your guess is too high or too low, you'll be notified, and you can guess again.\n" +
    "5. The game continues until you guess the correct number.\n\n" +
    "Let's get started! 🚀"
);

const TARGET_NUMBER = generateRandomNumber(0, 101);

function isValidNumber(number) {
  if (Number.isNaN(number) || number <= 0 || number >= 100) {
    console.log(
      "Error: number is not a number or is too big / too small (min: 0 or max: 100)"
    );
    return false;
  }
  return true;
}

function promptNumber() {
  let number;
  do {
    number = Number(prompt("Enter your number: "));
  } while (!isValidNumber(number));
  return number;
}

function playNumberGuessingGame(userNumber, targetNumber) {
  let attempts = 1;
  while (userNumber !== targetNumber) {
    if (userNumber < targetNumber) {
      console.log("📉 Le nombre entré est trop petit.");
    } else {
      console.log("📈 Le nombre entré est trop grand.");
    }
    userNumber = promptNumber();
    attempts++;
  }

  return `🟢 Bravo ! Le nombre aléatoire était bien ${targetNumber}. ✨ Vous avez réussi en ${attempts} tentatives.`;
}

const userNumber = promptNumber();
const result = playNumberGuessingGame(userNumber, TARGET_NUMBER);

console.log(result);
