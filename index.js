//DEPENDENCIES
// TODO: Include packages needed for this application
import fs from "fs";
import inquirer from "inquirer";
import generateMarkdown from "./utils/generateMarkdown.js"

// TODO: Create an array of questions for user input
//FUNCTIONS
const logText = (response) => console.log((response.text));

//USER INTERACTIONS 
// inquirer
// .prompt(questions)
// .then(logText);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
    if (err) {
        console.error("error writing to file.", err);
        return;
    } console.log('\nREADME file has been created successfully!');
    });
}   


// TODO: Create a function to initialize app
function init() {
    console.log('Starting application...');
}
    inquirer
    .prompt([
    {//title of your project
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {//beginning of project description
        type: 'input',
        message: 'What was your motivation behind building the project?',
        name: 'motivation',
    },
    {
        type: 'input',
        message: 'What problem does your project solve?',
        name: 'problemSolve',
    },
    {
        type: 'input',
        message: 'What did you learn while building your project?',
        name: 'lessonsLearned',
    },//end of project description
    {//what guidelines should people follow in order to contribute to your project?
        type: 'input',
        message: 'How can people contribute to your project?',
        name: 'contributionGuidelines',
    },
    {//What are the steps required to install your project?
        type: 'input',
        message: 'How do we install your project?',
        name: 'installation',
    },
    {//Provide instructions and examples for use
        type: 'input',
        message: 'How do we test your project out?',
        name: 'testInstructions',
    },
    {//github username
        type: 'input',
        message: 'What is your Github username?',
        name: 'github',
    },
    {//email address
        type: 'input',
        message: 'How can people contact you?',
        name: 'email',
    },
    {//Provide project license
        type: 'input',
        message: 'Does your project have a license?',
        name: 'license',
    },
]).then((answers) => {
    const readmeContent = generateMarkdown(answers);
    writeToFile('README.md', readmeContent);
});

function generateReadmeContent () {
}

//INITIALIZATION
// Function call to initialize app
init();