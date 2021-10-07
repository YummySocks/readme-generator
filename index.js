// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require("inquirer");
const generate = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
function questions(){
inquirer
.prompt([
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'userName'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    },
    {
        type: 'input',
        message: "What is your project's name?",
        name: 'title'
    },
    {
        type: 'input',
        message: 'Please write a short description of your project',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What kind of license should your project have?',
        name: 'licence'
    },
    {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'depend'
    },
    {
        type: 'input',
        message: 'What command should be used to run tests?',
        name: 'test'
    },
    {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'useUser'
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo',
        name: 'userContr'
    }
])
.then((answers) => {
writeToFile(answers)
});
}

// TODO: Create a function to write README file
function writeToFile(data) {
    const readMeData = generate.generateMarkdown(data)
    console.log(readMeData)
}

// TODO: Create a function to initialize app
function init() {
    questions()
    
}

// Function call to initialize app
init();
