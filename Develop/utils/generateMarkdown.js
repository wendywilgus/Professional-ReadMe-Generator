// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "Unlicensed") {
    return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)]`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license !== "Unlicensed") {
      return `(https://opensource.org/licenses/${license})`
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "Unlicensed") {
    return 'This project is licensened under ${license}.'
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
    ##[Deployed Application] (${data.deployed})
    
    ## Table of Contents
    * [Description](#Description)
    * [Installation](#Installation)
    * [Usage](#Usage)
    * [License](#License)
    * [Contributors](#Contributors)
    * [Testing](#Testing)
    * [Questions](#Questions)
    
  ## Description:
  ${data.description}

  ## Installation
    _To properly install this application:_
  ${data.installation}

  ## Usage
    _Please follow instructions for use:_
  ${data.usage}

  ## License
  ${renderLicenseBadge (data.license)}
  ${renderLicenseSection (data.license)}
  ${renderLicenseLink (data.license)}

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
