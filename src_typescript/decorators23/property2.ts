const allowlist = ["Jon", "Jane"];

const allowlistOnly = (target: any, memberName: string) => {
    let currentValue23: any = target[memberName];         // store the current value of the "property being decorated" 
                                                            // in the 'currentValue23'
                                                            // here 'property_being_decorated' ===> name23

    // At runtime, in the compiled JavaScript code
        // the decorator runs before the instance property is set to its default value
    Object.defineProperty(target, memberName, {
        set: (newValue: any) => {
            if (!allowlist.includes(newValue)) {
                return;
            }
            currentValue23 = newValue;
        },
        get: () => currentValue23
    });
};

class Person45 {
    @allowlistOnly      // Only certain set of values will be allowed to be set to 'name'
    name23: string = "Jon";
}

const p333 = new Person45();
console.log(p333.name23);

p333.name23 = "Peter";
console.log(p333.name23);       // value is never set to Peter (coz its not in the allowlist); fallback to default 'Jon'

p333.name23 = "Jane";
console.log(p333.name23);