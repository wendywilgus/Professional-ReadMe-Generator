// Const inquirer Include packages needed for this application
const inquirer = require('inquirer');

//Array of questions for user input
const questions = [ 
    {type: 'input',
     name: 'title',
     message: 'What would you like to use for the title of your project?'},
    {type: 'input',
     name: "motivation",
     message: "What was your motivation for building this project?"},
    {type: 'input',
     name: "reason",
     message: "Why did you build this project? (Note: the answer is not because it was a homework assignment.)",},
    {type: 'input',
     name: "problem",
     message: "What problem does it solve?",},
    {type: 'input',
     name: "learned",
     message: "What did you learn?",},
    {type: 'input',
     name: "extra",
     message: "What makes your project stand out?",},
    {type: 'input',
     name: 'installation',
     message: 'What npm commands are needed to run this application?',},
    {type: 'input',
     name: 'usage',
     message: 'What is the repo for?  How can it be used?',},
     {type: 'input',
     name: 'license',
     message: 'What license will you be using for this project? If none, press enter.',},
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
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {console.log(answers)})
}

// Function call to initialize app
init();