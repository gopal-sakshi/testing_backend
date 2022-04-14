class Person23 {
    
    constructor(name, club) {
        this.name = name;
        this.club = club;
    };

    getName() {
        console.log(this.name);                                                
        global.console.log(this.name);
        return this.name;
    }
    getClub() {return this.club;}
    getStatement() {return `${this.name} plays for ${this.club}`}

}

module.exports = Person23;                  

// export default Person23;
    // File is a CommonJS module; it may be converted to an ES module.
    // what is the difference between "module.exports" & "export default"