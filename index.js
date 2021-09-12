

var readlineSync = require("readline-sync");
const chalk = require('chalk');
const error = chalk.bold.red;
const correct = chalk.bold.green;
const bgGreen = chalk.black.bgGreen;

var highscore = { 
  name: "Lalitha",
  topScore: 8
};
var score = 0;

quizList = [
  {
    question: "Is My Age Greater Than 15? \n",
    answer: "No"
  },
  {
    question: "Am I Introvert or Extovert?\n ",
    answer: "Extrovert"
  },
  {
    question: "Where do I live? \n",
    answer: "Vizag"
  },
  {
    question: "What is my favorite icecream flavour? \n",
    answer: "Chocolate"
  },
  {
    question: "What is my favourite food? \n",
    answer: "Biryani"
  },
  {
    question: "Who is my favourite Teacher? \n",
    answer: "Tanay Pratap"
  },
  {
    question: "Do I prefer coffee or tea? \n ",
    answer: "Coffee"
  },
   {
  question : "Guess when is my birthday month? \n",
  answer: "March"
},
  {
    question: "What is my favourite colour? \n",
    answer: "Black"
  },
 {
   question: "What is my hobby? \n",
   answer: "Reading Books"
 },
 
  
]

function welcomeMessage(){
  console.log(bgGreen("___Bhavya's Quiz___"));
  console.log("A quiz to check how well do you know me? ")

  console.log("\n");


  var userName = readlineSync.question("Hello! Who's this? Please enter your name! \n" );


  console.log( (("Welcome to")+ chalk.cyan(" How well do you know Bhavya's quiz ") + chalk.bgGreen(userName ) ));

  console.log("Let's play! ");
  readlineSync.question( chalk.cyan("Can you beat this HIGHSCORE " + highscore.topScore +" ? Press enter to play! \n") );
  playGame();
}
 

function checkAnswer(n,question, answer){
  var userAnswer = readlineSync.question(n + "." + (question));

  if(userAnswer.toLowerCase() === answer.toLowerCase()){
    console.log(correct("You are right! "));
    score++;
    console.log("Current Score: "+ chalk.green(score));
    

  }
  else{
    console.log(error("You are wrong! "));
    console.log("Current Score: " + chalk.red(score) );
  }
  console.log("\n");
}

function playGame(){
  for(var i=0; i<quizList.length; i++){
    checkAnswer(i+1, quizList[i].question, quizList[i].answer);
  }
  displayScore();
}

function displayScore(){
  console.log((chalk.cyan("Hurray! Your total score is " + chalk.green(score))));

  if(score > highscore.topScore){
    highscore.topScore = score;
    console.log("Congratulations! You have beaten the highscore");
    console.log("New HIGHSCORE: "+ highscore);
  }
  console.log(chalk.cyan("Thanks for playing.") );
  console.log(bgGreen("Don't forget to share screenshot."));
}

welcomeMessage();