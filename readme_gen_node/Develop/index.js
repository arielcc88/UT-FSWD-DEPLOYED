//require section
const generateMarkdown = require("./utils/generateMarkdown.js");
const inquirer = require("inquirer");

// array of questions for user
const questions = [
    //project title question object
    { type: "input", name: "prjTitle", message: "Input Project Title:", validate: function (usrInput) { if (!usrInput) { return "Project Title is required."; } return true; }, }

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    //console.log(generateMarkdown({"title" : "test"}));

    //questions away with inquirer
    inquirer
        .prompt(questions)
        .then(function (answers) {
            console.log(answers);
        })

}

// function call to initialize program
init();
