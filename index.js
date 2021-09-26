var readlineSync = require('readline-sync');

var username = readlineSync.question("Enter your name : ")
console.log("Hello " + username + " ! ");
console.log("Welcome to : DO YOT KNOW ME ? " + "\n");
console.log("Scoring is as follows  : "+ "\n"
+ " +1 for right answers and 0 for wrong answers (Max score : 5 , Min Score ; 0)")


var questionOne = { 
  question: "Where do I live ?(State Only) ",
  answer:"Delhi"
};
var score = 0;
var questionTwo = {
  question : "How old am I ? ",
  answer : "23" 
};
var questionThree = {
  question : "What is my favourite food ? ",
  answer : "Pizza"
};

var questionFour = {
  question : "What type of movies do I like (Marvel or DC) ? " , 
  answer : "DC"

};
var questionFive = {
  question : "Who is my favourite superhero ? ",
  answer : "Batman"
} ;

var questions = [questionOne , questionTwo, questionThree, questionFour, questionFive];

function checkanswer(question , answer ){
  var userAnswer = readlineSync.question(question);  
 if (userAnswer.toUpperCase() === answer.toUpperCase())
    { score = score + 1;
    console.log("You are right.Your score is : " + score); 
}
  else {
     console.log("You are wrong . Your score is : " + score);
     
}}


for (var i = 0; i < questions.length ; ++i){
  checkanswer(questions[i].question , questions[i].answer);
  console.log("------------------------")
}

console.log("Thank You for completing the Quiz , "  + username + ". Your Score is " + score);