class blah23 {    
    private name1: string = 'hgjhgj';
    private fullName3:string = ``;
    // private fullName2 = `sakshi_${this.name1}_${this.name2}`;
    constructor(private name2:string = 'krishna') {
        this.name1 = `gopal`;
        this.fullName3 = `sakshi_${this.name1}_${this.name2}`;
    }
    getName() {
        var fullName1 = `sakshi_${this.name1}_${this.name2}`;
        console.log(this.fullName3);
        // console.log(this.name1)
        return fullName1
        // console.log(this.fullName2);
    }
}

const b14 = new blah23();
b14.getName();