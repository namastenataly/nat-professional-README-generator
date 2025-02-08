// Function to generate a license badge
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  }
  return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
}

// Function to generate a license link
function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  }
  return `- [License](#license)`;
}

// Function to generate the license section of README
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  }
  return `## License

This project is licensed under the ${license} license.`;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  const { 
    title, 
    description, 
    installation, 
    usage, 
    contribution, 
    tests, 
    license, 
    github, 
    email 
  } = data;

  return `# ${title}

${renderLicenseBadge(license)}

## Description
${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
${renderLicenseLink(license)}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

${renderLicenseSection(license)}

## Contributing
${contribution}

## Tests
${tests}

## Questions
If you have any questions, please feel free to contact me:
- GitHub: [${github}](https://github.com/${github})
- Email: ${email}
`;
}

module.exports = generateMarkdown;