// const express = require("express");
// const routes = require("./routes");
// const sequelize = require("./config/connection");
const mysql = require("mysql2");
const inquirer = require("inquirer");
const figlet = require("figlet");
requirer("console.table");

const mysql = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "EMP_CMS2_db",
  port: 3306,
});

mysql.connect((err) => {
  if (err) throw err;
  console.log("!!!now connected to EMP_CMS2_db!!!");
  init();
});

const startQuestions = [
  // when thens
  "View all Departments",
  "View all Roles",
  "View all Employees",
  "Add a Department",
  "Add a Role",
  "Add an Employee",
  "Update an Employee Role",
];

// inquirer prompts go here
const init = () => {
  console.clear();
  logo("JDL CMS APP");
};
