// index.js
const mysql = require('mysql');
const UserService = require('./DI_UserService');

// Create a database connection
const dbConnection = mysql.createConnection({
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: 'your_database',
});

// Create an instance of UserService with the database connection injected
const userService = new UserService(dbConnection);

// Use the UserService to create a user
const newUser = { name: 'John Doe', email: 'john@example.com' };
userService.createUser(newUser);