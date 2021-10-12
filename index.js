//Local Packages
const prompts = require("./lib/prompts")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");

//External Packages
const fs = require('fs');
const inquirer = require("inquirer");

async function init() {
    let employeeList = [];

    //Ask a user for information to create a manager object
    let managerAnswers = await prompts.createManagerPrompt();
    let manager = new Manager(managerAnswers["manager_name"], managerAnswers["manager_ID"], managerAnswers["manager_email"], managerAnswers["manager_office"])
    employeeList.push(manager);

    //Ask a user if they would like to add employees 
    let employeeAnswers;
    let employee;
    let moreEmployees = await prompts.addMorePrompt();
    moreEmployees = moreEmployees["addAnother"]
    console.log(moreEmployees)
    
    //If they answer yes, they add information and will be asked to add more after each entry
    while (moreEmployees === "Yes") {
        employeeAnswers = await prompts.createEmployeePrompt();
        if(employeeAnswers.employee_role === "Engineer") {
            employee = new Engineer(employeeAnswers["employee_name"], employeeAnswers["employee_ID"], employeeAnswers["employee_email"], employeeAnswers["employee_github"]);
        }
        else{
            employee = new Intern(employeeAnswers["employee_name"], employeeAnswers["employee_ID"], employeeAnswers["employee_email"], employeeAnswers["employee_school"]);
        }
        //Add to array of employees
        employeeList.push(employee);
        moreEmployees = await prompts.addMorePrompt();
        moreEmployees = moreEmployees["addAnother"]
    }
    console.log(employeeList);
    return employeeList;
}

async function initTest() {
    let moreEmployees = await prompts.addMorePrompt();
    console.log(moreEmployees)
}

init();
