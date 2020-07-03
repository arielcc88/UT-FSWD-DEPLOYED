// function to generate markdown for README
function generateMarkdownTitle(data) {
  return `# ${data.title}


`;
}

// function to generate markdown for README
function generateMarkdownSubTitle(data) {
  return `## ${data.subtitle}


`;
}

module.exports = { generateMarkdownTitle, generateMarkdownSubTitle };
