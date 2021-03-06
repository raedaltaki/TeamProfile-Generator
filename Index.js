const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const generateHTML= require('./src/page-template');
const writeFile = require('./utils/generate-site.js');

class Team
{
    constructor()
    {
        this.manager;
        this.employees = [];

    }

    createTeam()
    {
        inquirer.prompt(
            [{
                type: 'input',
                message: 'Please enter the team manager’s name',
                name: 'name',
                validate: input => 
                {
                    if (input) 
                    {
                      return true;
                    } else {
                      console.log('You need to enter the team manager’s name!');
                      return false;
                    }
                }
            },
            {
                type: 'input',
                message: 'Please enter the team manager’s employee ID',
                name: 'id',
                validate: input => 
                {
                    if (input) 
                    {
                      return true;
                    } else {
                      console.log('You need to enter the team manager’s employee ID!');
                      return false;
                    }
                }
            },
            {
                type: 'input',
                message: 'Please enter the team manager’s email address',
                name: 'email',
                validate: input => 
                {
                    if (input && input.includes("@")) 
                    {
                      return true;
                    } else {
                      console.log('You need to enter a valid email address!');
                      return false;
                    }
                }
            },
            {
                type: 'input',
                message: 'Please enter the team manager’s office number',
                name: 'officeNo',
                validate: input => 
                {
                    if (input) 
                    {
                      return true;
                    } else {
                      console.log('You need to enter the team manager’s office number!');
                      return false;
                    }
                }
            }])
            .then(( data ) => 
            {
                const manager = new Manager(data.name,data.id,data.email,data.officeNo);
                this.manager= manager;
                console.table(this.manager);
                this.addEmployee();
                
            });
    };

    addEmployee()
    {
        console.log(`
        ----------Team Members----------
        `);
        inquirer.prompt(
            {
                type: 'list',
                message: 'Please enter the team member’s role',
                name: 'role',
                choices:['Engineer','Intern','Finish building the team']
            })
            .then(( action ) => 
            {
                action = action.role;
                if(action === 'Engineer')
                {
                    this.addEngineer();
                }
                else if (action === 'Intern')
                {
                    this.addIntern();
                }
                else
                {
                    // console.log(action.managerName);
                    console.log('Finish building the team');
                    this.createPage();
                }
                
            });
    }

    addEngineer()
    {

        inquirer.prompt(
            [{
                type: 'input',
                message: 'Please enter the engineer’s name',
                name: 'name',
                validate: input => 
                {
                    if (input) 
                    {
                      return true;
                    } else {
                      console.log('You need to enter the engineer’s name!');
                      return false;
                    }
                }
            },
            {
                type: 'input',
                message: 'Please enter the engineer’s employee ID',
                name: 'id',
                validate: input => 
                {
                    if (input) 
                    {
                      return true;
                    } else {
                      console.log('You need to enter the engineer’s employee ID!');
                      return false;
                    }
                }
            },
            {
                type: 'input',
                message: 'Please enter the engineer’s email address',
                name: 'email',
                validate: input => 
                {
                    if (input && input.includes("@")) 
                    {
                      return true;
                    } else {
                      console.log('You need to enter a valid email address!');
                      return false;
                    }
                }
            },
            {
                type: 'input',
                message: 'Please enter the engineer’s github',
                name: 'github',
                validate: input => 
                {
                    if (input) 
                    {
                      return true;
                    } else {
                      console.log('You need to enter the engineer’s github!');
                      return false;
                    }
                }
            }])
            .then(( data ) => 
            {
                const engineer = new Engineer(data.name,data.id,data.email,data.github);
                this.employees.push(engineer);
                console.table(this.employees[this.employees.length-1]);
                this.addEmployee();                
            });

    }

    addIntern()
    {
        inquirer.prompt(
            [{
                type: 'input',
                message: 'Please enter the intren’s name',
                name: 'name',
                validate: input => 
                {
                    if (input) 
                    {
                      return true;
                    } else {
                      console.log('You need to enter the intren’s name!');
                      return false;
                    }
                }
            },
            {
                type: 'input',
                message: 'Please enter the intren’s employee ID',
                name: 'id',
                validate: input => 
                {
                    if (input) 
                    {
                      return true;
                    } else {
                      console.log('You need to enter the intren’s employee ID!');
                      return false;
                    }
                }
            },
            {
                type: 'input',
                message: 'Please enter the intren’s email address',
                name: 'email',
                validate: input => 
                {
                    if (input && input.includes("@")) 
                    {
                      return true;
                    } else {
                      console.log('You need to enter a valid email address!');
                      return false;
                    }
                }
            },
            {
                type: 'input',
                message: 'Please enter the intren’s school',
                name: 'school',
                validate: input => 
                {
                    if (input) 
                    {
                      return true;
                    } else {
                      console.log('You need to enter the intren’s school!');
                      return false;
                    }
                } 
            }])
            .then(( data ) => 
            {
                const intern = new Intern(data.name,data.id,data.email,data.school);
                this.employees.push(intern);
                console.table(this.employees[this.employees.length-1]);
                this.addEmployee();                
            });
    }

    createPage()
    {

        // console.table(this);
        writeFile(generateHTML(this))
        .then(response => {
            console.log(response)
        })
        .catch(err => {
        console.log(err);
        });
    }

}

const x = new Team();
x.createTeam()



// console.log("manager: ");//,x.manager);