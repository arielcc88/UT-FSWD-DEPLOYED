// array of questions for user
const questions = [
  //project question object
  {
    type: "input",
    name: "Title",
    message: "Input Project Title:",
    validate: function (usrInput) {
      if (!usrInput) {
        return "Project Title is required.";
      }
      return true;
    },
  },
  {
    type: "editor",
    name: "Description",
    message: "Input Project Description:",
    validate: function (usrInput) {
      if (!usrInput) {
        return "Project Description is required.";
      }
      return true;
    },
  },
  {
    type: "editor",
    name: "Installation",
    message: "Indicate Installation Instructions:",
    validate: function (usrInput) {
      if (!usrInput) {
        return "Install Instructions are required.";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "Usage",
    message: "Add Usage Information:",
    validate: function (usrInput) {
      if (!usrInput) {
        return "Usage Information is required.";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "Contributing",
    message: "Input Contribution Guidelines:",
    validate: function (usrInput) {
      if (!usrInput) {
        return "Contribution Guidelines are required.";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "Tests",
    message: "Indicate Test Instructions:",
    validate: function (usrInput) {
      if (!usrInput) {
        return "Test Instructions are required.";
      }
      return true;
    },
  },
  {
    type: "list",
    name: "License",
    message: "Indicate License for this Project:",
    choices: [
      "PD",
      "CCO",
      "MIT",
      "Apache",
      "MPL",
      "GPL",
      "AGPL",
      "JRL",
      "AFPL",
      "Proprietary Software",
    ],
    default: "MIT",
  },
  {
    type: "input",
    name: "QuestionsGitUsr",
    message: "Enter GitHub username for Contact Section:",
    validate: function (usrInput) {
      if (!usrInput) {
        return "GitHub username is required.";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "QuestionsEmail",
    message: "Enter email address for Contact Section:",
    validate: function (usrInput) {
      if (!usrInput) {
        return "Email is required.";
      }
      return true;
    },
  },
];

module.exports = questions;
