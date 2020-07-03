//require section

const {
  generateMarkdownTitle,

  generateMarkdownSubTitle,
} = require("./utils/generateMarkdown.js");

const createTblContent = require("./utils/createTableOfContent.js");
const questions = require("./utils/questionSet.js");
const inquirer = require("inquirer");
const fs = require("fs");

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
        tempStreamLoader =
          generateMarkdownTitle({ title: data[section] }) + "\n\n";
        //adding badge
        tempStreamLoader += `![](https://img.shields.io/static/v1?label=License&message=${data["License"]}&color=green)\n\n`;
        break;

      case "Description":
        //add Description section
        tempStreamLoader =
          generateMarkdownSubTitle({ subtitle: `${section}` }) +
          data[section] +
          "\n\n";

        //create Table of Content function
        tempStreamLoader += createTblContent(Object.keys(data)) + "\n\n";
        break;

      case "QuestionsGitUsr":
        //Adding Questions section
        tempStreamLoader =
          generateMarkdownSubTitle({ subtitle: "Questions" }) +
          `Want to get in touch? Github: ${data[section]}\n\n`;
        break;

      case "QuestionsEmail":
        //Adding Questions section
        tempStreamLoader = `Report bugs and enhancements to: ${data[section]}\n\n`;
        break;

      default:
        tempStreamLoader =
          generateMarkdownSubTitle({ subtitle: `${section}` }) +
          data[section] +
          "\n\n";
        break;
    }
    fsTream.write(tempStreamLoader);
  });
  fsTream.end();
  console.log(
    `---- README.md for ${data.Title} has been successfully created. Happy Coding!! ----`
  );
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
    //console.log(answers);
  });
}

// function call to initialize program
init();
