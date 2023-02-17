const developer = {
    firstName: "John",
    lastName: "Doe",
    getDevName: function() {
        let fullName = this.firstName + " " + this.lastName;
        return fullName;
    }
}

// APProach I
const logDevName = function () { console.log('logged: ' + this.getDevName()); }
const boostedLogDevName = logDevName.bind(developer);
boostedLogDevName();

// APproach II
(function () { console.log('logged: ' + this.getDevName()); }).bind(developer)();

