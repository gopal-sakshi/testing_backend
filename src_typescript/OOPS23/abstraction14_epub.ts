import { Book } from "./abstraction14_book";

class EPUB extends Book {
    constructor(author: string, title: string) { super(author, title); }
    getBookType(): string { return 'EPUB'; }
}