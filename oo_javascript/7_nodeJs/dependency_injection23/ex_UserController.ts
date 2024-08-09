/*
    The request will come to the Controller, which handles all the routing
    The Controller will call the Service, which handles all the business logic
    The Service will call the Repository, which handles all the database calls


    Typical dependency flow in a Node.js application.
    - we can see that the Controller creates the instance of UserService
    - and the Service creates the instance of Repository.

    Creating one class instance inside another is not a good practice because 
    now these two classes (UserRepository & UserService) have tight coupling.
*/


import { UserService } from "./ex_UserService";

export class UserController {
    userService: UserService;

    constructor() {
        this.userService = new UserService();

        // ======== this achieves Dependency Injection
        // const mockUserRepo = {
        //     getAll: () => { },
        // };
        // const userService = new UserService(mockUserRepo);
    }


    getUserData = () => {
        this.userService.getUserData();
    };
}