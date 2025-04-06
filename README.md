# 📚 Library Management System

A web-based Library Management System designed to simplify and digitize the process of managing books, members, and transactions in an educational institution or public library.

---

## 🛠️ Tech Stack

**Technologies Used:** "HTML, CSS, JavaScript, PHP, MySQL"

---

## 🚀 Features

- 📖 Add, update, delete, and search books
- 👥 Manage student and staff records
- 🔄 Issue and return books with real-time tracking
- 📊 View available and borrowed books summary
- 🛡️ Secure login for admin and staff
- 🧾 Track fines for overdue books

---

## 🧰 Installation

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/your-username/library-management-system.git
   cd library-management-system
   ```

2. **Set Up the Database**  
   - Import the `library_management.sql` file into your MySQL server.
   - Update your `config.php` or connection file with:
     - DB Name: `library_management`
     - Username: `root`
     - Password: `Your_Password`

3. **Run on Localhost**  
   - Place the project folder in `htdocs` (XAMPP) or `www` (WAMP).
   - Open browser and navigate to:
     ```
     http://localhost/library-management-system
     ```

---

## 📌 Project Structure

- `index.php` – Homepage and login
- `dashboard.php` – Admin dashboard
- `add_book.php` – Add new books
- `manage_users.php` – Handle students/staff
- `issue_return.php` – Issue/return logic
- `db/` – Database configuration and SQL setup

---

## 🗓️ Last Updated

**April 7, 2025**

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
