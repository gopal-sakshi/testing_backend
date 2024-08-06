// class properties that are marked as readonly needs to be instantiated at 
    // the point of declaration or 
    // in the constructor as shown below:



class FooClz {
    readonly bar:number = 1; 
    readonly baz: string;
    constructor() {
        this.baz = "hello";
    }
}
