//require section
const generateMarkdown = require("./utils/generateMarkdown.js");
const inquirer = require("inquirer");

// array of questions for user
const questions = [
    //project title question object
    { type: "input", name: "prjTitle", message: "Input Project Title:", validate: function (usrInput) { if (!usrInput) { return "Project Title is required."; } return true; } },
    { type: "editor", name: "prjDesc", message: "Input Project Description:", validate: function (usrInput) { if (!usrInput) { return "Project Description is required."; } return true; } },
    { type: "editor", name: "prjInstall", message: "Indicate Installation Instructions:", validate: function (usrInput) { if (!usrInput) { return "Install Instructions are required."; } return true; } },
    { type: "input", name: "prjUsage", message: "Add Usage Information:", validate: function (usrInput) { if (!usrInput) { return "Usage Information is required."; } return true; } },
    { type: "input", name: "prjContr", message: "Input Contribution Guidelines:", validate: function (usrInput) { if (!usrInput) { return "Contribution Guidelines are required."; } return true; } },
    { type: "input", name: "prjTestInst", message: "Indicate Test Instructions:", validate: function (usrInput) { if (!usrInput) { return "Test Instructions are required."; } return true; } },
    { type: "list", name: "prjLicense", message: "Indicate License for this Project:", choices: ["PD", "CCO", "MIT", "Apache", "MPL", "GPL", "AGPL", "JRL", "AFPL", "Proprietary Software"], default: "MIT"},
    { type: "input", name: "prjGitUsr", message: "Enter GitHub username for Contact Section:", validate: function (usrInput) { if (!usrInput) { return "GitHub username is required."; } return true; } },
    { type: "input", name: "prjDevEmail", message: "Enter email address for Contact Section:", validate: function (usrInput) { if (!usrInput) { return "Email is required."; } return true; } },

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
