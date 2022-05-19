const inquirer = require('inquirer');
const fs = require('fs');
const { Manager, Intern, Engineer } = require('./lib');
const path = require('path');

const DIST_DIRECTORY = path.resolve(__dirname, "dist");
const distPath = path.join(DIST_DIRECTORY, "index.html");

const render = require('./src/page-template');

const idArray = [];
const employees = [];

const createManager = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the manager's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's id?",
        }, 
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email?"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the manager's officeNumber?",
        }
    ])
    .then((answers) => {
        console.log(answers);
        // create a Manager using the Manager class

        // add that manager into your array
        
        mainMenu()
    })
}

const createEngineer = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the engineer's id?",
        }, 
        {
            type: 'input',
            name: 'email',
            message: "What is the engineer's email?"
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the engineer's github?",
        }
    ])
    .then((answers) => {
        console.log(answers);

        mainMenu()
    })
}

const createIntern  = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the intern's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the intern's id?",
        }, 
        {
            type: 'input',
            name: 'email',
            message: "What is the intern's email?"
        },
        {
            type: 'input',
            name: 'school',
            message: "What is the intern's school?",
        }
    ])
    .then((answers) => {
        console.log(answers);

        mainMenu()
    })
}

const mainMenu = () => {
    inquirer.prompt({
        message: "Which employee would you like to create?",
        type: "list",
        name: "userChoice",
        choices: [
            "Engineer",
            "Intern",
            "Done adding"
        ]
    })
    .then((answer) => {
        if(answer.userChoice == "Engineer") {
            createEngineer()
        } else if(answer.userChoice == "Intern") {
            createIntern()
        } else {
             console.log("Done adding.");
             ((answer) => {
              render = generateHTML(answer);
            
              fs.writeFile('index.html', htmlPageContent, (err) =>
                err ? console.log(err) : console.log('Successfully created index.html!')
              );
            });
        }
    })
}

createManager();
