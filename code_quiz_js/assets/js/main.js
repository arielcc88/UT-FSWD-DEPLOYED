//TODO:1st Question transition
//set timer and countdown (initialize timer)
//create object question
//>> question
//>> correct answer
//>> decoys
//>> time cost if wrong

//************************************************************************************

/*
------------
VARIABLE DECLARATIONS
------------
*/
const welcomeCtner = document.querySelector(".welcome-ctner");
const welcomeForm = document.querySelector("#welcome-form");
const startBtn = document.querySelector("#start-button");
const welcomeInput = document.querySelector("#welcome-input");
const alertNotify = document.querySelector("#alert-notify");
const userCornerInfo = document.querySelector("#user-info");
const userCornerCtner = document.querySelector(".user-corner");
//question card
const questionCard = document.querySelector(".question-card");
const questionTitle = document.querySelector(".question");
const questionList = document.querySelector(".answer-list");

//questions array
const quizQuestions = [
  {
    questionTitle: "What is JavaScript?",
    answers: [
      "Coffee",
      "Computer HW",
      "Programming Language",
      "Some World City",
    ],
    correctAnswer: "Programming Language",
    questionVal: 10,
    timeCost: 5,
  },
];

/*
------------
EVENT LISTENERS
------------
*/
//preventing button submit action on form
startBtn.addEventListener("click", function (e) {
  e.preventDefault();
  //validate user input function
  if (fnIsEmpty()) {
    //call user object creation & storage
    fnSetObjInLocal(welcomeInput.value, fnUserObject(welcomeInput.value));
    welcomeCtner.classList.add("no-visible"); // hiding welcome form
    //displaying 1st question
    fnSetQuestionCard(0);
    //updating user corner content
    fnSetUserCorner(welcomeInput.value);
    questionCard.classList.remove("no-visible");
    userCornerCtner.classList.remove("no-visible");
  } else {
    //change alert div class: display block.
    alertNotify.classList.remove("no-visible");
  }
  //create user object

  //call startGame function
});

//Welcome page text input listener
welcomeInput.addEventListener("keyup", function () {
  //hiding alert notification in case is shown
  alertNotify.classList.add("no-visible");
});

/*
------------
FUNCTION DECLARATIONS
------------
*/
//Validating input --> not empty
function fnIsEmpty() {
  if (welcomeInput.value) {
    return true;
  } else {
    return false;
  }
}

// Function returns user object
function fnUserObject(userName) {
  return {
    username: userName,
    score: 0,
    correct: 0,
    wrong: 0,
  };
}

//store the object in the local storage
function fnSetObjInLocal(objName, objVal) {
  localStorage.setItem(objName, JSON.stringify(objVal));
  //TODO: validate if user name exist - show message
}

// function updates values in local storage
function fnUpdateValueInLocal(objName, objKey, objValue) {
  //getting existing data if any
  let storedObj = localStorage.getItem(objName);
  //if no existing object, create one.
  //otherwise, retrieve existing data
  storedObj = storedObj ? JSON.parse(storedObj) : {};
  //set new key-value
  storedObj[objKey] = objValue;
  //store back the object in the local storage
  localStorage.setItem(objName, JSON.stringify(storedObj));
}

//Loading question content function
function fnSetQuestionCard(questionIndex) {
  let questionObj = quizQuestions[questionIndex]; //question object
  //populating card content from object
  questionTitle.textContent = questionObj.questionTitle;
  questionObj.answers.forEach(function (answer_val, answer_index) {
    var answerLi = document.createElement("li");
    var answerBtn = document.createElement("button");
    answerBtn.textContent = answer_val;
    answerBtn.setAttribute("value", answer_index);
    answerBtn.classList.add("answerbtn");
    answerLi.appendChild(answerBtn);
    questionList.appendChild(answerLi);
  });
}

//updating user-corner info
function fnSetUserCorner(userObjName) {
  let userObj = localStorage.getItem(userObjName);
  userCornerInfo.textContent =
    JSON.parse(userObj).username + ": " + JSON.parse(userObj).score;
}
