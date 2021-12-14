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
  // console.clear();
  console.log("JDL CMS APP");

  inquirer
    .prompt({
      name: "userOption",
      type: "list",
      message: "Select From the following options:",
      choices: initOptions,
    })

    .then((optionSelections) => {
      switch (optionSelections.userOption) {
        // "View all Departments",
        case "View all Departments":
          viewAllDeps();
          break;
        // "View all Roles",
        case "View all Roles":
          viewAllRoles();
          break;
        // "View all Employees",
        case "View all Employees":
          viewAllEmps();
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
          updateEmp();
          break;
        // "Delete an Employee",
        case "Delete an Employee":
          destroyEmp();
          break;
        // "Exit CMS",
        case "Exit CMS":
          console.clear();
          console.log("Thank You for using JDL CMS APP");
          connection.end();
          break;
      }
    });
};

const viewAllDeps = () => {
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
  init();
};

const viewAllRoles = () => {
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
  init();
};
const viewAllEmps = () => {
  console.log("View All Roles:");
  db.query(
    `SELECT * FROM Employees
    `,
    (err, res) => {
      if (err) throw err;
      console.log("\n");
      console.table("Displaying all Employees", res);
    }
  );
  console.log("Select another Operation");
  init();
};

const addDep = () => {
  // console.clear();
  console.log("Add a Department:");
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
  // console.clear();
  console.log("Add a Role:");
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
  // console.clear();
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

// updateEmp();

// destroyEmp();
