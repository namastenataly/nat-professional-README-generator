const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
    validate: function (title) {
      return title !== '';
    },
  },
  {
    type: 'input',
    message: 'Enter a description of your project:',
    name: 'description',
    validate: function (description) {
      return description !== '';
    },
  },
  {
    type: 'input',
    message: 'Enter installation instructions for your project:',
    name: 'installation',
    validate: function (installation) {
      return installation !== '';
    },
  },
  {
    type: 'input',
    message: 'Enter usage information for your project:',
    name: 'usage',
    validate: function (usage) {
      return usage !== '';
    },
  },
  {
    type: 'input',
    message: 'Enter contribution guidelines for your project:',
    name: 'contribution',
    validate: function (contribution) {
      return contribution !== '';
    },
  },
  {
    type: 'input',
    message: 'Enter test instructions for your project:',
    name: 'tests',
    validate: function (tests) {
      return tests !== '';
    },
  },
  {
    type: 'list',
    message: 'Choose a license for your project:',
    name: 'license',
    choices: ['MIT', 'Apache 2.0', 'GPLv3', 'None'],
  },
  {
    type: 'input',
    message: 'Enter your GitHub username:',
    name: 'github',
    validate: function (github) {
      return github !== '';
    },
  },
  {
    type: 'input',
    message: 'Enter your email address:',
    name: 'email',
    validate: function (email) {
      return email !== '';
    },
  },
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('README.md successfully created!')
  );
}

// Function to initialize app
function init() {
  inquirer.prompt(questions).then((responses) => {
    const readmeContent = generateMarkdown(responses);
    writeToFile('README.md', readmeContent);
  });
}

// Initialize app
init();