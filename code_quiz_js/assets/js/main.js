//TODO: --done-- prevent default behavior of submit button of welcome form 
//TODO: define user object
	//>> --done-- validate input not empty
	//>> create user object
		//>> full name
		//>> score
		//>> correct
		//>> wrong
		//>> missed
	//>> json.stringify
	//>> store object (client side storage)
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
startBtn.addEventListener("click", function(e){
	e.preventDefault();
	//validate user input function
	if(fnIsEmpty()){
		console.log("not empt");
		//call user object creation & storage
	}
	else {
		console.log("empt");
		//change alert div class: display block.
		alertNotify.classList.remove("alert-no-visible");
	}
	//create user object

	//call startGame function
});

//Welcome page text input listener
welcomeInput.addEventListener("keyup", function(){
	//hiding alert notification in case is shown
	alertNotify.classList.add("alert-no-visible");
})




/*
------------
FUNCTION DECLARATIONS
------------
*/
//Validating input --> not empty
function fnIsEmpty(){
	if(welcomeInput.value){
		return true;
	}
	else{
		return false;
	}
}

// Function returns user object
function fnUserObject(userName){
	return {
		username: userName,
		score: 0,
		correct: 0,
		wrong: 0,
		missed: 0
	}
}


// function stores string in local storage
function fnStoreInLocal(data){
	
}


//function converts object, arrays into strings