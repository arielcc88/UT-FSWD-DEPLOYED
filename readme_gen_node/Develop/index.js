//require section
const generateMarkdown = require("./utils/generateMarkdown.js");
const inquirer = require("inquirer");
const fs = require("fs");

// array of questions for user
const questions = [
  //project title question object
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

const tableContent = [""];

// function to write README file
function writeToFile(fileName, data) {
  //checking if file already exist - Sync Call
  if (IsThereAReadme(fileName)) {
    //deleting file prior to create new one
    fnDeleteExistingReadme(fileName);
  }
  //create new file
  fnCreateEmptyFile(fileName);

  //appending content to README file using fs WriteStream
  const fsTream = fs.createWriteStream(fileName, { flags: "a" });
  let tempStreamLoader = "";
  Object.keys(data).forEach((section, position) => {
    switch (section) {
      case "Title":
        //just print Project Title
        tempStreamLoader = generateMarkdown({ title: data[section] }) + "\n";
        break;

      default:
        tempStreamLoader =
          generateMarkdown({ title: `#${section}` }) + data[section] + "\n";
        break;
    }

    fsTream.write(tempStreamLoader);
  });
  fsTream.end();
}

/**
 * Function to verify if File exist.
 * If True, file is deleted, If False, file created.
 */
function IsThereAReadme(fileName) {
  fileName = fileName || "README.md"; // setting to README.md if filename not passed.
  try {
    return fs.existsSync(fileName);
  } catch (error) {
    console.error(error);
  }
}

/**
 * Function deleteREADME
 * deletes any existing README file before generating new one.
 */
function fnDeleteExistingReadme(fileName) {
  fileName = fileName || "README.md"; // setting to README.md if filename not passed.
  //logging
  console.log(`---- Deleting existing ${fileName} ----`);
  try {
    fs.unlinkSync(fileName);
    console.log(`---- ${fileName} deleted successfully ----`);
  } catch (error) {
    console.error(error);
  }
}

/**
 * Function fnCreateEmptyFile()
 * generates an empty README.md file
 */
function fnCreateEmptyFile(fileName) {
  try {
    fs.closeSync(fs.openSync(fileName, "w"));
    console.log(`---- New ${fileName} created ----`);
  } catch (error) {
    console.error(error);
  }
}

// function to initialize program
function init() {
  //console.log(generateMarkdown({"title" : "test"}));

  //questions away with inquirer
  inquirer.prompt(questions).then(function (answers) {
    writeToFile("README.md", answers);
    console.log(answers);
  });
}

// function call to initialize program
init();
