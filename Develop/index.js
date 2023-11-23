// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'GitHub Username',
        message: 'Enter your GitHub username'
    },
    {
        type: 'input',
        name: 'title',
        message: 'Enter your project name',
    },
    {
        type: 'list',
        name: 'License Type',
        choices: [inquirer.Separator(),'MIT License', new inquirer.Separator(), 'Morzilla Public License 2.0'],
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
    writeToFile('README-challenge.md', response.title);
    })
}

// Function call to initialize app
init();
