// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseInfo = (license) => {
  if(license === "MIT"){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }
  if(license === "none"){
    return "None"
  }
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  return `
  # **${data.title}**

  ${renderLicenseInfo(data.licenses)}

  ## Table of Contents

  * [Description] (#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)


  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseInfo(data.license)}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  Please contact me through email or my GitHub with any questions.
  * Github: ${data.github}
  * Email: ${data.email}
`;
}

module.exports = generateMarkdown;
