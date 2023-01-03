// To create namespace "ns23"
namespace ns23 {

    class User11 { constructor(public name: string) {} }        // not accessible outside "ns23" namespace
    export class User12 { constructor(public name: string) {} }
    // You can export anything from within a namespace, including variables

    const newUser1 = new User11("Jon");
    const newUser2 = new User12("Doe");
}

// const newUser = new User11("Jon");                //  throws ERROR... Cannot find name 'User11'
const newUser = new ns23.User12("Jon");
console.log(newUser);