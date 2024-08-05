interface IPayable {
    (percent: number): boolean;     // when this function is implemented, it is callable
}
 
class Person33  {
    constructor(private validator: IPayable) { }
    increasePay(percent: number): boolean { return this.validator(percent); }
}
 
let forEmployees: IPayable = (percent) => {
    console.log("Increasing salary by ", percent);
    return true;
};
 
let forContractors: IPayable = (percent) => {
    var increaseCap: number = 20;
    if (percent < increaseCap) {
        console.log("Increasing hourly rate by", percent);
        return true;
    } else {
        console.log("Sorry, the increase cap for contractors is ", increaseCap);
        return false;
    }
}
 
let workers: Array<Person33> = [];
let forTempWorkers = () => console.log("Can't increase salary for temps"); 

workers[0] = new Person33(forEmployees); 
workers[1] = new Person33(forContractors);
// workers[2] = new Person33(forTempWorkers);           // throws ERROR during compile time; but javascript crashes @ runtime

workers.forEach(worker =>worker.increasePay(30));

/*
    EXPLANATION:
    - we created 2 functions -- forEmployees, forContractors
    - we pass these two functions as arguments to constructor of Person33 class
    - we will call/invoke the increasePay() function of Person33 class
    - this inturn calls/invokes ====> this.validator() method
    - this.validator either refers to forEmployees() Fn (OR) forContractors() Fn
    - so, in effect, we are invoking either of these functions

*/