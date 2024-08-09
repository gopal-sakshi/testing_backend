// UserService.js
class UserService {

    // constructor injection ===> that requires a dbConnection dependency
    constructor(dbConnection) {
        this.dbConnection = dbConnection;
    }

    // setter injection == enables you to provide dependencies after the object's creation
    // making it flexible to set or change dependencies as needed
    setDbConnection(dbConnection) {
        this.dbConnection = dbConnection;
    }

    createUser(user) {
        // Implementation
    }
}
