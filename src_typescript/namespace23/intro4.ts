// we'll move all validator-related entities into a namespace called Validation
// Because we want the interfaces & classes here to be visible outside the namespace
// we preface them with export. 
// Conversely, the variables lettersRegexp_4 & numberRegexp are implementation details
// so they are left unexported
// and will not be visible to code outside the namespace

namespace Validation {
    export interface StringValidator { isAcceptable(s: string): boolean; }
    const lettersRegexp_4 = /^[A-Za-z]+$/;        // this is our implementation... copy-right... we wont share outside
    const numberRegexp = /^[0-9]+$/;
    export class LettersOnlyValidator implements StringValidator {
        isAcceptable(s: string) { return lettersRegexp_4.test(s); }
    }
    export class ZipCodeValidator implements StringValidator {
        isAcceptable(s: string) { return s.length === 5 && numberRegexp.test(s); }
    }
}

let strings1 = ["Hello", "98052", "101"];
let validators1: { [s: string]: Validation.StringValidator } = {};
validators1["ZIP code"] = new Validation.ZipCodeValidator();
validators1["Letters only"] = new Validation.LettersOnlyValidator();

for (let s of strings1) {
    for (let name in validators1) {
        console.log(`"${s}" - ${validators1[name].isAcceptable(s) ? "matches" : "does not match" } ${name}`);
    }
}

console.log(lettersRegexp_4.test("GopAL"));     // ERROR: Cannot find name 'lettersRegexp_4'     while transpiling
                                                // ERROR: while running JS ==> lettersRegexp_4 is not defined


// If we split this file into multipleFiles (all contributing to the same namespace)
    // Validation.ts                    exports interface StringValidator
    // LettersOnlyValidator.ts          exports a class which implements letters-only-validation
    // zipcodeOnlyValidator.ts          exports a class which implements zip-code-validation
// we have to use /// <reference path="Validation.ts" />
    // reference tags to tell the compiler about the relationships between the files.