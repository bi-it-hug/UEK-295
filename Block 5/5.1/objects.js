export class Book {
    constructor(isbn, title, year, author) {
        this.isbn = isbn;
        this.title = title;
        this.year = year;
        this.author = author;
    }
}

export class Lend {
    constructor(id, isbn, customerId, borrowedAt, returnedAt) {
        this.id = id;
        this.isbn = isbn;
        this.customerId = customerId;
        this.borrowedAt = borrowedAt;
        this.returnedAt = returnedAt;
    }
}
