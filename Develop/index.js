// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import path from 'path';
import { type } from 'os';
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'Motivation',
        message: 'What was your motivation for building this project?',
    },
    {
        type: 'input',
        name: 'problem',
        message: 'What problem does your project solve?',
    },
    {
        type: 'input',
        name: 'learned',
        message: 'What did you learn while working on this project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, if any, with links to their GitHub profiles.Also list any third-party assets or tutorials used.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license.',
        choices: ['MIT', 'Apache', 'GPLv3','None'],
    },
    {
        type: 'input',
        name: 'badges',
        message: 'Provide URLs for any badges you would like to include, separated by commas.',
      },
    {
        type: 'input',
        name: 'features',
        message: 'If your project has a lot of features, list them here.',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'If you created an application or package and would like other developers to contribute it, you will want to add guidelines for how to do so.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them.',
    },

    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },

];

function generateReadMe(answers){
    return `# ${answers.title}

## Description

${answers.Motivation} ${answers.problem} ${answers.learned}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Badges](#badges)
- [Features](#features)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Credits
${answers.credits}

## License

This project is licensed under the ${answers.license} license.

## Badges
${answers.badges.split(',').map(badge => `![badge](${badge.trim()})`).join('\n')}

## Features
${answers.features}

## How to Contribute
${answers.contributing}

## Tests
${answers.tests}

## Questions
If you have any questions about the project, you can contact me via my GitHub profile at [${answers.github}](https://github.com/${answers.github}).
`;
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) =>{
        const readmeAnswers = generateReadMe(answers);

        //ensure the generated directory exists
        const outputDir = path.join(process.cwd(), 'Generated');
        if(!fs.existsSync(outputDir)){
            fs.mkdirSync(outputDir);
        }

        //write the README file in the generated directory
        writeToFile(path.join('Generated', 'README.md', readmeAnswers));

        console.log('Successfully created README.md in the Generated folder!');
    }).catch((error) => {
        console.error('Error generating README: ',error);
    });
}

// Function call to initialize app
init();
