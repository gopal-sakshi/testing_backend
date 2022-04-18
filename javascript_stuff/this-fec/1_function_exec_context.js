var cObj1 = {
    name : 'gopal',
    sayName() { 
        console.log(this);                  // see the console... this refers to cObj1
        console.log(this.name);
        return 'jing chak1';
    }
}

var cObj2 = {
    name: 'sakshi',
    sayName: () => {
        console.log(this);
        return 'jing chak2'
    }
}



var blah4 = cObj1.sayName();
console.log("calling method, ie a method in an object");
console.log(blah4);

