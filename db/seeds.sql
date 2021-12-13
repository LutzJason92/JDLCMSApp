INSERT INTO Departments (dep_name)
VALUES (Sales),
       (Engineering),
       (Finance),
       (Legal);


INSERT INTO Role (title, salary, dep_id, is_manager)
VALUES ("Sales Lead", 100000, 1, true),
 ("Sales Rep", 80000, 1, false),
 ("Lead Engineer", 150000, 2, true),
 ("Software Engineer", 120000, 2, false),
 ("Account Manager", 160000, 3, true),
 ("Accountant", 125000, 3, false),
 ("Legal Team Lead", 250000, 4, true),
 ("Lawyer", 190000, 4, false),
       


INSERT INTO Employees (first_name, last_name, role_id, manager_id )
VALUES 
    ("Jason", "Lutz", 4, 3),
    ("Ben", "Macho", 3, null),
    ("Cameron", "Sample", 5, null),
    ("Aaron", "Sample", 4, 3),
   
       