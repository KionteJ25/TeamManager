const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

 const teamMembers = [];
const arrayID = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function appMenu() {
    function createManager() {
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is your manager's name?",
                validate: answer => {
                    if(answer !== "") {
                        return true
                    }
                        return "Please enter a valid name"
                }
            },
            {
                type: "input",
                name: "managerId",
                message: "What is your manager's id?",
                validate: answer => {
                    if(answer !== "") {
                        return true
                    }
                        return "Please enter a valid id"
                }
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is your manager's email?",
                validate: answer => {
                    if(answer !== "") {
                        return true
                    }
                        return "Please enter a vaild email"
                }
            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message: "What is your manager's office number?",
                validate: answer => {
                    if(answer !== "") {
                        return true
                    }
                        return "Please enter a valid office number"
                }
            }

        ]).then(answers => {
            const engineer = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber)
            teamMembers.push(manager)
            arrayId.push(answers.managerId)
        });
    }

    function createEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "What is your engineer's name?",
                validate: answer => {
                    if(answer !== "") {
                        return true
                    }

                    return "Please enter a valid name"
                }
            },
            {
                type: "input",
                name: "engineerId",
                message: "What is your engineers's ID?",
                validate: answer => {
                    if(answer !== "") {
                        return true
                    }

                    return "Please enter a valid ID"
                }
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "What is your engineer's email?",
                validate: answer => {
                    if(answer !== "") {
                        return true
                    }

                    return "Please enter a valid email"
                }
            },
            {
                type: "input",
                name: "engineerGithub",
                message: "What is your engineer's Github?",
                validate: answer => {
                    if(answer !== "") {
                        return true
                    }

                    return "Please enter a valid github"
                }
            }
        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub)
            teamMembers.push(engineer)
            arrayId.push(answers.engineerId)           
        });
    }
            function createIntern() {
                inquirer.prompt([
                    {
                        type: "input",
                        name: "internName",
                        message: "What is your intern's name?",
                        validate: answer => {
                            if(answer !== "") {
                                return true
                            }
        
                            return "Please enter a valid name"
                        }
                    },
                    {
                        type: "input",
                        name: "internId",
                        message: "What is your intern's ID?",
                        validate: answer => {
                            if(answer !== "") {
                                return true
                            }
        
                            return "Please enter a valid ID"
                        }
                    },
                    {
                        type: "input",
                        name: "internEmail",
                        message: "What is your intern's email?",
                        validate: answer => {
                            if(answer !== "") {
                                return true
                            }
        
                            return "Please enter a valid email"
                        }
                    },
                    {
                        type: "input",
                        name: "internSchool",
                        message: "What is your intern's school?",
                        validate: answer => {
                            if(answer !== "") {
                                return true
                            }
        
                            return "Please enter a valid school"
                        }
                    }
        ]).then(answers => {
            const engineer = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool)
            teamMembers.push(intern)
            arrayId.push(answers.internId)
            // run a function here that creates the entire "team" prompting you to create another employee
        });
    }

    function buildTeam() {
        if(!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR)
        }
        fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
    }
};