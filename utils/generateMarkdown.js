// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // Generate mark down for readme content
  return `# ${data.title}
## Table of Contents
[Description](# description)

## Description
${data.description}

## Installation Insturctions
${data.installation}

## Usage Information
${data.usage}

## Contribution Guildlines
${data.contribution}

## Tests
${data.test}

## License
${data.license}

## GitHub
(https://github.com/${data.GitHub})

## Email
<${data.email}>
`;
}

module.exports = generateMarkdown;
