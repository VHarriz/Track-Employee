INSERT INTO department(name)
VALUES ("Department1"),
    ("Department2"),
    ("Department3"),
    ("Department4");

    INSERT INTO role(title, salary, department_id)
    VALUES ("Lead", 100000, 1),
        ("Middle Management", 50000, 2),
        ("Bottom", 32000, 3);

        INSERT INTO employee(first_name, last_name, role_id, manager_id)
        VALUES ("Jon", "Pater", 1,)