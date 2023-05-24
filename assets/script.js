var questions = [{
  title: "What is HTML used for?",
  choices: ["Pokemon Power Ups", "It's a system used to add text files, graphics and links to webpages", "Quickly searching for the answer in Google...", "Trees, ducks. What the --- are you, Ranger Rick?"],
  correctAnswer: "It's a system used to add text files, graphics and links to webpages"
}, {
  title: "What is CSS used for?",
  choices: ["To add style and design to webpages", "Cranky, Sluthy, Salamanders", "Idk man, I just work here.", "All this from a slice of gabagool?"],
  correctAnswer: "To add style and design to webpages"
}, {
  title: "What does Javascript do?",
  choices: ["It's a coffee maker, duh.", "Sir, this is a Wendy's.", "Adds functionality to websites", "Your mother was working the bonbon concession at the Eiffel Tower."],
  correctAnswer: "Adds functionality to websites"
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
let timer;
let timerCount;
let quizScore = 0;


//adding the class hidden from the CSS file to this element
startScreenEl.setAttribute('class', 'reveal');
startQuestionEl.setAttribute('class', 'hidden');
startEndEL.setAttribute('class', 'hidden');
timerEl.setAttribute('class', 'countdown');

function startQuiz() {
  timerCount = 15;
  startScreenEl.setAttribute('class', 'hidden');
  startQuestionEl.setAttribute('class', 'reveal');
  generateQuestions();
  beginTimer(); //this will start the timer
};

function beginTimer() {
  timer = setInterval(function(){
    timerCount--
    timerEl.textContent = timerCount
    if(timerCount <= 0){
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
  if (currentQuestion === 0){
    endQuiz();
  }
}


function validateAnswer(){
  if (this.id !== questions[questionIndex].correctAnswer){
    // alert("wrong")
    console.log('this is the id', this.id)
    subtractQuizTimer()
  }else {
    // alert("yay")
    quizScore += 10
    console.log('score so far', quizScore)
  }
  questionIndex++;
  if (questionIndex >= questions.length){
    endQuiz();
  } else {
    generateQuestions();
  }
}

function endQuiz() {
  startQuestionEl.setAttribute('class', 'hidden');
  startEndEL.setAttribute('class', 'reveal');
  localStorage.setItem("recentScore", quizScore);
  clearInterval(timer)
};

function subtractQuizTimer() {
  timerCount -= 3;
}

var startButton = document.querySelector("#startButton");
var endButton = document.querySelector('#end-screen');
var initials = document.querySelector('#initials');
var initialsButton = document.querySelector('#initials-button');
var hiscores = document.querySelector('#hiscores');
// creating the array for the user data, and parsing thru JSON, and getting it via localstorage
var userData = JSON.parse(localStorage.getItem("hiscores")) || [];

initialsButton.addEventListener("click", function(){
  // localStorage.setItem("Initials", initials);
  // localStorage.setItem("recentScore", quizScore);
  
  //this is object syntax, key value pairs
  var Player = {
    initials:initials.value, //the key goes to the left of the colon, and what you want to pair up the key with, goes to the right
    score:quizScore,
    
  }
  console.log(Player);
  userData.push(Player) //Push places the user data, within the userData array. Adds the item to the array
  // here we are stringifying the userdata array so local storage will accept it. localstorage only accepts strings 
  localStorage.setItem("hiscores", JSON.stringify(userData));
  for (let i = 0; i < userData.length; i++) {
    var p = document.createElement('p') //create the variable p, and then create the P tag, to the hiscores section
    p.textContent = "Player: " + userData[i].initials + " Score: " + userData[i].score; //this adds the text content to the page, and organizes it by the information within the array, using initials and score
    hiscores.append(p) //Append places the data on the page
    
  }
})

startBtn.onclick = startQuiz;


//I need to put a page together "this is the End"
//add a button where they can take the quiz again
//add a hiscores page

//to display a score, if (questionindex = 4)
//alert (show recent score)
//end game
//to get the score it will be localStorage.getItem("recentScore", quizScore)

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