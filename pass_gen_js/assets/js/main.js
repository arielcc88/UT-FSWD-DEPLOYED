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
btnDec.addEventListener("click", fnDecLength);

//****** FUNCTIONS ******
//fnStatusToggle changes boolean values depending on checked boxes status
//used to verify what options the user wants to applye the password.
function fnStatusToggle(stBool){
	console.log("called ", !stBool);
	return !stBool;
}

function fnDecLength(){
	
}
