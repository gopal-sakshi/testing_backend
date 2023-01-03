// namespaces in TypeScript also allow for declaration merging
// https://www.typescriptlang.org/docs/handbook/namespaces.html
namespace ns23 {
    export class User { constructor(public name: string) { } }
    export const newUser = new User("Jon");
}

namespace ns23 {
    // you can use any member 
        // previously exported in ns23 namespace
    export class UserRole { constructor(public user: User, public role: string) { } }
    export const newUserRole = new UserRole(newUser, "admin");
}

// See how code is transpiled into JS
    // an unintialized variable "ns23"
    // an IIFE with the actual code ===> this IIFE ===> sets the properties of "ns23" object
