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
        type: 'input',
        name: 'description',
        message: 'Enter your project description',
    },
    {
        type: 'input',
        name: 'installation instructions',
        message: 'Enter the instructions for installation',
    },
    {
        type: 'input',
        name: 'usage information',
        message: 'Enter the usage information',
    },
    {
        type: 'input',
        name: 'contribution guideline',
        messgae: 'Enter contribution guidelines',
    },
    {
        type: 'input',
        name: 'test instructions',
        message: 'Enter your test instructions',
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
