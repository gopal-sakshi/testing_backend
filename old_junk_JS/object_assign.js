let names22 = [
    {
        name: 'gopal',
        age: 33
    },
    {
        name: 'priya',
        age: 28
    },
    {
        name: 'sahasra',
        age: 2
    }
]
var targetObj=[];

//Object.assign(targetObj, {names22});
Object.assign(targetObj, names22);
console.log(targetObj);
//Object.assign(this, names22);
console.log(this);