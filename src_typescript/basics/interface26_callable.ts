interface MyCallable {
    (param1: string, param2: number): string;
    prop1: string;
    prop2: number;
    extraMethod: (param1: boolean) => boolean;
}

function makeMyCallable(prop1: string, prop2: number): MyCallable {
    let that = ((param1: string, param2: number) => param1 + param2) as MyCallable;
    that.prop1 = prop1;
    that.prop2 = prop2;
    that.extraMethod = (param1: boolean) => !param1;
    return that;
}

let mc = makeMyCallable("3", 4);

mc("3", 4);
mc.prop1 = "string";
mc.prop2 = 5;
mc.extraMethod(false);

/**************************************************************************/

interface Func1 {
    (v1: number, v2: number): number;
    (v1: string, v2: string): string;
}

const f1: Func1 = (v1, v2): any => {
    return v1 + v2;
};
console.log(f1("1", "2"));
console.log(f1(1, 2));
/**************************************************************************/