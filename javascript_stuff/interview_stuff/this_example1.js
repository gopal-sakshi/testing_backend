//'use strict';
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

const getId = user.credentials.getId;
console.log(getId());                            
// In non-strict mode, this would be bound to the global object. 
    // But here we are in strict mode, therefore this will be set to undefined. 
    // And trying to read the id property from undefined, will throw a type error:

console.log(user.getId());
console.log(user.credentials.getId());