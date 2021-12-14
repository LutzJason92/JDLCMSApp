// const express = require("express");
// const routes = require("./routes");
// const sequelize = require("./config/connection");
const mysql = require("mysql2");
const inquirer = require("inquirer");
const figlet = require("figlet");
// const Connection = require("mysql2/typings/mysql/lib/Connection");
require("console.table");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "EMP_CMS2_db",
  port: 3306,
});

db.connect((err) => {
  if (err) throw err;
  console.log("!!!now connected to EMP_CMS2_db!!!");
  init();
});

const initOptions = [
  // when thens
  "View all Departments",
  "View all Roles",
  "View all Employees",
  "Add a Department",
  "Add a Role",
  "Add an Employee",
  "Update an Employee Role",
  "Delete an Employee",
  "Exit CMS",
];

// inquirer prompts go here
const init = () => {
  console.log("JDL CMS APP");
  inquirer
    .prompt({
      name: "userOption",
      type: "list",
      message: "Select from the following options:",
      choices: initOptions,
    })
    .then((optionSelections) => {
      switch (optionSelections.userOption) {
        // "View all Departments",
        case "View all Departments":
          viewAllDeps();
          console.clear();
          break;
        // "View all Roles",
        case "View all Roles":
          viewAllRoles();
          console.clear();
          break;
        // "View all Employees",
        case "View all Employees":
          viewAllEmps();
          console.clear();
          break;
        // "Add a Department",
        case "Add a Department":
          addDep();

          break;
        // "Add a Role",
        case "Add a Role":
          addRole();

          break;
        // "Add an Employee",
        case "Add an Employee":
          addEmp();

          break;
        // "Update an Employee Role",
        case "Update an Employee Role":
          updateEmpRole();

          break;
        // "Delete an Employee",
        case "Delete an Employee":
          destroyEmp();

          break;
        // "Exit CMS",
        case "Exit CMS":
          console.log("Thank You for using JDL CMS APP");
          db.end();
          break;
      }
    });
};

const viewAllDeps = () => {
  console.clear();
  console.log("View All Departments:");
  db.query(
    `SELECT * FROM Departments
    `,
    (err, res) => {
      if (err) throw err;
      console.log("\n");
      console.table(
        "Displaying Departments and thier respective Identification Numbers",
        res
      );
    }
  );
  console.clear();
  init();
};

const viewAllRoles = () => {
  console.clear();
  console.log("View All Roles:");
  db.query(
    `SELECT * FROM Roles
    `,
    (err, res) => {
      if (err) throw err;
      console.log("\n");
      console.table("Displaying all Roles", res);
    }
  );
  console.clear();
  init();
};
const viewAllEmps = () => {
  console.clear();
  console.log("View All Employees:");
  db.query(
    `SELECT 
    Employees.emp_id, 
    Employees.first_name, 
    Employees.last_name, 
    Roles.title, 
    Departments.dep_name AS Department, 
    Roles.salary, 
    CONCAT(m.first_name, ' ', m.last_name) as Manager
    
    FROM Employees
    
    LEFT JOIN Roles
    ON Employees.role_id = Roles.role_id

    LEFT JOIN Departments
    ON Departments.dep_id = Roles.dep_id
    
    LEFT JOIN Employees m
    ON m.emp_id = Employees.manager_id
    `,
    (err, res) => {
      if (err) throw err;
      console.log("\n");
      console.table("Displaying all Employees", res);
    }
  );
  console.log("Select another Operation");
  console.clear();
  init();
};

const addDep = () => {
  console.log("to ADD a Departmentanswer the following questions:");
  inquirer
    .prompt({
      name: "addDepartment",
      type: "input",
      message: "What is the name of the Department being added?",
    })
    .then((res) => {
      db.query(
        `INSERT INTO Departments (dep_name) VALUES (?);`,
        res.addDepartment,
        function (err) {
          if (err) throw err;
          console.table(res);
          init();
        }
      );
    });
};

const addRole = () => {
  console.log("to ADD a Role, answer the following questions:");
  inquirer
    .prompt([
      {
        name: "addTitle",
        type: "input",
        message: "What is the Title of this Role?",
      },
      {
        name: "addSalary",
        type: "input",
        message: "What is the salary fro this position?",
      },
      {
        name: "addDepId",
        type: "input",
        message: "What is the predetermined Department ID?",
      },
    ])
    .then((res) => {
      db.query(
        `INSERT INTO Roles SET ?`,
        {
          title: res.addTitle,
          salary: res.addSalary,
          dep_id: res.addDepId,
        },
        function (err) {
          if (err) throw err;
          console.table(res);
          console.log("Role Added Successfully");
          init();
        }
      );
    });
};

const addEmp = () => {
  console.log("to ADD an Employee, answer the following questions:");
  inquirer
    .prompt([
      {
        name: "addEmpFirst",
        type: "input",
        message: "What is their FIRST name?",
      },
      {
        name: "addEmpLast",
        type: "input",
        message: "What is their LAST name?",
      },
      {
        name: "empRoleId",
        type: "input",
        message: "Enter thier predefined Role ID?",
      },
      {
        name: "empManager",
        type: "input",
        message: "Enter thier Managers predefined ID?",
      },
    ])
    .then((res) => {
      db.query(
        `INSERT INTO Employees SET ?`,
        {
          first_name: res.addEmpFirst,
          last_name: res.addEmpLast,
          role_id: res.empRoleId,
          manager_id: res.empManager,
        },
        function (err) {
          if (err) throw err;
          console.table(res);
          init();
        }
      );
    });
};

const updateEmpRole = () => {
  console.log("to UPDATE an Employees Role, answer the following questions:");
  inquirer
    .prompt([
      {
        name: "updateId",
        type: "input",
        message: "What is the ID# of the Employee you wish to update?",
      },
      {
        name: "roleId",
        type: "input",
        message:
          "What is the Role ID of the position this employee is moving into?",
      },
    ])
    .then((res) => {
      db.query(
        `UPDATE Employees SET role_id = ? WHERE emp_id = ?`,
        [res.roleId, res.updateId],
        function (err) {
          if (err) throw err;
          console.table(res);
          init();
        }
      );
    });
};

const destroyEmp = () => {
  console.log("To DELETE an Employee, answer the following questions:");
  inquirer
    .prompt([
      {
        name: "deleteId",
        type: "input",
        message: "What is the ID# of the Employee you wish to DELETE?",
      },
    ])
    .then((res) => {
      db.query(
        `DELETE FROM Employees WHERE ?`,
        { emp_id: res.deleteId },
        function (err) {
          if (err) throw err;
          console.table(res);
          init();
        }
      );
    });
};
