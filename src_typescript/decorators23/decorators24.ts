function sealed(constructor23: Function) {
    Object.seal(constructor23);
    Object.seal(constructor23.prototype);
}

@sealed
class BugReport {
    type = "report";
    title: string;

    constructor(t: string) {
        this.title = t;
    }
}

// When @sealed is executed
    // it will seal both the constructor and its prototype
    // and will therefore prevent any further functionality from being added to or removed from this class 
    // during runtime by accessing BugReport.prototype or by defining properties on BugReport itself 


var b1 = new BugReport('small bug');
// BugReport.prototype.newProperty23 = 'new prop anta';        // we added newProperty23 to "BugReport" class
                                                                // throws Javascript error... 
                                                                // program will NOT run
                                                                // Cant add property newProperty23, object isnt extensible
// b1.newProperty24 = 'blah_blah';                             // we added newProperty24 to "b1" instance
                                                                // throws typescript ERROR, ignore it...
                                                                // still the JS will reflect the whole b1 instance
                                                                // program will run...
                                                    
console.log(b1);

var b2 = new BugReport('pedda bug');
console.log(b2);
