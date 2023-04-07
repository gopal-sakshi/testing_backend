export abstract class Book {
    private author: string;
    private title: string;

    constructor(author: string, title: string) {
        this.author = author;
        this.title = title;
    }

    abstract getBookType(): string;
}