var Person33 = /** @class */ (function () {
    function Person33(validator) {
        this.validator = validator;
    }
    Person33.prototype.increasePay = function (percent) { return this.validator(percent); };
    return Person33;
}());
var forEmployees = function (percent) {
    console.log("Increasing salary by ", percent);
    return true;
};
var forContractors = function (percent) {
    var increaseCap = 20;
    if (percent < increaseCap) {
        console.log("Increasing hourly rate by", percent);
        return true;
    }
    else {
        console.log("Sorry, the increase cap for contractors is ", increaseCap);
        return false;
    }
};
var workers = [];
var forTempWorkers = function () { return console.log("Can't increase salary for temps"); };
workers[0] = new Person33(forEmployees);
workers[1] = new Person33(forContractors);
// workers[2] = new Person33(forTempWorkers);           // throws ERROR during compile time; but javascript crashes @ runtime
workers.forEach(function (worker) { return worker.increasePay(30); });
/*
    EXPLANATION:
    - we created 2 functions -- forEmployees, forContractors
    - we pass these two functions as arguments to constructor of Person33 class
    - we will call/invoke the increasePay() function of Person33 class
    - this inturn calls/invokes ====> this.validator() method
    - this.validator either refers to forEmployees() Fn (OR) forContractors() Fn
    - so, in effect, we are invoking either of these functions

*/ 
