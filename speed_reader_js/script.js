var poem =
  "Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.";

var spdReaderStatus = ["Not Started", "Reading", "Complete"];

//Speed Reader status function
function fnSetSpdStatus(arrIndex) {
  document.getElementById("spdStatus").innerText = spdReaderStatus[arrIndex];
}

//creating a separate function to convert string into array
//then call this function from speedRead and loop thru the
//array printing out the words.
function fnStringToArray(fnString) {
  //trimming will remove any starting spaces
  //split(" ") -> splits the string by any " " (space) and returns an array
  return fnString.trim().split(" ");
}

function prepareRead() {
  // Create the countdown timer.
  let secCounter = 5; //second counter
  let countDisplay = document.getElementById("countdown");
  //set speedReader status on screen
  fnSetSpdStatus(0);
  //getting timerID from setInterval()
  const interID = setInterval(function () {
    secCounter--; //decreasing second counter on every iteration
    countDisplay.innerText = secCounter;
    if (secCounter === 0) {
      //if second counter reaches 0 -> 5 secs have passed since this function will be executed every second (1000ms intervals)
      //stopping setInterval() at 5 secs
      clearInterval(interID);
      //clearing counter content
      countDisplay.parentElement.innerText = " ";
      //returning true once complete
      console.log("countdown true");
    }
  }, 1000);
}

function speedRead() {
  // Print words to the screen one at a time.
  let wordCounter = 0;
  let readDisplay = document.getElementById("spdDisplay");
  //getting words array
  const strArray = fnStringToArray(poem);
  //calling countdown function
  //prepareRead();
  //set speedReader status on screen --> Reading
  fnSetSpdStatus(1);
  //setting 1 sec interval to print words from array
  const rIntID = setInterval(function () {
    if (wordCounter < strArray.length) {
      readDisplay.innerText = strArray[wordCounter];
      wordCounter++;
    } else {
      //stopping interval
      clearInterval(rIntID);
      //changing reader status
      fnSetSpdStatus(2);
      //clearing reader dispay
      readDisplay.innerText = "";
      //console.log("done");
    }
  }, 1000);
}

function intAdder(intStopper) {
  var sum = 0;
  for (s = 1; s <= intStopper; s++) {
    sum += s;
  }
  //console.log(sum);
  return sum;
}

//debugger;
//prepareRead();
//setTimeout(speedRead, 5000);

console.log(intAdder(10));
