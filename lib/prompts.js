const inquirer = require("inquirer");

//Local Packages
const Employee = require("./Employee");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Manager = require("./Manager");

function createManagerPrompt (){
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the name of your team manager?",
            name: "manager_name"
        },
        {
            type: "input",
            message: "What is your manager's employee ID?",
            name: "manager_ID"
        },
        {
            type: "input",
            message: "What is your manager's email address?",
            name: "manager_email",
            validate: (input) => {
                if(input.includes("@") && input.includes(".")) {
                    return true;
                }
                else {
                    return "Invalid Email; Please try again."
                }
            }
        },
        {
            type: "input",
            message: "What is their office number?",
            name: "manager_office",
            validate: (input) => {
                if (isNaN(input)) {
                    return "Invalid Input; Please enter a number.";
                }
                else {
                    return true;
                }
            }
        }
    ])
}

function createEmployeePrompt() {
    return inquirer.prompt([
        {
            type: "list",
            message: "What kind of employee would you like to add?",
            name: "employee_role",
            choices: ["Engineer", "Intern"]
        },
        {
            type: "input",
            message: "What is the employee's name?",
            name: "employee_name"
        },
        {
            type: "input",
            message: "What is the employee's ID?",
            name: "employee_ID",
        },
        {
            type: "input",
            message: "What is the employee's email?",
            name: "employee_email",
            validate: (input) => {
                if(input.includes("@") && input.includes(".")) {
                    return true;
                }
                else {
                    return "Invalid Email; Please try again."
                }
            }
        },
        {
            type: "input",
            message: "What is the employee's GitHub username?",
            name: "employee_github",
            when: (answers) => (answers["employee_role"] === "Engineer")
        },
        {
            type: "input",
            message: "What school does the employee currently attend?",
            name: "employee_school",
            when: (answers) => (answers["employee_role"] === "Intern")
        },
    ])
}

function addMorePrompt() {
    return inquirer.prompt([
        {
            type: "list",
            message: "Would you like to add another employee?",
            name: "addAnother",
            choices: ["Yes", "No"]
        }
    ])
    return;
}
module.exports = {createEmployeePrompt, createManagerPrompt, addMorePrompt}