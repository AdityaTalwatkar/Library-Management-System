document.addEventListener('DOMContentLoaded', function () {
    fetch('/books')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('books-table-body');
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
        .catch(error => {
            console.error('Error fetching books:', error);
        });
});
