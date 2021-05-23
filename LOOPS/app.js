const books = [
    {
        title: 'Coding Awesome',
        author: 'Mel',
        category: 'coding',
        id: 1
    },
    {
        title: 'CSS Sheets',
        author: 'John',
        category: 'CSS',
        id: 2
    },
    {
        title: 'Logical Operators',
        author: 'Mel',
        category: 'JS',
        id: 3
    },
    {
        title: 'Error 404',
        author: 'Juvy',
        category: 'JS',
        id: 4
    },
    {
        title: 'Bootstrap issues',
        author: 'John',
        category: 'CSS',
        id: 5
    }
]

// Traditional for loop
// for( i = 0; i <= books.length; i++) {
//     console.log(books[i].author);
// }

// For Each
// books.forEach((book) => {
//     console.log(book.title)
// })

// filter array
books.filter((book) => {

    let authoredMel = [];

    if(book.author === 'Mel') {
        authoredMel = book.title;
    }

    console.log(authoredMel)
})

