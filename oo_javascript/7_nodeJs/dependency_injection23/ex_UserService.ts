import { UserRepository } from "./ex_UserRepository";

export class UserService {
    userRepo: UserRepository;

    constructor() {
        this.userRepo = new UserRepository();
    }

    // we can pass the instance of UserRepository to the UserService class
    // When we are testing the UserService class, 
    // we can pass the mock instance of UserRepository to the UserService class 
    constructor_with_DI(userRepo: UserRepository) {
        this.userRepo = userRepo;
    }

    getUserData = () => {
        this.userRepo.getAll();
    };
}