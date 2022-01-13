// If there is no license, return an empty string
function renderLicenseBadge(license){
	if(!license || license === "N/A"){
		return "";
	}
	return `![${license} license](https://img.shields.io/badge/license-${license}-green)`
}

function renderLicenseLink(license){
	if(!license || license === "N/A"){
		return "";
	}
	return "- [License](#license)"
}

// If there is no license, return an empty string
function renderLicenseSection(license){
	if(!license || license === "N/A"){
		return "";
	}
	return `## License
	
	This software is licensed under the ${license} license.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data){
    return `# ${data.title}

${renderLicenseBadge(data.license)}
	
## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
${renderLicenseLink(data.license)}

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contribution}

## Tests

${data.tests}

${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
