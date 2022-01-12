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

    }
];

function writeToFile(fileName, data){
    fs.writeFile(fileName, data);
}

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
