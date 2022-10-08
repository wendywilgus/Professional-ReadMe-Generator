// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
  else if (license === "GPLv2") {
    return "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
  }
  else if (license === "Apache") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }
  else if (license === "GPLv3") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  }
  else if (license === "Unlicensed") {
    return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
  }
  else {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "https://opensource.org/licenses/MIT"
  }
  else if (license === "GPLv2") {
    return "https://opensource.org/licenses/GPL-2.0"
  }
  else if (license === "Apache") {
    return "https://opensource.org/licenses/Apache-2.0"
  }
  else if (license === "GPLv3") {
    return "https://opensource.org/licenses/GPL-3.0"
  }
  else if (license === "Unlicensed") {
    return "http://unlicense.org/"
  }
  else {
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `${renderLicenseBadge(license)}  ${renderLicenseLink(license)}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ##[Deployed Application] (${data.deployed})
    
  ## Table of Contents
    - [Description](#Description)
    - [Installation](#Installation)
    - [Usage](#Usage)
    - [License](#License)
    - [Contributors](#Contributors)
    - [Testing](#Testing)
    - [Questions](#Questions)
    
  ## Description:
  ${data.description}

  ## Installation
    _To properly install this application:_
  ${data.installation}

  ## Usage
    _Please follow instructions for use:_
  ${data.usage}

  ## License
  ${renderLicenseSection()}
 

  ## Contributors
    _Guidelines for contributing:_
  ${data.contributors}

  ## Testing
     _Guidelines for testing:_
  ${data.testing}

  ## Questions
     _For futher questions: 
  ${data.questions}; 
   Github Account: [${data.username}] (https://github.com/${data.username})
   Email: [${data.email}] (mailto:${data.email})`;
};


module.exports = generateMarkdown;
