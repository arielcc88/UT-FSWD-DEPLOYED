//****** VAR DECLARATIONS *******
// arrUpChar, arrLowChar, arrNum, arrSpecial will contain all possible 
// options to buld the password.
var arrUpperChar  = "ABCDEFGHIJKLMNOPQRSTUVWXTZ";
var arrLowerCase  = "abcdefghiklmnopqrstuvwxyz";
var arrNum	   = "0123456789";
var arrSpecial = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var pswdSrc    = arrUpperChar + arrLowerCase + arrNum + arrSpecial;
var arrPassLog = [];
//User options status. By default all are applied.
var isUpperChar = true;
var isLowerChar = true;
var isNumber    = true;
var isSpecial   = true; 
var passLength  = 12; 

//****** DOM ELEMENTS ******
var frmPassGen = document.querySelector(".form-pswdgen");
var inpPass    = document.querySelector("#inputPass");
var btnGenerate= document.querySelector("#generateBtn");
var inpLength  = document.querySelector("#passw-length");
var chkUpper   = document.querySelector("#chkUpperChar");
var chkLower   = document.querySelector("#chkLowerCase");
var chkNum     = document.querySelector("#chkNum");
var chkSpecial = document.querySelector("#chkSpecial");
var btnDec     = document.querySelector("#dec-length");
var btnInc     = document.querySelector("#inc-length");
var pswdVal    = document.querySelector(".pswd-length-val");
var critVal    = document.querySelector(".criteria-val");

//****** MAIN ******
function pwGenerator(){
//call master validation function
	if (fnMasterVal) {
		let randomPass = "";
		for (let i = 0; i < passLength; i++) {
			let ranChar = Math.floor(Math.random() * pswdSrc.length);
			randomPass += pswdSrc.substring(ranChar,ranChar + 1);
		}
		inpPass.value = randomPass;
	}
	else{
		//alert of problem with either criteria for password generation.
	}
}


//****** LISTENERS *******
//Uppercase box
chkUpper.addEventListener("click", function (){
	isUpperChar = chkUpper.checked;
	if (isUpperChar || (!isUpperChar && (fnChkBoxValidation() > 0))) {
		fnUpdatePswdSrc(isUpperChar, arrUpperChar);
	}
	else{
		//btnGenerate.disabled = true;
		chkUpper.checked = true;
		isUpperChar = true;
		critVal.textContent = "At least one criteria is required!";
	}
});
//Lowercase box
chkLower.addEventListener("click", function (){
	isLowerChar = chkLower.checked;
	if (isLowerChar || (!isLowerChar && (fnChkBoxValidation() > 0))) {
		fnUpdatePswdSrc(chkLower.checked, arrLowerCase);
	}
	else{
		chkLower.checked = true;
		isLowerChar = true;
		critVal.textContent = "At least one criteria is required!";
	}
	
});
//Num box
chkNum.addEventListener("click", function (){
	isNumber = chkNum.checked;
	if (isNumber || (!isNumber && (fnChkBoxValidation() > 0))) {
		fnUpdatePswdSrc(chkNum.checked, arrNum);
	}
	else{
		chkNum.checked = true;
		isNumber = true;
		critVal.textContent = "At least one criteria is required!";
	}
});
//Special Chars box
chkSpecial.addEventListener("click", function (){
	isSpecial = chkSpecial.checked;
	if (isSpecial || (!isSpecial && (fnChkBoxValidation() > 0))) {
		fnUpdatePswdSrc(chkSpecial.checked, arrSpecial);
	}
	else{
		chkSpecial.checked = true;
		isSpecial = true;
		critVal.textContent = "At least one criteria is required!";
	}
});
//password length spinners
btnDec.addEventListener("click", fnDecLength); //increment
btnInc.addEventListener("click", fnIncLength); //decrement
//manual change of password length - validation.
inpLength.addEventListener("change", fnValidateLength);
//preventing default form behavior if enter pressed on length input
frmPassGen.addEventListener("submit", function(e){
	e.preventDefault();
});
//generating password
btnGenerate.addEventListener("click", function(e){
	e.preventDefault();
	pwGenerator();
});


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
	passLength = inpLength.value;
}
//updates the password source string based on checkbox status
function fnUpdatePswdSrc (chkBoxSt, strID){
	if (chkBoxSt && !pswdSrc.includes(strID)) {
		pswdSrc += strID;
	}
	else if (!chkBoxSt && pswdSrc.includes(strID)) {
		pswdSrc = pswdSrc.replace(strID, "");
	}
	//clear validation text
	critVal.textContent = "";
	console.log("Pswd Src ",pswdSrc);
}
//fnChkBoxValidation ensures at least one password criteria is selected.
function fnChkBoxValidation(){
	//using let so this variables only exist in this function's scope
	//ensuring they are updated every time the function is called.
	let criteriaArray = [isUpperChar, isLowerChar, isNumber, isSpecial];
	let chkdCounter = 0;
	criteriaArray.forEach(function(element){
		if(element){
			chkdCounter++;
		}
	});
	console.log(chkdCounter);
	return chkdCounter;
}
//Master validation function. With the validation already in place, this is optional.
function fnMasterVal(){
	if ((fnChkBoxValidation > 0) && (passLength >= 8 && passLength <= 128) && (pswdSrc !== "")) {
		return true;
	}
	else{
		return false;
	}
}