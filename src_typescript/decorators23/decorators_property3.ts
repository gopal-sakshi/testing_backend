const allowlistOnly12 = (allowlist: string[]) => {

    return (target: any, memberName: string) => {
        let currentValue: any = target[memberName];

        Object.defineProperty(target, memberName, {
            set: (newValue: any) => {
                if (!allowlist.includes(newValue)) {
                    return;
                }
                currentValue = newValue;
            },
            get: () => currentValue
        });
    };
}

class Person56 {
    @allowlistOnly12(["Claire", "Oliver"])
    name: string = "Claire";
}

const p56 = new Person56();
console.log(p56.name);
p56.name = "Peter";
console.log(p56.name);
p56.name = "Oliver";
console.log(p56.name);

