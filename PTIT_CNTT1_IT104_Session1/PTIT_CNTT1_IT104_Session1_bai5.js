const response = {
    data: {
        id: 1,
        title: 'Destructuring in JavaScript',
        author: {
            name: 'Dev',
            email: 'Dev@gmail.com',
        },
    },
};

function extractData({ data }) {
    const { title, author } = data;
    const { name: authorName, email: authorEmail } = author;

    console.log('Title:', title);
    console.log('Author Object:', author);
    console.log('AuthorName:', authorName);
    console.log('AuthorEmail:', authorEmail);
}

extractData(response);
