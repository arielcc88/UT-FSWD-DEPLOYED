/**
 * Function fnCreateTableContent(arrayKeys)
 * returns markdown for Table of Content section
 */
function fnCreateTableContent(arrSections) {
  let tblContent = "## Table of Content\n";

  //console.log("receiving", arrSections);

  arrSections.forEach((section) => {
    if (section !== "Title" && section !== "Description") {
      if (section === "QuestionsGitUsr") {
        tblContent += `* [Questions](#Questions)\n`;
      } else if (section === "QuestionsEmail") {
        return;
      } else {
        tblContent += `* [${section}](#${section})\n`;
      }
    }
  });

  return tblContent;
}

module.exports = fnCreateTableContent;
