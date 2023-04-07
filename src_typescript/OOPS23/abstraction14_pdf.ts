import { Book } from "./abstraction14_book";

class PDF extends Book {
    getBookType (): string { return 'PDF23'; }                 // this abstract method MUST be implemented... try commenting & see
}

const pdf1 = new PDF('laxmikanth', 'modern polity');
console.log(pdf1.getBookType());
