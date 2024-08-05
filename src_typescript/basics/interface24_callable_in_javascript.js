class Person33  {
    // create a new property validator and assign someFn to this property in constructor
    constructor(validatorArg) { this.validator = validatorArg }
    increasePay(percent) { return this.validator(percent); }
}
 
let forEmployees = (percent) => {
    console.log("Increasing salary by ", percent);
    return true;
};
 
let forContractors = (percent) => {
    var increaseCap = 20;
    if (percent < increaseCap) {
        console.log("Increasing hourly rate by", percent);
        return true;
    } else {
        console.log("Sorry, the increase cap for contractors is ", increaseCap);
        return false;
    }
}
 
let workers = [];

let forTempWorkers11 = () => console.log("Can't increase salary for temps"); 
let forTempWorkers12 = (percent23) => { console.log("salary penchamu"); return false } 

workers[0] = new Person33(forEmployees); 
workers[1] = new Person33(forContractors);
workers[2] = new Person33(forTempWorkers11);          // idi manchiga compile autundi... but runtime to crash autundi
workers[3] = new Person33(forTempWorkers12);          // idi manchiga compile autundi... but runtime to crash autundi

workers.forEach(worker => {
    let resp = worker.increasePay(30);
    console.log("resp ===> ", resp);        // forTempWorkers11 returns undefined; but others return false/true
                                            // if you try to read resp.something23 --> JS crashes
                                            // cant read properties of undefined
});

/*
    forTempWorkers11 ---> dont take anything as argument returns undefined 
    forTempWorkers12 ---> takes a number as argument, returns boolean =====> so, application wont CRASH
*/