
function renderLicenseBadge(license) {
  return (!license || license === 'None')
    ? ''
    : `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
}

function renderLicenseLink(license) {
  return (!license || license === 'None')
    ? ''
    : `- [License](#license)`;
}


function renderLicenseSection(license) {
  return (!license || license === 'None')
    ? ''
    : `## License

  This project is licensed under the ${license} license.`;
}


function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.motivation} ${data.problem} ${data.learned}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
${renderLicenseLink(data.license)}
- [Badges](#badges)
- [Features](#features)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)

## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.credits}

${renderLicenseSection(data.license)}

## Badges
${data.badges.split(',').map(badge => `![badge](${badge.trim()})`).join('\n')}

## Features
${data.features}

## How to Contribute
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions about the project, you can contact me via my GitHub profile at [${data.github}](https://github.com/${data.github}).
`;
}


export { renderLicenseBadge, renderLicenseLink, renderLicenseSection, generateMarkdown };
