// Const inquirer Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

//Array of questions for user input
const questions = [ 
    {type: 'input',
     name: 'title',
     message: 'What would you like to use for the title of your project?',
     validate: titleInput =>    {
        if (titleInput) {
            return true;
        } else  {
            console.log('You must enter a title!');
            return false;
        }
     }
    },

    {type: 'input',
     name: "username",
     message: "What is your Github username?"},

    {type: 'input',
     name: "email",
     message: "What is your email address?"},

     {type: 'input',
     name: "deployed",
     message: "What is the address for the deployed application?"},

    {type: 'input',
     name: "description",
     message: "Please describe yoru project. You may want to include the motivation, the goals or problems that it solves, what you learned, or why this project stands out.",
     validate: descriptionInput =>    {
        if (descriptionInput) {
            return true;
        } else  {
            console.log('You must include a project description!');
            return false;
        }
     }
    },

    {type: 'input',
     name: 'installation',
     message: 'What npm commands are needed to run this application?',},

    {type: 'input',
     name: 'usage',
     message: 'What is the repo for?  How can it be used?',},

    {type: 'checkbox',
     name: 'license',
     message: 'What license will you be using for this project?', choices: ['MIT', 'GPLv2', 'Apache', 'GPLv3', 'Unlicensed',],
     validate: licenseInput =>    {
        if (licenseInput) {
            return true;
        } else  {
            console.log('You must chose a license!');
            return false;
        }
     }
    },

     {type: 'input',
     name: 'contributors',
     message: 'How can others contribute to this repo? Are there any rule that they need to abide by?',},

     {type: 'input',
     name: 'testing',
     message: 'What commands should be run to do tests?',},

     {type: 'input',
     name: 'questions',
     message: 'How can people ask questions about this repo?',},
];

//Function to write README file
function writeToFile(fileName, data) {
    const content = `# ${response.title}
    ##### [$(response.username)] [Email] (${response.email})[Deployed Application]
    
    ##Table of Contents
    * [Description](#Description)
    * [Installation](#Install)
    * [Usage](#Usage)
    * [References](#References)
    * [License](#License)
    * [Contributors](#Contributors)
    * [Testing](#Testing)
    * [Questions](#Questions)`
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {console.log(answers);
        writeToFile();})
}

// Function call to initialize app
init()
