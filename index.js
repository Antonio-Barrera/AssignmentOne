const readlineSync = require("readline-sync");
const chalk = require("chalk");
var result = false;
var score = 0;

//Array of questions and answers.
var questionsList = [
  questionOne = {
    question: "Is the The Vatican the smallest country in the world? ",
    answer: "y"
  },
  questionTwo = {
    question: "Is it true that Montreal is the capital of Canada? ",
    answer: "n"
  },
  questionThree = {
    question: "Is The Andes the largest (not highest) mountain range in the world? ",
    answer: "y"
  },
  questionFour = {
    question: "Is The Mariana Trench the lowest natural place on planet Earth? ",
    answer: "y"
  },
  questionFive = {
    question: "Is the Amazonas river the longest river in the world? ",
    answer: "n"
  },
  questionSix = {
    question: "Are there more than 10 time zones in Russia? ",
    answer: "y"
  },
  questionSeven = {
    question: "Is Japan the most populated country in the entire world? ",
    answer: "n"
  },
  questionEigth = {
    question: "Was the US a french colony? ",
    answer: "n"
  },
  questionNine = {
    question: "Is Autralia an American country? ",
    answer: "n"
  },
  questionTen = {
    question: "Is The Earth the fourth planet on the solar system? ",
    answer: "n"
  },
]

//Array of high scores.
var recordsList = [
  scoreOne = {
    name: "Yeni",
    score: 8
  },
  scoreTwo = {
    name: "Ever",
    score: 5
  },
]

//Function to ask questions to user.
function play(question, answer, numQuestion) {
  var result = "Answer " + numQuestion;
  var userAnswer = readlineSync.keyIn(question + "| ", { limit: ["yn"] });
  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    result += " right!";
    console.log(chalk.green.bold(result));
    score += 1;
  } else {
    result += " wrong!";
    console.log(chalk.redBright.bold(result));
  }
  console.log(chalk.greenBright.bold("Score: " + score));
  console.log("-----------------");
}

//Function to compare two scores.
function compareScores(userScore, recordScore) {
  if (userScore < recordScore) {
    return false;
  }
  return true;
}


userName = readlineSync.question("Can you tell me your first name? ");
console.log(chalk.yellow("\nWelcome, " + userName + ". I'm gonna test your basic knowlegdes."));
console.log(chalk.yellow("Please, press <y> if the answer is 'yes' and <n> if it's 'no'."));
console.log(chalk.blue.bold("***************************************************************\n"));

for (var i = 0; i < questionsList.length; i++) {
  var currentQuestion = questionsList[i];
  play(currentQuestion.question, currentQuestion.answer, (i + 1));
}

for (var i = 0; i < recordsList.length; i++) {
  var recordScore = recordsList[i];
  result = compareScores(score, recordScore.score);
}

if (result) {
  console.log(chalk.yellowBright.bold.underline("* Congratulations! You have beaten a record. Please take a screenshot and send me it to update the table. *"));
}