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
  choices: ["It's a coffee maker, duh.", "Sir, this is a Wendy's.", "Adds functionality to websites", "example add this in later"],
  correctAnswer: "Adds functionality to websites"

},
{
  title: "",
  choices: "",
  correctAnswer: "",
}];
let questionIndex = 0;

// importing elements

let startScreenEl = document.querySelector('#start-screen');
let startQuestionEl = document.querySelector('#question-screen');
let startEndEL = document.querySelector('#end-screen');
let startBtn = document.querySelector('#start-button');
let titleEl = document.querySelector('#title');
let choicesEl = document.querySelector('#choices');
let timerEl = document.querySelector('#timer');
let timer 
let timerCount
let quizScore = 0

//adding the class hidden from the CSS file to this element
startScreenEl.setAttribute('class', 'reveal');
startQuestionEl.setAttribute('class', 'hidden');
startEndEL.setAttribute('class', 'hidden');
timerEl.setAttribute('class', 'countdown');

function startQuiz() {
  timerCount = 30;
  startScreenEl.setAttribute('class', 'hidden');
  startQuestionEl.setAttribute('class', 'reveal');
  generateQuestions();
  beginTimer(); //this will start the timer
};

function beginTimer() {
  timer = setInterval(function(){
    timerCount--
    timerEl.textContent = timerCount
    if(timerCount === 0){
      clearInterval(timer)
      lostGame();
    }
  },1000);
}
 function lostGame() {
  localStorage.setItem("recentScore", quizScore)
 }


function generateQuestions() {
  let currentQuestion = questions[questionIndex]
  // changing the text of our title element. 
  // we are also storing the above questionIndex, to call that above variables being dynamic
  titleEl.textContent = currentQuestion.title // changing the title
  //now we need the 4 buttons, so we create a 4 loop
   //this clears the previous questions so they don't load on the page
   
  choicesEl.innerHTML = "";

  

  for (let i = 0; i < 4; i++) { // this loops 4 times 
    let tempBtn = document.createElement("button"); //creates a vanilla button
    tempBtn.textContent = currentQuestion.choices[i]; //changes the text thats on the button. [i] makes 4 buttons, for the choices in Question 1
    tempBtn.setAttribute('class', 'question-box'); //addinng a class, and need to set this up with the fancy class in CSS (update formatting there)
    tempBtn.setAttribute("id", currentQuestion.choices[i])
  
    tempBtn.onclick = validateAnswer//run the validateAnswer function
    choicesEl.appendChild(tempBtn) //we are appending this to the Dom
 
  }
}

//this function is generating the questions & attributing the timer to the game
// function validateAnswer(e) {
//   console.log("clicked"); 
//   //we want to increment the question index
//   for(i = 0; i < questions.length; i++){
//     if (questions[questionIndex].choices === questions[questionIndex].correctAnswer){
//       console.log("yay")
//       quizScore += 10;
//     } else {
//       console.log("no")
//       timerCount -= 10;
//       // console.log("this is my choice", e.target.id)
//       // console.log("this is my blah", questions[i].correctAnswer)
//     }
//   }


//   // questions.correctAnswer.forEach(function(choice,i){
//   //   if (choice.choices === questions[i].correctAnswer){
//   //     alert("correct")
//   //   } else {
//   //     alert("wrong")
//   //   }

//   // })
//   questionIndex++;
//   generateQuestions();
// };

function validateAnswer(){
  if (this.id !== questions[questionIndex].correctAnswer){
    // alert("wrong")
    console.log('this is the id', this.id)
    subtractQuizTimer()
    questionIndex++;
    generateQuestions();
  }else {
    // alert("yay")
      questionIndex++;
      generateQuestions();
      quizScore += 10
      console.log('score so far', quizScore)
  }
}

function endQuiz() {
  generateQuestions();
  startEndEL.setAttribute('class', 'reveal');
  localStorage.setItem("recentScore", quizScore)
};

function subtractQuizTimer() {
  timerCount -= 15;
}

var startButton = document.querySelector("#startButton");
var endButton = document.querySelector('#end-screen');

startBtn.onclick = startQuiz;


//I need to put a page together "this is the End"
//add a button where they can take the quiz again
//add a hiscores page

//to display a score, if (questionindex = 4)
//alert (show recent score)
//end game
//to get the score it will be localStorage.getItem("recentScore", quizScore)