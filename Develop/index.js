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
        choices: ['MIT', 'None'],
    },

    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
];

// TODO: Create a function to write README file
const writeFile = (data) => {
    fs.writeFile('README.md', data, (err) => {
        if (err) {
            console.log(err);
            return;

        } else {
            console.log("Your README has been created!")
        }
    })
};

// TODO: Create a function to initialize app
const init = () => {
    return inquirer.prompt(questions)
}

// Function call to initialize app
init()
.then((userInput) => {
    return generateMarkdown(userInput)
})

.then((mdInfo) => {
    return writeFile(mdInfo)
})

.catch((err) => {
    console.log(err)
})
