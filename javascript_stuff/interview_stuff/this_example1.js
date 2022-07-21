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
            console.log(this);      
            return this.id;             
        }
    },
};

const getId44 = user.credentials.getId;
console.log(getId44());
// In non-strict mode, this would be bound to the global object. 
    // But here we are in strict mode, therefore this will be set to undefined. 
    // And trying to read the id property from undefined, will throw a type error:
console.log('----------------- X23 ---------------------');
console.log(user.getId());
console.log('----------------- X24 ---------------------');
console.log(user.credentials.getId());
console.log('----------------- X25 ---------------------');