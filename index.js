const inquirer = require("inquirer");
const fs = require("fs");
const md = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        name: "title",
        message: "What is your project called?"
    },
    {
        name: "description",
        message: "Please provide a brief description of your project."
    },
    {
        name: "installation",
        message: "Please provide installation instructions for your project."
    },
    {
        name: "usage",
        message: "Please provide usage information for your project."
    },
    {
        name: "contribution",
        message: "Please provide contribution guidelines."
    },
    {
        name: "tests",
        message: "Please provide test instructions for your project."
    },
    {
        type: "list",
        name: "license",
        message: "Please select a license for your project.",
        choices: [
            "MIT",
            "GPL",
            "Apache",
            "N/A"
        ]
    }
];

function writeToFile(fileName, data){
    fs.writeFile(fileName, data, (error) => { error ? console.log(err) : console.log(`Wrote to README.md`)});
}

function init(){
    inquirer
        .prompt(questions)
        .then((answers) => {
            const markdown = md(answers);
            writeToFile("README.md", markdown);
        })
}

// Function call to initialize app
init();
