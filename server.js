const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');

require('dotenv').config();
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'track_employee_db'
    },
);

function startPrompt() {
  inquirer.prompt([
    {
      type: 'list',
      message: 'What do you want to do today?',
      name: 'selection',
      choices: ['view all employees', 'add employee', 'update employee roles', 'view all roles', 'add role', 'view all departments' ,'add department'],
    },
  ]).then(function(data) {
    switch (data.choice) {
      case 'View all employees':
        viewAllEmployees();
        break;

        case 'add employee':
          addEmployee();
          break;

          case 'View all roles':
            viewAllRoles();
            break;

            case 'add role':
              addRole();
              break;

              case 'View all departments':
                viewAllDepartments();
                break;

                case 'Add department':
                  viewDepartment();
                  break;
    }
  })
};

function addEmployee() {
  inquirer.prompt([
    {
      name: "firstname",
      type: "input",
      message: "Enter first name"
    },
    {
      name: "lastname",
      type: "input",
      message: "Enter last name"
    },
    {
      name: "role",
      type: "list",
      message: "Which role?",
      choices: "list possible role choices"
    }
  ])
};



app.use((req, res) => {
    res.status(404).end();
  });
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

  startPrompt();