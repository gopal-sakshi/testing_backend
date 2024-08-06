interface Person44 {
    name: string;
    age: number;
    address: {
        street: string;
        city: string;
    };
}

/**************************************************************************/
// We can modify properties of person101 ---> if we use just 'Person44' interface
const person101:Person44 = {
    name: "CR7",
    age: 39,
    address: {
        street: "Chamartin",
        city: "Madrid"
    }
}
person101.name = 'Cristiano';
person101.address.street = 'ConchaEspina';
console.log("person101 ====> ", person101);
/**************************************************************************/

// So, we develop a type ---> that makes anything it receives as readonly
type DeepReadonly<T> = {
    readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
}

type ReadonlyPerson33 = DeepReadonly<Person44>;

const person123: ReadonlyPerson33 = {
    name: 'John',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'Exampleville',
    },
};

// This will result in a TypeScript error because properties are readonly:
// person123.name = 'Alice';
// person123.address.street = 'kotha_street'

/**************************************************************************/