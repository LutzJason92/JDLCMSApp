INSERT INTO Departments (dep_name)
VALUES ("Sales"),
       ("Engineering"),
       ("Finance"),
       ("Legal");


INSERT INTO Roles (title, salary, dep_id)
VALUES ("Sales Lead", 100000, 1),
 ("Sales Rep", 80000, 1),
 ("Lead Engineer", 150000, 2),
 ("Software Engineer", 120000, 2),
 ("Account Manager", 160000, 3),
 ("Accountant", 125000, 3),
 ("Legal Team Lead", 250000, 4),
 ("Lawyer", 190000, 4),
       


INSERT INTO Employees (first_name, last_name, role_id, manager_id )
VALUES 
    ("Jason", "Lutz", 4, 2),
    ("Ben", "Macho", 3, null),
    ("Cameron", "Sample", 5, null),
    ("Aaron", "Sample", 4, 2),
   
       