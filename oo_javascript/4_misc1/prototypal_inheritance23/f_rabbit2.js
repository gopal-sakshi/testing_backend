function q2() {

}
console.log(q2.prototype.constructor == q2);

// q2.prototype.constructor = () => { return  }

let obj = new q2();     // obj = an object created by constructorFn
let obj2 = new obj.constructor();

// console.log(obj2.prototype.constructor == q2);

// ???????????????????????      INCOMPLETE