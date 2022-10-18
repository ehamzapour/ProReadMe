// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
    },

    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?',
    },

    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
    },

    {
        type: 'input',
        name: 'usage',
        message: 'What are the usage information?',
    },

    {
        type: 'input',
        name: 'contributing',
        message: 'What are the contribution guidelines?',
    },

    {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions?',
    },

    {
        type: 'list',
        name: 'licenses',
        message: 'Please choose a license.',
        choices: [],
    },

    {
        type: 'input',
        name: 'questions',
        message: 'What is your GitHub username?',
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
