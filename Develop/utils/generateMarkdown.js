function renderLicenseBadge(license) {
  if (!license || license === 'None') return '';

  const licenseBadges = {
      'MIT': 'MIT-blue',
      'Apache 2.0': 'Apache_2.0-blue',
      'GPLv3': 'GPLv3-blue',
      'BSD 3-Clause': 'BSD_3--Clause-blue',
      'BSD 2-Clause': 'BSD_2--Clause-blue',
      'LGPL v3': 'LGPL_v3-blue',
      'AGPL v3': 'AGPL_v3-blue',
      'MPL 2.0': 'MPL_2.0-blue',
      'EPL 2.0': 'EPL_2.0-blue',
  };

  return `![License](https://img.shields.io/badge/License-${licenseBadges[license]}.svg)`;
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

// Keep user input as it is for lists to preserve numbering and dashes
function formatList(input) {
  return input
    .split(/(?=\d\.)|(?=\-\s)/) // Split when it sees numbers like "1." or dashes like "- "
    .map(item => item.trim())
    .join('\n'); // Join with newlines to preserve list formatting
}

// Ensure badges are correctly formatted as markdown images
function formatBadges(input) {
  return input
    .split(',') // Split based on commas if user enters multiple badges
    .map(badge => `![badge](${badge.trim()})`)
    .join('\n'); // Join badges on separate lines
}

function generateMarkdown(data) {
  return `# ${data.title || 'Project Title'}

${renderLicenseBadge(data.license)}

## Description
${data.motivation || ''} ${data.problem || ''} ${data.learned || ''}

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
${formatList(data.installation)}

## Usage
${data.usage}

## Credits
${data.credits}

${renderLicenseSection(data.license)}

## Badges
${formatBadges(data.badges)}

## Features
${formatList(data.features)}

## How to Contribute
${formatList(data.contributing)}

## Tests
${formatList(data.tests)}

## Questions
If you have any questions about the project, you can contact me via my GitHub profile at [${data.github || ''}](https://github.com/${data.github || ''}).
`;
}

export { renderLicenseBadge, renderLicenseLink, renderLicenseSection, generateMarkdown };
