const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Please provide a brief description of your project:',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What are the installation instructions for your project?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'What are the usage instructions for your project?',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Who are the contributors to this project?',
      name: 'contributors',
    },
    {
      type: 'input',
      message: 'What are the testing instructions for your project?',
      name: 'testing',
    },
    {
      type: 'list',
      message: 'What type of license does your project have?',
      name: 'license',
      choices: ['MIT', 'GPLv3', 'Apache', 'BSD', 'None'],
    },
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
    },
  ])
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md', readMeFile, (err) =>
      err ? console.error(err) : console.log('README.md file generated successfully!')
    );
  
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
