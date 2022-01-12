const inquirer = require("inquirer");
const fs = require("fs");
const md = require("./generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data){
    fs.writeFile(fileName, data);
}

// TODO: Create a function to initialize app
function init(){
    inquirer
        .prompt(questions)
        .then((answers) => {
            const markdown = md.generateMarkdown(answers);
            writeToFile("README.md", markdown);
        })
}

// Function call to initialize app
init();
