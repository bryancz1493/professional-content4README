// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter your project name',
    },
    {
        type: 'list',
        name: 'License Type',
        choices: ['MIT License', 'Morzilla Public License 2.0', 'GPL 3.0 License'],
    },
    {
        type: 'input',
        name: 'GitHub Username',
        message: 'Enter your GitHub username'
    },
    {
        type: 'input',
        name: 'Email',
        message: 'Enter your email',
    },
];

// Add README template 

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => {
    console.log("responses", response);
    writeToFile('README-challenge.md', generateMarkdown(response));
    })
}

// Function call to initialize app
init();
