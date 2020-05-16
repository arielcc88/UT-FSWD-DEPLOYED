//TODO:

//************************************************************************************

/*
------------
VARIABLE DECLARATIONS
------------
*/
const welcomeForm = document.querySelector("#welcome-form");
const startBtn = document.querySelector("#start-button");
const welcomeInput = document.querySelector("#welcome-input");
const alertNotify = document.querySelector("#alert-notify");

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
    console.log("not empt");
    //call user object creation & storage
    fnSetObjInLocal(fnUserObject(welcomeInput.value));
  } else {
    console.log("empt");
    //change alert div class: display block.
    alertNotify.classList.remove("alert-no-visible");
  }
  //create user object

  //call startGame function
});

//Welcome page text input listener
welcomeInput.addEventListener("keyup", function () {
  //hiding alert notification in case is shown
  alertNotify.classList.add("alert-no-visible");
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
function fnSetObjInLocal(objName) {
  localStorage.setItem(objName, JSON.stringify(objName));
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
