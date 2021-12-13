// const express = require("express");
// const routes = require("./routes");
// const sequelize = require("./config/connection");
const mysql = require("mysql2");
const inquirer = require("inquirer");
const figlet = require("figlet");
const Connection = require("mysql2/typings/mysql/lib/Connection");
requirer("console.table");

const dbconnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "EMP_CMS2_db",
  port: 3306,
});

dbconnection.connect((err) => {
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
  console.clear();
  logo("JDL CMS APP");

  inquirer
    .prompt({
      name: "userOption",
      type: "list",
      message: "Welcome to JDL CMS APP. Select From the following options:",
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
        case "View all Departments":
          addRole();
          break;
        // "Add an Employee",
        case "View all Departments":
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
          logo("Thank You for using JDL CMS APP");
          connection.end();
          break;
      }
    });
};

const viewAllDeps = () => {
  logo("View All Departments:");
  mysql.uery();
};

viewAllRoles();

viewAllEmps();

addDep();

addRole();

addEmp();

updateEmp();

destroyEmp();
