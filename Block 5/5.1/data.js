import { Book, Lend } from "./objects.js"

export const books = [
    new Book(
        "978-3-16-148410-0",
        "The Hobbit",
        1937,
        "J. R. R. Tolkien"
    ),
    new Book(
        "978-1-86197-876-9",
        "The Lord of the Rings: The Fellowship of the Ring",
        1954,
        "J. R. R. Tolkien"
    ),
    new Book(
        "978-0-262-13472-9",
        "Harry Potter and the Philosopher's Stone",
        1997,
        "Joanne Kathleen Rowling"
    ),
]

export const lends = [
    new Lend(
        1,
        books[0].isbn,
        1,
        new Date("2023-01-01"),
        new Date("2023-01-15")
    ),
    new Lend(
        2,
        books[2].isbn,
        1,
        new Date("2023-01-10"),
        new Date("2023-01-20")
    ),
    new Lend(
        3,
        books[1].isbn,
        2,
        new Date("2023-01-05"),
        new Date("2023-01-12")
    ),
]
