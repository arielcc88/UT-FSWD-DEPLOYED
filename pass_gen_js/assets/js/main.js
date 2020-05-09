//****** VAR DECLARATIONS *******
// arrUpChar, arrLowChar, arrNum, arrSpecial will contain all possible 
// options to buld the password.
var arrUpChar  = "ABCDEFGHIJKLMNOPQRSTUVWXTZ";
var arrLowChar = "abcdefghiklmnopqrstuvwxyz";
var arrNum	   = "0123456789";
var arrSpecial = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
//User options status. By default all are applied.
var isUpperChar = true;
var isLowerChar = true;
var isNumber    = true;
var isSpecial   = true; 
var passLength  = 12; 

//****** DOM ELEMENTS ******
var inpLength  = document.querySelector("#passw-length");
var chkUpper   = document.querySelector("#chkUpperChar");
var chkLower   = document.querySelector("#chkLowerCase");
var chkNum     = document.querySelector("#chkNum");
var chkSpecial = document.querySelector("#chkSpecial");
var btnDec     = document.querySelector("#dec-length");
var btnInc     = document.querySelector("#inc-length");


//****** MAIN ******
function pwGenerator(){

}


//****** LISTENERS *******
//Uppercase box
chkUpper.addEventListener("click", function (){
	isUpperChar = chkUpper.checked;
	console.log("isUpperChar ", isUpperChar);
});
//Lowercase box
chkLower.addEventListener("click", function (){
	isLowerChar = chkLower.checked;
	console.log("isLowerChar ", isLowerChar);
});
//Num box
chkNum.addEventListener("click", function (){
	isNumber = chkNum.checked;
	console.log("isNumber ", isNumber);
});
//Special Chars box
chkSpecial.addEventListener("click", function (){
	isSpecial = chkSpecial.checked;
	console.log("isSpecial ", isSpecial);
});
//password length spinners
btnDec.addEventListener("click", fnDecLength); //increment
btnInc.addEventListener("click", fnIncLength); //decrement
//manual change of password length - validation.
inpLength.addEventListener("change", fnValidateLength);



//****** FUNCTIONS ******
//fnStatusToggle changes boolean values depending on checked boxes status
//used to verify what options the user wants to applye the password.
function fnStatusToggle(stBool){
	console.log("called ", !stBool);
	return !stBool;
}
//fnDecLength decreases the password length. minimum is 8 chars.
function fnDecLength(){
	if (passLength > 8) {
		passLength--;
		fnLengthRender();
	}
}
//fnIncLength increases the password length. maximum is 128 chars.
function fnIncLength(){
	if (passLength < 128) {
		passLength++;
		fnLengthRender();
	}
}
//fnLengthRender updates the pasword length input value
function fnLengthRender(){
	inpLength.value = passLength;
}
//fnValidateLength ensures password length does not go out of acceptance range [8-128]
function fnValidateLength(){
	if (inpLength.value < 8) {
		inpLength.value = 8; //forcing value to lowest allowed
	}
	else if (inpLength.value > 128) {
		inpLength.value = 128; //enforcing value to highest allowed
	}
}
