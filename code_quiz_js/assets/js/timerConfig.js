/*
------------
VARIABLE DECLARATIONS
------------
*/
//quiz time
let timerTotal = 60; //60 seconds as starter value.
let intervalID;


/*
------------
FUNCTION DECLARATIONS
------------
*/
//start Timer
function fnStartTimer(ctnerId){
    fnUpdateTimerCount(timerTotal, ctnerId);
    //display timerTotal
    intervalID = setInterval(function(){
        timerTotal--;
        fnUpdateTimerCount(timerTotal, ctnerId);
    }, 1000);
}

function fnUpdateTimerCount(timerValue, ctnerId){
    const timerCtner = document.querySelector("#" + ctnerId);
    //check if timer is not zero
    if(timerValue > 0){
        timerCtner.textContent = timerValue + " seconds left";
    }
    else {
        fnStopTimer(intervalID);
        timerCtner.textContent = "Time Out!";
        fnEndQuiz();
    }
}

//stop timer
function fnStopTimer(timerID){
    clearInterval(timerID)
}

//subtract from timer (incorrect answer)
function fnSubtractTimer(questionCost, ctnerID){
    timerTotal -= questionCost;
    fnUpdateTimerCount(timerTotal, ctnerID);
}