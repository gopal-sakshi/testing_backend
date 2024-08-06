interface IMarkReadOnly {
    readonly [key :string] : any; 
}

// https://medium.com/@skull-sage/immutability-usefulness-of-readonly-in-typescript-ed2a122d7fd4

class Book23 implements IMarkReadOnly {
    
    name : string;
    author: string;
    published: boolean = false; // Error: must be initilized here or in constructor

    constructor(name, author, published) {
        this.name = name; 
        this.author = author;
        this.published = published;
    }

    changeAuthorName(author) {
        // this.author = 
    }
}