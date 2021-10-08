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
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

* [installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation {#installation}

to install necessary dependencies, run the following command:

${data.depend}

## Usage {#usage}

${data.useUser}

${renderLicenseSection(data.license)}

##Contributing {#contributing}

${data.userContr}

##Tests {#tests}

to run tests run the following command:

${data.test}

##questions 

User name: ${data.userName}
Email: ${data.email}
`;
}

module.exports = generateMarkdown;
