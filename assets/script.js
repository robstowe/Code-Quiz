var questions = [{
  title: "What is HTML used for?",
  choices: ["Pokemon Power Ups", "It's a system used to add text files, graphics and links to webpages", "Quickly searching for the answer in Google...", "example add this in later"],
  correctAnswer: "It's a system used to add text files, graphics and links to webpages"
}, {
  title: "What is CSS used for?",
  choices: ["To add style and design to webpages", "Cranky, Sluthy, Salamanders", "Idk man, I just work here.", "example add this in later"],
  correctAnswer: "To add style and design to webpages"
}, {
  title: "What does Javascript do?",
  choices: ["It's a coffee maker, duh.", "Sir, this is a Wendy's.", "To add style and design to webpages", "example add this in later"],
  correctAnswer: "To add style and design to webpages"
}];
let questionIndex = 0;
let choicesIndex = 0;

// importing elements

let startScreenEl = document.querySelector('#start-screen');
let startQuestionEl = document.querySelector('#question-screen');
let startEndEL = document.querySelector('#end-screen');
let startBtn = document.querySelector('#start-button');
let titleEl = document.querySelector('#title');
let choicesEl = document.querySelector('#choices');
let timerEl = document.querySelector('#timer');

//adding the class hidden from the CSS file to this element
startScreenEl.setAttribute('class', 'reveal');
startQuestionEl.setAttribute('class', 'hidden');
startEndEL.setAttribute('class', 'hidden');
timerEl.setAttribute('class', 'countdown');

function startQuiz() {
  startScreenEl.setAttribute('class', 'hidden');
  startQuestionEl.setAttribute('class', 'reveal');
  generateQuestions();
};

function generateQuestions() {
  let currentQuestion = questions[questionIndex]
  // changing the text of our title element. 
  // we are also storing the above questionIndex, to call that above variables being dynamic
  titleEl.textContent=currentQuestion.title // changing the title
  //now we need the 4 buttons, so we create a 4 loop
  for (let i = 0; i < 4; i++) { // this loops 4 times 
    let tempBtn = document.createElement("button"); //creates a vanilla button
    tempBtn.textContent=currentQuestion.choices[i]; //changes the text thats on the button. [i] makes 4 buttons, for the choices in Question 1
    tempBtn.setAttribute('class', 'question-box'); //addinng a class, and need to set this up with the fancy class in CSS (update formatting there)
    tempBtn.onclick=validateAnswer//run the validateAnswer function
    choicesEl.appendChild(tempBtn) //we are appending this to the Dom
    //i need to figure out how to empty the first question after answering
    choicesEl[0].setAttribute('class', 'hidden');
  }
}

function validateAnswer() {
  console.log("clicked"); //we want to increment the question index
  questionIndex++;
  generateQuestions();
};



var startButton = document.querySelector("#startButton");

startBtn.onclick=startQuiz;
