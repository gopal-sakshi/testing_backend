// 'use strict';
const user = {
    id: 551,
    name: 'Tom',
    getId() {
        console.log(this);          
        return this.id;             
    },
    credentials: {
        id: 120,
        username: 'tom',
        getId() {
            console.log(`now this ===> ${this}`);      
            return this.id;             
        }
    },
};

const getId44 = user.credentials.getId;
console.log('return value is ', getId44());
// In non-strict mode, this would be bound to the global object. 
    // But here we are in strict mode, therefore this will be set to undefined. 
    // And trying to read the id property from undefined, will throw a type error:
console.log('----------------- X23 ---------------------');
console.log(user.getId());
// now, user.getId() ======> so, getId() has a scope which is 'user' object... so, this inside getId() will refer to 'user' object itself
console.log('----------------- X24 ---------------------');
console.log(user.credentials.getId());
// user.credentials.getId() ===> so, within getId() function of user.credentials ====> this refers to 'credentials' object
    // because user.credentials will form the scope as it invoked via user.credentials.getId()
console.log('----------------- X25 ---------------------');