import { prompt } from "./prompt.js";

function generateRandomNumber(min, max) {
  return Math.floor(min + Math.random() * (max - min));
}

console.log("Bienvenue dans le jeu de devinette de nombres !\n");
console.log(
  "Règles :\n" +
    "1. Le système générera un nombre aléatoire entre 0 et 100.\n" +
    "2. Votre tâche est de deviner ce nombre.\n" +
    "3. Entrez un nombre lorsqu'on vous le demande.\n" +
    "4. Si votre supposition est trop élevée ou trop basse, vous serez averti et pourrez deviner à nouveau.\n" +
    "5. Le jeu continue jusqu'à ce que vous deviniez le bon nombre.\n\n" +
    "Commençons ! 🚀"
);

// Fonction pour valider si le nombre entré par l'utilisateur est valide
function isValidNumber(number) {
  if (Number.isNaN(number) || number <= 0 || number >= 100) {
    console.log(
      "Erreur : le nombre n'est pas un nombre ou est trop grand / trop petit (min : 0 ou max : 100)"
    );
    return false;
  }
  return true;
}

// Fonction pour demander à l'utilisateur d'entrer un nombre valide
function promptNumber() {
  let number;
  do {
    number = Number(prompt("Entrez votre nombre : "));
  } while (!isValidNumber(number));
  return number;
}

// Fonction principale pour jouer au jeu de devinette
function playNumberGuessingGame() {
  let playAgain = "O";

  while (playAgain === "O") {
    const TARGET_NUMBER = generateRandomNumber(0, 101);
    let userNumber;
    let attempts = 1;

    while (true) {
      userNumber = promptNumber();

      if (userNumber < TARGET_NUMBER) {
        console.log("📉 Le nombre entré est trop petit.");
      } else if (userNumber > TARGET_NUMBER) {
        console.log("📈 Le nombre entré est trop grand.");
      } else {
        console.log(
          `🟢 Bravo ! Le nombre aléatoire était bien ${TARGET_NUMBER}. ✨ Vous avez réussi en ${attempts} tentatives.`
        );
        break;
      }

      attempts++;
    }

    playAgain = prompt("Voulez-vous refaire une partie ? (O/N) ").toUpperCase();
  }

  console.log("Merci d'avoir joué !");
}

// Démarrer le jeu
playNumberGuessingGame();
