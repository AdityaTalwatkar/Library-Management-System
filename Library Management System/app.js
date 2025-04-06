const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3001;

// Middleware to parse JSON
app.use(express.json());
app.use(express.static('public')); // Serve static files from the public directory

// MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'H123127art#12', // Your MySQL password
    database: 'library_management'
});

// Connect to the database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database as ID', connection.threadId);
});

// Fetch all books
app.get('/books', (req, res) => {
    connection.query('SELECT * FROM books', (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Database query error' });
        }
        res.json(results);
    });
});

// Borrow a book
app.post('/borrow', (req, res) => {
    const { book_id } = req.body; // Expecting { book_id: 1 }
    connection.query(
        'UPDATE books SET available_copies = available_copies - 1 WHERE book_id = ? AND available_copies > 0',
        [book_id],
        (err, results) => {
            if (err) {
                return res.status(500).json({ error: 'Database query error' });
            }
            if (results.affectedRows > 0) {
                res.json({ message: 'Book borrowed successfully!' });
            } else {
                res.status(400).json({ message: 'Book not available for borrowing.' });
            }
        }
    );
});

// Submit a book review
app.post('/review', (req, res) => {
    const { book_id, review } = req.body; // Expecting { book_id: 1, review: 'Great book!' }
    connection.query(
        'INSERT INTO reviews (book_id, review) VALUES (?, ?)',
        [book_id, review],
        (err, results) => {
            if (err) {
                return res.status(500).json({ error: 'Database query error' });
            }
            res.json({ message: 'Review submitted successfully!' });
        }
    );
});

// Start the server
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
