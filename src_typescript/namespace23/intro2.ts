namespace ns23 {
    export class User { constructor(public name: string) { } }
    export const newUser = new User("Jon");
}

namespace ns23 {                                // declaration merging
    export class UserRole { constructor(public user: User, public role: string) { } }
    export const newUserRole = new UserRole(newUser, "admin");
}

namespace ns24 {
    import { User } from ns23
    class UserNs24 { constructor(public user:User) {} }
}
// See how code is transpiled into JS
    // an unintialized variable "ns23"
    // an IIFE with the actual code ===> this IIFE ===> sets the properties of "ns23" object
