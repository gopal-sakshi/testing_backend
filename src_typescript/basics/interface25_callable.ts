interface callable25 {      // one is callableFn; another is bool property, another is string property
    (percentCallable:number) : number;
    isAbove50:boolean;
    invokedBy:string;
}

var tst1:callable25 = ((num1:number) => (num1 / 100)) as callable25;
tst1.isAbove50 = false;
tst1.invokedBy = 'gopal';

var tst2:callable25 = ((num1:number) => (num1 / 200)) as callable25;
tst2.isAbove50 = true;
tst2.invokedBy = 'subbaRao';

console.log(" resp22 ==========>", tst1(23), tst2(23));
/**************************************************************************************/
interface FunctionInterface {
    (s: string): boolean;
    isAbove50: boolean
}

const fn23 = (s:string) => { if(s.length > 30) return false; else return true; }
const f: FunctionInterface =  (fn23) as FunctionInterface;
f.isAbove50 = true;

const bigString: boolean = f('false_if_length_above_30_inka_chaalu_too_much_asalu');
const smallString: boolean = f('idi_chinnadi');
console.log("resp23 ====> ", bigString, smallString);
/**************************************************************************************/