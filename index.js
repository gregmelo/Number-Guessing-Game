import { prompt } from "./prompt.js";

// Fonction pour générer un nombre aléatoire dans une plage donnée
function generateRandomNumber(min, max) {
  return Math.floor(min + Math.random() * (max - min));
}

// Affichage du message d'accueil
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

// Génération du nombre cible à deviner
const TARGET_NUMBER = generateRandomNumber(0, 101);

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
  let number = Number(prompt("Entrez votre nombre : "));

  while (!isValidNumber(number)) {
    number = Number(prompt("Entrez un nombre valide : "));
  }

  return number;
}

// autre possibilité pour la fonction promptNumber()

//function promptNumber() {
//   let number;
//   do {
//     number = Number(prompt("Entrez votre nombre : "));
//   } while (!isValidNumber(number));
//   return number;
// }

// Fonction principale pour jouer au jeu de devinette
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

// Demander à l'utilisateur d'entrer son premier nombre
const userNumber = promptNumber();

// Jouer au jeu de devinette avec le nombre entré par l'utilisateur
const result = playNumberGuessingGame(userNumber, TARGET_NUMBER);

// Afficher le résultat du jeu
console.log(result);
