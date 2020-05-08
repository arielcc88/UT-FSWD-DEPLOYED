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

//****** MAIN ******
console.log(isUpperChar);
function pwGenerator(){

}

//****** LISTENERS *******
chkUpper.addEventListener("click", function (){
	isUpperChar = fnStatusToggle(isUpperChar);
	console.log("after called ", isUpperChar);
});


//****** FUNCTIONS ******
//fnStatusToggle changes boolean values depending on checked boxes status
//used to verify what options the user wants to applye the password.
function fnStatusToggle(stBool){
	console.log("called ", !stBool);
	return !stBool;
}

