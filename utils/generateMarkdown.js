// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license){
    case "MIT": 
      return`![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
    case "APACHE 2.0":
      return"![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)"
    case "GPL 3.0":
      return"![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)"
    case "BSD 3":
      return"![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)" 
    default:
      return ""
     
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license != "None"){
    return`* [License](#license)`
  } else {
    return""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license != "None"){
    return`## License
This project is licensed under ${license}`
  } else {
    return""
  }
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

* [installation](#installation)

* [Usage](#usage)

${renderLicenseLink(data.license)}

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

to install necessary dependencies, run the following command:

${data.depend}

## Usage

${data.useUser}

${renderLicenseSection(data.license)}

## Contributing

${data.userContr}

## Tests

to run tests run the following command:

${data.test}

## Questions 

User name: ${data.userName}
Email: ${data.email}
`;
}

module.exports = generateMarkdown;
