function findUser_impure(users, item) {
    const reversedUsers = users.reverse();
    const found = reversedUsers.find((user) => {
        return user === item;
    });
    
    // use this in browser Context
    // document.getElementById('user-found').innerText = found;

    // use this for testing purposes
    console.log(`impureFn directly accessing console/DOM ${found}`);
}
/****************************************************************** */

// Above is impure function because ===> two essential principles of the pure function are broken
// - We are mutating the input.
// - We are querying and manipulating the DOM (or console.log)



/****************************************************************** */

function findUser_pure(users, item) {
    
    // we have cloned the input 
        // and then mutated the copy (we did not mutate the original Input) for the find operation.
    const reversedUsers = [ ...users].reverse();    
    const found = reversedUsers.find((user) => {
        return user === item;
    });

    // Return the found element
    return found;
}
/******************************************************************/

let users_pure = ['Tapas', 'Alex', 'John', 'Maria'];
let found_pure = findUser_pure(users_pure, 'Maria');
console.log(`pureFn returned a value, which we will log now ${found_pure} ==> control is with us`);
console.log(`users_pure unaffected ==> ${users_pure}`);

let users_impure = ['Tapas', 'Alex', 'John', 'Maria'];
findUser_impure(users_impure, 'Maria');
console.log(`users_impure got affected ==> ${users_impure}`);