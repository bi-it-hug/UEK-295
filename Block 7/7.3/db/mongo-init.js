db = db.getSiblingDB('M295')

db.createCollection('users')
db.createCollection('books')
db.createCollection('lends')

var users = [
    { _id: 1, email: 'desk@library.example', password: 'm295' },
    { _id: 2, email: 'user2@library.example', password: 'pass2' }
]

var books = [
    { isbn: '978-3-16-148410-0', title: 'The Hobbit', year: 1937, author: 'J. R. R. Tolkien' },
    { isbn: '978-1-86197-876-9', title: 'The Lord of the Rings: The Fellowship of the Ring', year: 1954, author: 'J. R. R. Tolkien' },
    { isbn: '978-0-262-13472-9', title: 'Harry Potter and the Philosopher\'s Stone', year: 1997, author: 'Joanne Kathleen Rowling' }
]

var lends = [
    { _id: 1, bookIsbn: books[0].isbn, userId: 1, startDate: new Date('2023-01-01'), endDate: new Date('2023-01-15') },
    { _id: 2, bookIsbn: books[2].isbn, userId: 1, startDate: new Date('2023-01-10'), endDate: new Date('2023-01-20') },
    { _id: 3, bookIsbn: books[1].isbn, userId: 2, startDate: new Date('2023-01-05'), endDate: new Date('2023-01-12') }
]

db.users.insertMany(users)
db.books.insertMany(books)
db.lends.insertMany(lends)

db.users.createIndex({ email: 1 }, { unique: true })
db.books.createIndex({ isbn: 1 }, { unique: true })
db.lends.createIndex({ bookIsbn: 1 })
