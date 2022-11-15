// Declarations with var: Always
var arr23 = [1,3,5,7,9];
    // When you fail to specify var, the variable gets placed in the global context
        // Also, if there's no declaration, it's hard to tell in what scope a variable lives (Document or Window or Local)

// const in CAPITAL LETTERS
const PI = 3.14;
const MAX_AGE = 32;
console.log('UPSE CSE age limit for general candidates is ',MAX_AGE);


// use '_' underscore for private properties in class (access modifiers only in typescript)
// use $ for observables

class Person34 {
    private _isAdutl;
    public myName;
    constructor() {
        setTimeout(() => {
            console.log('Person34 instance created after 1 second');
        }, 1000);
    }
    set applyName(newName:string) {
        this.myName = newName;
    }
    // Why do we have to use 'this.myName' and not just 'myName' even in arrowFn23
    private arrowFn23 = (name1, name2) => this.myName = name1+name2;
}