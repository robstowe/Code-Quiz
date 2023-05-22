function() {
    var questions = [{
      question: "What is HTML used for?",
      choices: ["Pokemon Power Ups", "It's a system used to add text files, graphics and links to webpages", "Quickly searching for the answer in Google..."],
      correctAnswer: 1
    }, {
      question: "What is CSS used for?",
      choices: ["To add style and design to webpages", "Cranky, Sluthy, Salamanders", "Idk man, I just work here."],
      correctAnswer: 0
    }, {
      question: "What does Javascript do?",
      choices: ["It's a coffee maker, duh.", "Sir, this is a Wendy's.", "It's a programming language that allows you to make webpages interactive"],
      correctAnswer: 2
    }];
}  

//everything below here I am not sure what to do with, i grabbed from a website
var questionCounter = 0; //Tracks question number
var selections = []; //Array containing user choices
var quiz = $('#quiz'); //Quiz div object

