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
const userTimerCtner = document.querySelector(".user-timer");
const timerCountdown  = document.querySelector("#countdown");
//question card
const questionCard = document.querySelector(".question-card");
const questionTitle = document.querySelector(".question");
const questionList = document.querySelector(".answer-group");
//score card
let userScore = 0;
//question index
let questionIndex = 0;
//user name
let usrName = "";
//correct answers
let correctAnswerCter = 0;
//wrong answers
let wrongAnswerCter = 0;


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
    usrName = welcomeInput.value;
    fnSetObjInLocal(welcomeInput.value, fnUserObject(usrName, userScore, correctAnswerCter, wrongAnswerCter));
    welcomeCtner.classList.add("no-visible"); // hiding welcome form
    //displaying 1st question
    fnSetQuestionCard(questionIndex);
    //updating user corner content
    fnSetUserCorner(welcomeInput.value);
    //call initiate Countdown function
    fnStartTimer("countdown");
    questionCard.classList.remove("no-visible");
    userCornerCtner.classList.remove("no-visible");
    userTimerCtner.classList.remove("no-visible");
  } else {
    //change alert div class: display block.
    alertNotify.classList.remove("no-visible");
  }
});

//Welcome page text input listener
welcomeInput.addEventListener("keyup", function () {
  //hiding alert notification in case is shown
  alertNotify.classList.add("no-visible");
});

//answer onClick listener
questionList.addEventListener("click", function(e){
  e.preventDefault();
  e.stopPropagation();
  if(e.target.classList.contains("answerbtn")){
    //send answer and question to validateAnswer function
    if(fnIsCorrectAnswer(e.target.textContent, questionIndex)){
      //add up questionVal to userScore
      userScore += quizQuestions[questionIndex].questionVal;
      //add success class to button clicked
      e.target.classList.add("list-group-item-success");
      //increase correct
      correctAnswerCter++;
    }
    else {
      //subtract question time cost
      timerTotal -= quizQuestions[questionIndex].timeCost;
      //add danger class
      e.target.classList.add("list-group-item-danger");
      //increase wrong
      wrongAnswerCter++;
    }
    //update local storage
    fnUpdateValueInLocal(usrName, fnUserObject(usrName, userScore, correctAnswerCter, wrongAnswerCter));
    //update client score value
    fnSetUserCorner(usrName);
    //render next question (if available)
    if(questionIndex < (quizQuestions.length - 1)){
      questionIndex++;
      setTimeout(function(){
        fnSetQuestionCard(questionIndex);
      }, 300);
    }
    else{
      //call end quiz function
      fnEndQuiz();
    }
  }
  else if (e.target.classList.contains("scoreBtn")){
    //push name and score to score table (localStorage)
    let scoresArr = localStorage.getItem("quizScores");
    scoresArr = scoresArr ? JSON.parse(scoresArr) : [];
    scoresArr.push({"name": usrName, "score": userScore});
    localStorage.setItem("quizScores", JSON.stringify(scoresArr));
    fnRenderResults();
  }
});

function fnEndQuiz(){
  //set timer to zero
  timerTotal = 0;
  //render DOM elements
  //title => End of Quiz!
  questionTitle.textContent = "End of Quiz!";
  //clear answer list content
  questionList.innerHTML = "";
  const endQuizText = document.createElement("p");
  const endQuizBtn = document.createElement("a");
  endQuizText.textContent = "The Coding Quiz has ended. Click button below to see your results."
  endQuizBtn.textContent = "See Results";
  endQuizBtn.classList.add("btn", "btn-primary", "scoreBtn");
  endQuizBtn.setAttribute("id", "score-btn");
  questionList.appendChild(endQuizText);
  questionList.appendChild(endQuizBtn);
}

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
function fnUserObject(uName, uScore, uCorrect, uWrong) {
  return {
    username: uName,
    score: uScore,
    correct: uCorrect,
    wrong: uWrong,
  };
}

//store the object in the local storage
function fnSetObjInLocal(objName, objVal) {
  localStorage.setItem(objName, JSON.stringify(objVal));
}

// function updates values in local storage
function fnUpdateValueInLocal(objName, objValue) {
  //getting existing data if any
  let storedObj = localStorage.getItem(objName);
  //if no existing object, create one.
  //otherwise, retrieve existing data
  storedObj = storedObj ? JSON.parse(storedObj) : {};
  //set new key-value
  //storedObj[objKey] = objValue;
  storedObj = Object.assign({}, objValue);
  //store back the object in the local storage
  localStorage.setItem(objName, JSON.stringify(storedObj));
}

//Loading question content function
function fnSetQuestionCard(qIndex) {
  questionList.innerHTML = "";
  let questionObj = quizQuestions[qIndex]; //question object
  //populating card content from object
  questionTitle.textContent = questionObj.questionTitle;
  questionObj.answers.forEach(function (answer_val, answer_index) {
    let answerBtn = document.createElement("button");
    answerBtn.textContent = answer_val;
    answerBtn.setAttribute("value", answer_index);
    answerBtn.classList.add("answerbtn", "list-group-item", "list-group-item-action");
    questionList.appendChild(answerBtn);
  });
}

//updating user-corner info
function fnSetUserCorner(userObjName) {
  let userObj = localStorage.getItem(userObjName);
  userCornerInfo.textContent =
    JSON.parse(userObj).username + ": " + JSON.parse(userObj).score + " Points";
}

function fnIsCorrectAnswer(answer, qIndex){
  if(answer === quizQuestions[qIndex].correctAnswer){
    return true;
  }
  return false;
}

function fnRenderResults(){
  //clear answer list content
  questionTitle.textContent = "";
  questionList.innerHTML = "";
  const usrResult = document.createElement("div");
  usrResult.classList.add("my-results");
  const resHeader = document.createElement("h4");
  resHeader.textContent = "Your Results!";
  //appending
  usrResult.appendChild(resHeader);

  const scoreDiv = document.createElement("div");
  const scoreHeader = document.createElement("h6");
  scoreHeader.textContent = "Score:";
  scoreHeader.classList.add("result-lines");
  const scoreValue = document.createElement("p");
  scoreValue.textContent = userScore;
  scoreValue.classList.add("result-lines");
  //appending
  scoreDiv.appendChild(scoreHeader);
  scoreDiv.appendChild(scoreValue);
  usrResult.appendChild(scoreDiv);

  const correctDiv = document.createElement("div");
  const correctHeader = document.createElement("h6");
  correctHeader.textContent = "Correct Answers:";
  correctHeader.classList.add("result-lines");
  const correctValue = document.createElement("p");
  correctValue.textContent = correctAnswerCter;
  correctValue.classList.add("result-lines");
  //appending
  correctDiv.appendChild(correctHeader);
  correctDiv.appendChild(correctValue);
  usrResult.appendChild(correctDiv);

  const wrongDiv = document.createElement("div");
  const wrongHeader = document.createElement("h6");
  wrongHeader.textContent = "Wrong Answers:";
  wrongHeader.classList.add("result-lines");
  const wrongValue = document.createElement("p");
  wrongValue.textContent = wrongAnswerCter;
  wrongValue.classList.add("result-lines");
  //appending
  wrongDiv.appendChild(wrongHeader);
  wrongDiv.appendChild(wrongValue);
  usrResult.appendChild(wrongDiv);
  
  //appending to existing div
  questionList.appendChild(usrResult);


  //------ Highscore table -------
  const hsTableHeader = document.createElement("h4");
  hsTableHeader.textContent = "Highscore Table";
  questionList.appendChild(hsTableHeader);

  const hsTable = document.createElement("table");
  hsTable.classList.add("table");
  const hsTableHead = document.createElement("thead");
  const headRow = document.createElement("tr");
  const theadName = document.createElement("th");
  theadName.setAttribute("scope", "col");
  theadName.textContent = "Name";
  const theadScore = document.createElement("th");
  theadScore.setAttribute("scope", "col");
  theadScore.textContent = "Score";
  //appending
  headRow.appendChild(theadName);
  headRow.appendChild(theadScore);
  hsTableHead.appendChild(headRow);
  hsTable.appendChild(hsTableHead);

  //row content
  const hsTbody = document.createElement("tbody");
  //get scores from local storage
  let scoresArr = localStorage.getItem("quizScores");
  scoresArr = scoresArr ? JSON.parse(scoresArr) : [];
  scoresArr.sort(fnCompareScores);
  //loop thru array
  for(let i = 0; i < scoresArr.length; i++){
    const rowTr = document.createElement("tr");
    const rowTdName = document.createElement("td");
    rowTdName.textContent = scoresArr[i].name;
    const rowTdScore = document.createElement("td");
    rowTdScore.textContent = scoresArr[i].score;
    //appending
    rowTr.appendChild(rowTdName);
    rowTr.appendChild(rowTdScore);
    hsTbody.appendChild(rowTr);
  }
  //append table body to table.
  hsTable.appendChild(hsTbody);
  questionList.appendChild(hsTable);
}

function fnCompareScores(a, b) {
  const scoreA = a.score;
  const scoreB = b.score;

  let comparison = 0;
  if (scoreA < scoreB) {
    comparison = 1;
  } else if (scoreA > scoreB) {
    comparison = -1;
  }
  return comparison;
}