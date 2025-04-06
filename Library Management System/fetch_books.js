fetch('http://localhost:3001/books')
    .then(response => response.json())
    .then(data => {
        const tableBody = document.getElementById('book-list');
        data.forEach(book => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${book.book_id}</td>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.genre}</td>
                <td>${book.year_published}</td>
                <td>${book.available_copies}</td>
            `;
            tableBody.appendChild(row);
        });
    })
    .catch(error => console.error('Error:', error));
