/*
    (A) extends keyword ---> see ecommerce_ui_lib (or) some angular Repo
    (A1) for type ---> use & instead of extends
    (B) callable signature
    (C) index signatures = allow the interface to have unlimited number of properties
    (D) Declaration Merging ---> typescript compiler will merge multiple declarations into single one
*/

interface Logger11 {
    log: (message: string) => void;
    timestamp23: number;
}

var logger: Logger11;

/*****************************************************************************/

// A
interface Clearable {
    clear: () => void;
}

interface Logger extends Clearable {
    log: (message: string) => void;
}

// SAME AS

interface Logger_sameAsAbove {
    log: (message: string) => void;
    clear: () => void;
}

type Clearable23 = {
    clear: () => void;
}
  
type Logger23a = Clearable23 & {                // we used & instead of extends
    log: (message: string) => void;
}
/**********************************************************************************/

// B ---> an interface with 3 properties ===> callableSignature, Fn property, string property

interface Logger23 {
    (message: string): void;
    log: (message: string) => void;
    invokedBy:string
}
  
const logger_a: Logger23 = ((message: string) => {
    console.log("logged by callable ===>", message);
}) as Logger23

logger_a.log = (message: string) => {
    console.log("logged by logFn ===> ", message);
}
logger_a.invokedBy = "gopal23";

logger_a("idi callable dwara print autundi");
logger_a.log("idi log function dwaaara");
console.log("evaru invoke chesaaru ===> ", logger_a.invokedBy);
/**********************************************************************************/

// C

interface DataRecord23 {
    fieldA: string;                 // "feildA" maatram anniti lo undaali; 
    [key: string]: string;
}

const data1: DataRecord23 = {
    fieldA: "valueA",
    fieldB: "valueB",
    fieldC: "valueC",
};

const data2: DataRecord23 = {
    fieldA: "evevo properties",
    club: "RMA",
    manager: "Ancelotti"
};

console.log("keys ===> ", data1.fieldA, data2.club)
/**********************************************************************************/

// D
// helpful when you need to augment existing modules with new properties. 
// One use-case for that is when you are adding more fields to a data structure provided by a library.
// 
interface DatabaseOptions {
    host: string;
    port: number;
    user: string;
    password: string;
}

interface DatabaseOptions {
    dsnUrl: string;
}

var dbOptions23:DatabaseOptions = {
    host: 'localhost', port: 5432,
    user: 'postgres', password: '1258',
    dsnUrl: ''          // ee line comment cheste error vastundi
}
/**********************************************************************************/