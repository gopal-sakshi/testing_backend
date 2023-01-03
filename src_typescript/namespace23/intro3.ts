interface StringValidator {
    isAcceptable(s: string): boolean;
}

let lettersRegexp_3 = /^[A-Za-z]+$/;
let numberRegexp = /^[0-9]+$/;

class LettersOnlyValidator implements StringValidator {
    isAcceptable(s: string) { return lettersRegexp_3.test(s); }
}

class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) { return s.length === 5 && numberRegexp.test(s); }
}

let strings = ["Hello", "98052", "101"];

let validators: { [s: string]: StringValidator } = {};
validators["ZIP code"] = new ZipCodeValidator();
validators["Letters only"] = new LettersOnlyValidator();

for (let s of strings) {                // s ========>   "Hello", "98052", "101"
    for (let name in validators) {      // name =====>      "ZIP code", "Letters only"
        let isMatch = validators[name].isAcceptable(s);
        console.log(`'${s}' ${isMatch ? "matches" : "does not match"} '${name}'.`);
    }
}


// As we add more validators,
    // we're going to want to have some kind of organization scheme 
    // so that we can keep track of our types and not worry about name collisions with other objects. 
// Instead of putting lots of different names into the global namespace
    // let's wrap up our objects into a namespace.
    // see intro4.ts

console.log(lettersRegexp_3.test("GopAL"));           // prints true
                                                        // meaning, our implementation is visible outside


