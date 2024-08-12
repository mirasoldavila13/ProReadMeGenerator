import inquirer from 'inquirer';
import fs from 'fs';
import path from 'path';
import { generateMarkdown } from './utils/generateMarkdown.js';


const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'motivation',
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
        choices: [
            'MIT',
            'Apache 2.0',
            'GPLv3',
            'BSD 3-Clause',
            'BSD 2-Clause',
            'LGPL v3',
            'AGPL v3',
            'MPL 2.0',
            'EPL 2.0',
            'None'
        ],
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
        name: 'email',
        message: 'What is your email address? (Leave blank to use a project-specific email)',
        default: answers => `contact@${answers.title.replace(/\s+/g, '').toLowerCase()}.com`,
    },

    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },

];


function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
    inquirer.prompt(questions).then((answers) =>{
        const markdownContent = generateMarkdown(answers);

        const outputDir = path.join(process.cwd(), 'dist');
        if(!fs.existsSync(outputDir)){
            fs.mkdirSync(outputDir);
        }

        writeToFile(path.join('dist', 'README.md'), markdownContent);
    }).catch((error) => {
        console.error('Error generating README: ',error);
    });
}

init();
